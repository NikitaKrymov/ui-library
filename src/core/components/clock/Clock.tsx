import React, { forwardRef, useEffect, useState } from 'react';
import { ClockProps as Props, classes } from "./ClockInterface";
import { SMALL } from '../../interfaces/SizeInterface';
import { PRIMARY } from '../../interfaces/VariantInterface';
import { buildClass } from '../../utils/utils';
import { useThemeContext } from '../../../store/ThemeContext';
import { themeClasses } from '../../theme';

const Clock = forwardRef<HTMLDivElement, Props>(({
    size = SMALL,
    variant = PRIMARY,
    ...props
}, ref) => {

    const [dayPeriod, setDayPeriod] = useState<"am" | "pm">("am");
    const [hours, setHours] = useState(Math.abs(12 - new Date().getHours()));
    const [minutes, setMinutes] = useState(new Date().getMinutes());
    const [seconds, setSeconds] = useState(new Date().getSeconds());
    const { getTheme } = useThemeContext();
    const theme = props.theme ? props.theme : getTheme();

    const elementClass = buildClass({
        [classes.clock]: true,
        [themeClasses[theme]]: true,
        [classes.size[size]]: true,
        [classes.variant[variant]]: true
    });

    useEffect(() => {
        // new Date().getHours() > 12 ? setDayPeriod("pm") : setDayPeriod("am");
        setTimeout(() => {
            setHours(Math.abs(12 - new Date().getHours()));
            setMinutes(new Date().getMinutes());
            setSeconds(new Date().getSeconds());
        }, 1000);
    }, [seconds]);

    // console.log(hours, minutes, new Date().getHours());
    return(
        <div ref={ref} className={elementClass}>
            <div className={classes.card}>
                {hours < 10 ? "0" : String(hours)[0] }
            </div> 
            <div className={classes.card}>
                {hours < 10 ? hours : String(hours)[1] }
            </div> 
            <div className={classes.divider}>
                :
            </div>
            <div className={classes.card}>
                {minutes < 10 ? "0" : String(minutes)[0] }
            </div>
            <div className={classes.card}>
                {minutes < 10 ? minutes : String(minutes)[1] }
            </div>
            <div className={classes.divider}>
                :
            </div>
            <div className={classes.card}>
                {seconds < 10 ? "0" : String(seconds)[0] }
            </div>
            <div className={classes.card}>
                {seconds < 10 ? seconds : String(seconds)[1] }
            </div>
        </div>
    );
});

export default Clock;