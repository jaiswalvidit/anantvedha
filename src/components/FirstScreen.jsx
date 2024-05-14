import React, { useState, useEffect } from 'react';

export default function FirstScreen() {
    const text = "Welcome to AnantVeda";
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayText(prevText => prevText + text[index]);
            index++;
            if (index === text.length) clearInterval(intervalId);
        }, 100); // Change the delay time (in milliseconds) as needed
    }, []);

    return (
        <div>{displayText}</div>
    );
}





