import React, { useEffect, useState } from 'react';
import { classes } from "./TimePickerInterface";

const TimePickerDayFrame: React.FC = () => {
    const [dayFrame, setDayFrame] = useState("AM");

    return(
        <div className={classes.dayFrame}>
            <button className={dayFrame === "AM" ? classes.selectedDayFrame : ""} onClick={() => setDayFrame("AM")}>
                AM
            </button>
            <button className={dayFrame === "PM" ? classes.selectedDayFrame : ""} onClick={() => setDayFrame("PM")}>
                PM
            </button>
        </div>
    );
}

export default TimePickerDayFrame;