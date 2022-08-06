
import React, { forwardRef } from "react";
import { BarChartProps as Props, classes } from "./BarChartInterface";
import { useThemeContext } from "../../../../store/ThemeContext";
import { buildClass, sortObjectArrayByValue } from "../../../utils/utils";
import { themeClasses } from "../../../theme";

const data = [
    {
        name: "JavaScript",
        value: "60000"
    },
    {
        name: "Java",
        value: "100000",

    },
    {
        name: "Swift",
        value: "50000"
    },
    {
        name: "C#",
        value: "200000"
    },
    {
        name: "Python",
        value: "175000"
    },
    {
        name: "Go",
        value: "75000"
    },
    {
        name: "Angular",
        value: "120000"
    },
    {
        name: "C++",
        value: "65000"
    },
    {
        name: "Next",
        value: "30000"
    },
];

const BarChart = forwardRef<HTMLDivElement, Props>((props, ref) => {
    const { getTheme } = useThemeContext();
    const theme = props.theme ? props.theme : getTheme();
    const sortedDate = sortObjectArrayByValue(data, "value");
    const maxValue = Number(sortedDate[0].value) || 0;
    const minValue = Number(sortedDate[sortedDate.length - 1].value) || maxValue;
    const numberOfTicks = Math.floor(maxValue / minValue) < 2 ? 2 : Math.floor(maxValue / minValue);

    const elementClass = buildClass({
        [classes.chart]: true,
        [themeClasses[theme]]: true
    })

    const renderTicks = () => {
        return(
            <div className={classes.ticks}>
                {Array.from(Array(numberOfTicks)).map((_, i) => {
                    console.log(i)
                    return(
                        <div key={i} data-value={Math.floor(maxValue - minValue * (i))}>
                        </div>
                    );
                })}
            </div>
        );
    };
    return(
        <div className={elementClass}>
            {renderTicks()}
            {data.map((item, i) => {
                return(
                    <div className={classes.bar}>
                        <span data-value={item.value} style={{ transition: "height 0.25 easy-in", height: `${Number(item.value) / maxValue * 100}%`}} data-title={item.name} />
                    </div>
                );
            })}
        </div>
    );
});

export default BarChart;