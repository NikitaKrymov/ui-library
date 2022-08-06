import React, { forwardRef } from 'react';
import { useThemeContext } from '../../../store/ThemeContext';
import { themeClasses } from '../../theme';
import { buildClass } from '../../utils/utils';
import { TextAreaProps as Props, classes } from "./TextAreaInterface";
import { SMALL } from "../../interfaces/SizeInterface";

const TextArea = forwardRef<HTMLTextAreaElement, Props>(({ size = SMALL, required = true, ...props }, ref) => {
    const { getTheme } = useThemeContext();
    const theme = props.theme ? props.theme : getTheme();
    const elementClasses = buildClass({
        [classes.textarea]: true,
        [classes.size[size]]: true,
        [themeClasses[theme]]: true
    })
    return(
        <div className={elementClasses}>
            {props.label && <label>{props.label}</label>}
            <textarea disabled={props.inactive} value={props.value} placeholder={props.placeholder} aria-required={required}>
            </textarea>
            {props.helperText && <div className={classes.helperText}>{props.helperText}</div>}
        </div>
    );
});

export default TextArea;