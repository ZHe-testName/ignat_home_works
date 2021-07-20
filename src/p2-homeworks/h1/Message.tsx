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

    console.log(classes);
 
    return (
        <div  className={classes.message}>
            <div className={classes.avatar}>
                    <img src={avatar} alt="avatar image" />
            </div>

            <div className={classes.textblock}>
                <div className="text-field">
                    <div className="client-name">
                        {name}
                    </div>

                    <div className="message-text">
                        {message}
                    </div>
                </div>
                
                <div className="time-field">
                    {time}
                </div>
            </div>
        </div>
    );
};

export default Message;
