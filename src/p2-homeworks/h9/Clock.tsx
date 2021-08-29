import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

import classes from './clock.module.css';

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<string>()
    const [show, setShow] = useState<boolean>(false)
    const [time, setTime] = useState<string>(klickKlock())

    function klickKlock (){
        const date = new Date();

        const sec = date.getSeconds(),
            min = date.getMinutes(),
            hour = date.getHours();

        return `${(hour < 10) ? '0' + hour : hour} : ${(min < 10) ? '0' + min : min} : ${(sec < 10) ? '0' + sec : sec}`;
    };

    function getDate (){
        const date = new Date();
        
        const day = date.getDate(),
            mounth = date.getMonth() + 1,
            year = date.getFullYear();



        return `${(day < 10) ? '0' + day : day} . ${(mounth < 10) ? '0' + mounth : mounth} . ${year}`;
    };   

    const stop = () => {
        // stop
        clearInterval(timerId);

        setTimerId(0);
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            setTime(klickKlock());      
        }, 1000);

        setTimerId(id)
    }

    const onMouseEnter = () => {
        // show
        setDate(getDate());

        setShow(true);
    }
    const onMouseLeave = () => {
        // close
        setShow(false);
    }

    const stringTime = time; // fix with date
    const stringDate = date; // fix with date

    return (
        <div className={classes.clockWrap}>
             <div>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>  
            </div>

            <div className={classes.clock}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {stringTime}
                </div>

                {show && (
                    <div className={classes.date}>
                        {stringDate}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Clock
