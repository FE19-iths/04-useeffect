import React, { useState, useEffect } from 'react';

const Effect = () => {
    const [message, setMessage] = useState('inget meddelande');
    const [toggle, setToggle] = useState(true);
    // console.log('Effect körs');

    useEffect(() => {
        console.log('jag körs bara en gång');
        setMessage('useEffect har körts')
    }, [])

    useEffect(() => {
        console.log('jag körs när "message" har uppdaterats');
    }, [message]);

    useEffect(() => {
        console.log('jag körs när "toggle" har uppdaterats');
    }, [toggle]);

    useEffect(() => {
        console.log('jag körs när "message" eller "toggle" har uppdaterats');
    }, [message, toggle]);

    useEffect(() => {
        console.log('jag körs varje gång state har ändrats');
    });

    return (
        <div>
            Effect: {message} <br/>
            <button onClick={() => setToggle(!toggle)}> Toggle {toggle ? 'on' : 'off'} </button>
        </div>)
}

export default Effect;
