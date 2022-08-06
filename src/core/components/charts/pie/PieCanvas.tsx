import React, { forwardRef, useEffect, useRef } from "react";
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
        name: "C#",
        value: 200000
    },
    {
        name: "Java",
        value: 150000
    }
];

const colors = ["#6EDBD8", "#DB79C7", "#63DB93", "#DB7F4D"];

const PieCanvas = forwardRef<HTMLDivElement, Props>((props, ref) => {
    const canvasRef = useRef<any>(null);

    useEffect(() => {
        setupChart(canvasRef.current);
    }, [canvasRef]);

    const setupChart = (canvas: any) => {
        const ctx = canvas.getContext('2d');
            canvas.width = 800;
            canvas.height = 600;
            let startAngle = 0;
            let radius = 100;
            let cx = canvas.width/2;
            let cy = canvas.height/2;
            
            const totalValue = data.reduce((totalValue: number, item) => {
                return totalValue + Number(item.value);
            }, 0);
            
            data.forEach((item, i) => {
                console.log(item)
                ctx.fillStyle = colors[i];
                ctx.strokeStyle = "transparent";
                ctx.lineWidth = 0;
                ctx.beginPath();
                console.log(totalValue);
                
                // draw pie sectors
                let endAngle = ((item.value /totalValue) * Math.PI * 2) + startAngle;
                ctx.moveTo(cx, cy);
                ctx.arc(cx, cy, radius, startAngle, endAngle, false);
                ctx.lineTo(cx, cy);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
                
                //labels
                ctx.beginPath();
                ctx.font = "20px Calibri, sans-serif";
                ctx.textAlign = "center";
                ctx.fillStyle = "black";
                let theta = (startAngle + endAngle) / 2;
                let deltaY = Math.sin(theta) * 1.5 * radius;
                let deltaX = Math.cos(theta) * 1.5 * radius;
                ctx.fillText(item.name, deltaX + cx, deltaY + cy);
                ctx.closePath();

                
                startAngle = endAngle;
            });
            ctx.fillStyle = "#fff";
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.arc(cx, cy, radius*0.7, 0, Math.PI * 2, false);
            ctx.fill();
            ctx.closePath();
    }

    return(
        <canvas ref={canvasRef} className={classes.pieCanvas}>
        </canvas>
    );
});

export default PieCanvas;