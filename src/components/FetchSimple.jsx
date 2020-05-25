import React, { useState, useEffect } from 'react';

const FetchSimple = () => {
    const url = 'https://forverkliga.se/JavaScript/api/simple.php';
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            console.log('About to send request: ', url);
            const response = await fetch(url);
            const json = await response.json();
            console.log('Fetched data:', json);
        }
        fetchData();
    }, [])
    return (
        <div> {data ? 'DATA' : 'no data'} </div>
    );
}

export default FetchSimple;
