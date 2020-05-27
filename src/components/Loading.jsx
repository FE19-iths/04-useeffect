import React, { useState, useEffect } from 'react';

const Loading = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Om parent component gör fetch i stället, räcker det med att titta på om datan vi får är null eller inte. Vi kan ta bort useEffect från funktionen.
    // const isLoading = props.data == null;

    useEffect(() => {
        // pretend we're using fetch to send a request
        // the request takes 5 seconds
        setTimeout(() => {
            // pretend the server response arrived - time to stop showing the loading animation
            setIsLoading(false);
        }, 5000);
    }, []);
    return (
        <div className={ isLoading ? 'loading' : '' }>
            { isLoading ? 'Loading...' : 'Done!' }
        </div>
    )
}

export default Loading;
