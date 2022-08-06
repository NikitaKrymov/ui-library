import React, { forwardRef, useEffect, useState } from 'react';
import { CalendarProps as Props, classes } from "./CalendarInterface";
import { useThemeContext } from '../../../store/ThemeContext';
import { buildClass } from '../../utils/utils';
import { themeClasses } from '../../theme';
import Icon from '../icon/Icon';

const Calendar = forwardRef<HTMLElement, Props>((props, ref) => {
    const [date, setDate] = useState<any>(new Date());
    const [firstMonthDay, setFirstMonthDay] = useState<any>();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { getTheme } = useThemeContext();
    const theme = props.theme ? props.theme : getTheme();
    const elementClass = buildClass({
        [classes.calendar]: true,
        [themeClasses[theme]]: true
    });

    const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    const month = ["January", "Febrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    useEffect(() => {
        setFirstMonthDay(new Date(date.getFullYear(), date.getMonth(), 1).getDay());
    }, [date]);

    const renderDates = () => {
        const dates = [];
        const firstDayDate = new Date(date.getFullYear(), date.getMonth(), 1);
        const lastDayDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);

        for (let i = 0; i < 42; i++) {
            let renderingDate = new Date(date.getFullYear(), date.getMonth(), 1 - firstMonthDay + i);
            const elementClass = buildClass({
                [classes.date]: true,
                [classes.dateAlien]: firstDayDate > renderingDate || renderingDate > lastDayDate,
                [classes.dateSelected]: renderingDate.getFullYear() === selectedDate.getFullYear() && renderingDate.getMonth() === selectedDate.getMonth() && renderingDate.getDate() === selectedDate.getDate(),
                [classes.currentDate]: renderingDate.getFullYear() === new Date().getFullYear() && renderingDate.getMonth() === new Date().getMonth() && renderingDate.getDate() === new Date().getDate()
            });
            dates.push(
                <button key={i} className={elementClass} onClick={() => setSelectedDate(renderingDate)}>
                    {renderingDate.getDate()}
                </button>
            );
        }
        return dates;
    };

    const renderWeekDisplay = () => {
        const display = [];
        for(let i = 0; i < 7; i++) {
            display.push(
                <div key={i}>
                    {week[i]}
                </div>
            );
        }

        return display;
    };

    const renderYearList = () => {
        const years = [];
        const yearStart = props.yearStart || 2010;
        const yearEnd = props.yearEnd || 2030;
        for (let i = yearStart; i <= yearEnd; i++) {
            years.push(
                <option key={i}>
                    {i}
                </option>
            )
        }
        return years;
    }

    const selectPrevMonth = () => {
        let newDate = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
        setDate(newDate);
    };

    const selectNextMonth = () => {
        let newDate = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());
        setDate(newDate);
    };

    const setNewYear = (e: any) => {
        setDate(new Date(`${date.getMonth() + 1} ${date.getDate()} ${e.target.value}`));
    };
    console.log(date);

    return(
        <div className={elementClass}>
            <div className={classes.header}>
                    <div>
                        <Icon icon="arrowDown" tabIndex={0} onClick={() => selectPrevMonth()} />
                    </div>
                    <div className={classes.selectors}>
                        <select onChange={(e) => setDate(new Date(`${e.target.value} ${date.getDate()} ${date.getFullYear()}`))} value={month[date.getMonth()]}>
                            {month.map((e, i) => {
                                return( 
                                    <option key={i}>
                                        {e}
                                    </option>
                                );
                            })}
                        </select>
                        <select onChange={(e) => setNewYear(e)} value={`${date.getFullYear()}`}>
                            {renderYearList()}
                        </select>
                    </div>
                    <div>
                        <Icon icon="arrowUp" tabIndex={0} onClick={() => selectNextMonth()} />
                    </div>
            </div>
            <div className={classes.weekDisplay}>
                {renderWeekDisplay()}
            </div>
            <div className={classes.dates}>
                {renderDates()}
            </div>
        </div>
    );
});

export default Calendar;