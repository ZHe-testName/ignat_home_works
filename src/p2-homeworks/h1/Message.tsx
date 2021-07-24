import React from 'react';
import classes from './Message.module.css';

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
};

function Message(props: MessagePropsType) {
    const {avatar, name, message, time} = props;

    return (
        <div  className={classes.message}>
            <div className={classes.avatar}>
                    <img src={avatar} alt="user avatar" />
            </div>

            <div className={classes.textblock}>
                <div>
                    <div>
                        {name}
                    </div>

                    <div>
                        {message}
                    </div>
                </div>
                
                <div>
                    {time}
                </div>
            </div>
        </div>
    );
};

export default Message;
