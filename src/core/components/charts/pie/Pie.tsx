
import React, { CSSProperties, forwardRef, useEffect, useRef } from "react";
import { PieProps as Props, classes } from "./PieInterface";

const data = [
    {
        name: "JavaScript",
        value: 100000
    },
    {
        name: "Swift",
        value: 80000
    },
    {
        name: "dd",
        value: 150000
    },
    {
        name: "dksf",
        value: 200000
    },
];



const colors = ["#2F61DE", "#DE5B8D", "#DEAB2F", "#40E04A", "#845BDE", ];
const hoverColors = ["#284ead", "#ac496f", "#b68e2a", "#34b13c", "#6d43c9"];

var byValue = data.slice(0);
byValue.sort(function(a,b) {
    return b.value - a.value;
});

const PieCanvas = forwardRef<HTMLDivElement, Props>((props, ref) => {
    const chartRef = useRef<HTMLDivElement>(null);

    const totalValue = data.reduce((totalValue, item) => {
        return totalValue + item.value;
    }, 0);

    let startAngle = 0;
    let endAngle = 0;

    const handleHover = (i: number) => {
        if (chartRef.current) {
            if (i === 0) {
                chartRef.current.children[data.length - 1].getElementsByTagName("span")[0].style.backgroundColor = hoverColors[i];
                const children = Array.from(chartRef.current.children as HTMLCollectionOf<HTMLElement>)
                children[i].style.backgroundColor = hoverColors[i];
                children[i].getElementsByTagName("span")[0].style.backgroundColor = hoverColors[i];
            }
            else {
                const children = Array.from(chartRef.current.children as HTMLCollectionOf<HTMLElement>)
                children[i].style.backgroundColor = hoverColors[i];
            }
        }
    };

    const handleBlur = (i: number ) => {
        if (chartRef.current) {
            if (i === 0) {
                chartRef.current.children[data.length - 1].getElementsByTagName("span")[0].style.backgroundColor = colors[0];
                const children = Array.from(chartRef.current.children as HTMLCollectionOf<HTMLElement>)
                children[i].style.backgroundColor = colors[i];
                children[i].getElementsByTagName("span")[0].style.backgroundColor = colors[i];
            }
            else {
                const children = Array.from(chartRef.current.children as HTMLCollectionOf<HTMLElement>)
                children[i].style.backgroundColor = colors[i];
            }
        }
    };

    return(
        <div className={classes.container}>
            <div ref={chartRef} className={classes.chart}>
                {byValue.map((item, i) => {
                    startAngle = endAngle;
                    endAngle = ((item.value / totalValue) * 360) + startAngle;
                    if (i === data.length - 1) {
                        return (
                            <div id={item.name} key={i} className={classes.layer} style={{ transform: `translateX(7.5rem) rotate(${startAngle}deg)`, backgroundColor: colors[i]}}>
                                <span style={{ transform: `rotate(${360 - startAngle}deg)`, backgroundColor: colors[0]}} />
                            </div>
                        );
                    } else {
                        console.log(endAngle)
                        return (
                            <div id={item.name} key={i} className={classes.layer} style={{ transform: `translateX(7.5rem) rotate(${startAngle}deg)`, backgroundColor: colors[i]}}>
                                {/* {endAngle > 180 &&
                                <span style={{ transform: `rotate(${endAngle-180}deg)`, backgroundColor: "#000"}} />} */}
                            </div>
                        );
                    }
                })}
            </div>
            <div className={classes.legend}>
                {byValue.map((item, i) => {
                    return(
                        <div  onMouseLeave={(e) => handleBlur(i)} onMouseOver={(e) => handleHover(i)} key={i}>
                            <span style={{ backgroundColor: colors[i] }} />
                            {item.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
});

export default PieCanvas;