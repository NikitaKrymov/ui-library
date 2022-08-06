import React, { forwardRef } from "react";
import { SelectProps as Props, classes } from "./SelectInterface";
import { buildClass, randomNumberGenerator } from "../../utils/utils";
import { SMALL } from "../../interfaces/SizeInterface";
import { useThemeContext } from "../../../store/ThemeContext";
import { themeClasses } from "../../theme";

const Select = forwardRef<HTMLSelectElement, Props>(({ 
    name = `nk__checkbox-name-${randomNumberGenerator()}`,
    id = `nk__checkbox-id-${randomNumberGenerator()}`,
    size = SMALL, 
    variant = "primary",
    ...props
}, ref) => {
    const { getTheme } = useThemeContext();
    const theme = props.theme ? props.theme : getTheme();

    const elementClass = buildClass({
        [classes.select]: true,
        [classes.size[size]]: true,
        [classes.variant[variant]]: true,
        [themeClasses[theme]]: true
    });

    return(
        <div className={elementClass}>
            {props.label && <label htmlFor={id}>{props.label}</label>}
            <select aria-required={false} ref={ref} onChange={props.onChange && props.onChange()}>
            {props.children} 
            </select>
            {props.helperText && <div className={classes.helperText}>{props.helperText}</div>}
        </div>
    );
});

export default Select;