import React, { useEffect, useState } from 'react';
import { classes } from "./TimePickerInterface";

const TimePickerHourList: React.FC = () => {
    const [hour, setHour] = useState()

    const renderHours = () => {
        let hourList = [];
        for (let i = 0; i <= 12; i++) {
            const hourValue = i < 10 ? `0${i}` : `${i}`;
            console.log(hourValue === hour)
            hourList.push(<button onClick={(e: any) => setHour(e.target.innerText)} key={i} className={hourValue === hour ? classes.selectedHour : ""}>{hourValue}</button>)
        }
        return hourList;
    }

    return(
        <div className={classes.hours}>
            {renderHours()}
        </div>
    );
}

export default TimePickerHourList;