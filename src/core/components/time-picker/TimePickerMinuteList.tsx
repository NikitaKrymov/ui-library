import React, { useEffect, useState } from 'react';
import { classes } from "./TimePickerInterface";

const TimePickerMinuteList: React.FC = () => {
    const [minute, setMinute] = useState();

    const renderMinutes = () => {
        let minuteList = [];
        for (let i = 0; i <= 60; i++) {
            const minuteValue = i < 10 ? `0${i}` : `${i}`;
            minuteList.push(<button onClick={(e: any) => setMinute(e.target.innerText)} key={i} className={minuteValue === minute ? classes.selectedMinute: ""}>{minuteValue}</button>)
        }
        return minuteList;
    }

    return(
        <div className={classes.minutes}>
            {renderMinutes()}
        </div>
    );
}

export default TimePickerMinuteList;