import React, { useState, useEffect } from 'react';

const FetchSimple = () => {
    const url = 'https://api.chucknorris.io/jokes/random';
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            // console.log('About to send request: ', url);
            const response = await fetch(url);
            const json = await response.json();
            // console.log('Fetched data:', json);
            setData({ image: json.icon_url, text: json.value });
        }
        fetchData();
    }, [])
    return (
        <div> {data
            ? <> <img src={data.image} alt="Chuck face" /> {data.text} </>
            : 'no data'} </div>
    );
}

export default FetchSimple;
