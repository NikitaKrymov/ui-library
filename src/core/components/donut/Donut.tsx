import React, { forwardRef } from "react";
import { DonutProps as Props, classes } from "./DonutInterface";

const Donut = forwardRef<HTMLDivElement, Props>((props, ref) => {
    return(
        <ul className={classes.chart}>
             <div>
                <span style={{ height: '10%'}} title="Script"></span>
            </div> 
             <div>
                <span style={{ height: '60%'}} title="Jupiter"></span>
            </div> 
             <div>
                <span style={{ height: '30%'}} title="Something Else"></span>
            </div> 
             <div>
                <span style={{ height: '80%'}} title="Another"></span>
            </div> 
        </ul>
    );
});

export default Donut;