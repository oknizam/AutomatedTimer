import React, { useEffect, useState } from "react";

const AutomatedTime = () => {

    const [currentTime, setCurrentTime] = useState(new Date());


    useEffect(() => {
        let intervalId = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId);
        }

    }, []);

    return(

        <div>
            <span>{currentTime.toLocaleTimeString()}</span>
        </div>
    )

}

export default AutomatedTime;