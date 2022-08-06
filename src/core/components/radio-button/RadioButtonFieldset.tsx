import React, { forwardRef } from "react";
import { SMALL } from "../../interfaces/SizeInterface";
import { buildClass } from "../../utils/utils";
import { RadioButtonFieldsetProps as Props, classes } from "./RadioButtonInterface";
import { HORIZONTAL, VERTICAL } from "../../interfaces/LayoutInterface";
import { themeClasses } from "../../theme";
import { useThemeContext } from "../../../store/ThemeContext";

const RadioButtonFieldset = forwardRef<HTMLFieldSetElement, Props>(({ size = SMALL, layout = VERTICAL, ...props }, ref) => {
    const { getTheme } = useThemeContext();
    const theme = props.theme ? props.theme : getTheme();
    const elementClass = buildClass({
        [classes.fieldset]: true,
        [classes.size[size]]: true,
        [classes.layout[layout]]: true,
        [themeClasses[theme]]: true
    });

    return(
        <fieldset className={elementClass}>
            {props.title && <legend>{props.title}</legend>}
            {props.children}
        </fieldset>
    );
});

export default RadioButtonFieldset;