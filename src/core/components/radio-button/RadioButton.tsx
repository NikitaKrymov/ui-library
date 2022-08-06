import React, { forwardRef } from "react";
import { buildClass } from "../../utils/utils";
import { RadioButtonProps as Props, classes } from "./RadioButtonInterface";

const RadioButton = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const elementClass = buildClass({
        [classes.radioButton]: true,
        [classes.inactive]: props.inactive
    })
    return(
        <div className={elementClass}>
            <input type="radio" value={props.value} id={props.id} name={props.name} disabled={props.inactive ? true : false } />
            <label htmlFor={props.id}>
                {props.children}
            </label>
        </div>
    );
});

export default RadioButton;