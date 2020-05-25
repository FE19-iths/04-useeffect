import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        let intervalId = setInterval(() => {
            setTime(getTime());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
        Klockan är: {time}.
        </div>
    )
}

function getTime() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    console.log(hour, minute, second);
    return `${hour}:${minute}:${second}`;
}

export default Clock;
