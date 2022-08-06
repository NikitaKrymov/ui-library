import React, { forwardRef, useEffect, useState } from 'react';
import { useThemeContext } from '../../../store/ThemeContext';
import { SMALL } from '../../interfaces/SizeInterface';
import { themeClasses } from '../../theme';
import { buildClass, randomNumberGenerator } from '../../utils/utils';
import { TimePickerProps as Props, classes } from "./TimePickerInterface";
import TimePickerHourList from "./TimePickerHourList";
import TimePickerMinuteList from './TimePickerMinuteList';
import TimePickerDayFrame from './TimePickerDayFrame';

const TimePicker = forwardRef<HTMLInputElement, Props>(({
    name = `nk__checkbox-name-${randomNumberGenerator()}`,
    id = `nk__checkbox-id-${randomNumberGenerator()}`,
    size = SMALL, 
    ...props
}, ref) => {

    const { getTheme } = useThemeContext();
    const theme = props.theme ? props.theme : getTheme();
    const elementClass = buildClass({
        [classes.container]: true,
        [themeClasses[theme]]: true,
    });

    return(
        <div className={elementClass}>
            <div className={classes.header}>
                <span>
                    Hrs
                </span> 
                <span>
                    Min
                </span>
            </div>
            <div className={classes.time}>
                <TimePickerHourList />  
                <TimePickerMinuteList />
                <TimePickerDayFrame />
            </div> 
        </div>
    );
});

export default TimePicker;