import React, { useEffect, useRef, useState } from "react";
import { LineChartProps as Props, classes } from "./LineChartInterface";
import { buildClass, sortObjectArrayByValue } from "../../../utils/utils";
import { themeClasses } from "../../../theme";
import { useThemeContext } from "../../../../store/ThemeContext";

const LineChart: React.FC<Props> = (props) => {
    const lineChartRef = useRef<any>(null);
    const [chartHeight, setChartHeight] = useState(0);
    const [sectorWidth, setSectorWidth] = useState(0);
    const [isResized, setIsResized] = useState(false);
    const { getTheme } = useThemeContext();
    const theme = props.theme ? props.theme : getTheme();
    const sortedDate = sortObjectArrayByValue(props.data, "value");
    const maxValue = Number(sortedDate[0].value) || 0;
    const minValue = Number(sortedDate[sortedDate.length - 1].value);
    const numberOfTicks = Math.floor(maxValue / minValue) < 2 ? 2 : Math.floor(maxValue / minValue);

    useEffect(() => {
        setChartHeight(lineChartRef.current.clientHeight);
        setSectorWidth(lineChartRef.current.clientWidth/props.data.length);
    }, [lineChartRef, isResized]);

    const elementClass = buildClass({
        [classes.chart]: true,
        [themeClasses[theme]]: true
    })

    const handleResize = () => {
        setIsResized(!isResized);
    }

    window.addEventListener("resize", handleResize);

    const renderTicks = () => {
        return(
            <div className={classes.ticks}>
                {Array.from(Array(numberOfTicks)).map((_, i) => {
                    return(
                        <div key={i} data-value={Math.floor(maxValue - minValue * (i))}>
                        </div>
                    );
                })}
            </div>
        );
    };
    
    return(
        <div className={classes.container}>
            {props.legend && <legend>{props.legend}</legend>}
            <div ref={lineChartRef} className={elementClass}>
                {renderTicks()}
                {props.data.map((item, i) => {
                    if(lineChartRef) {
                        const p1Height = chartHeight * item.value / maxValue;
                        const p2Height = props.data[i+1] && chartHeight * props.data[i+1].value / maxValue || p1Height;
                        const heightDifference = p2Height - p1Height;
                        const Y = p1Height / chartHeight * 100;
                        const hypotenuse = Math.sqrt(heightDifference * heightDifference + sectorWidth * sectorWidth);
                        const angle = Math.asin(heightDifference/ hypotenuse);
                        return(
                            <div key={i} className={classes.sector}>
                                <span className={classes.line} style={{ opacity: "1", transform: `rotate(${-angle}rad)`, width: `${hypotenuse}px`, bottom: `${Y}%`}} />
                                <span data-title={item.name} className={classes.linePoint} style={{ opacity: "1", bottom: `calc(${Y}% - 0.35rem)`}} />
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default LineChart;