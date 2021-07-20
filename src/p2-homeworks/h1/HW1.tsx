import React from 'react'
import Message from './Message'

const messageData = {
    avatar: 'https://st4.depositphotos.com/9449108/25247/i/600/depositphotos_252470774-stock-photo-samurai-stands-circled-in-an.jpg',
    name: 'Some Name',
    message: 'some text some text some text some text some text some text some text some text',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            /> 

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
