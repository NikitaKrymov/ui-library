import React, { forwardRef } from "react";
import { ProgressStepProps as Props, classes, REST } from "./ProgressTrackerInterface";
import { buildClass } from "../../utils/utils";

const ProgressStep = forwardRef<HTMLLIElement, Props>((props, ref) => {
    const status = props.status || REST;
    const elementClasses = buildClass({
        [classes.step]: true,
        [classes.stepStatus[status]]: true,
    });

    const handleClick = () => {
        props.index && props.activateStep && props.activateStep(props.index);
    }

    return(
        <li className={elementClasses}>
            <div className={classes.stepMarker} onClick={() => handleClick()} />
            { props.children || props.title ? <div className={classes.stepTitle} onClick={() => handleClick()}>
                {props.title && <div className={classes.stepHead}>
                    {props.title}
                </div> } 
                <div>
                    {props.children}
                </div>
            </div> : <></>}
        </li>
    );
});

export default ProgressStep;