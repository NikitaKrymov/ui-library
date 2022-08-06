import React, { forwardRef } from 'react';
import { useThemeContext } from '../../../store/ThemeContext';
import { themeClasses } from '../../theme';
import { buildClass, randomNumberGenerator } from "../../utils/utils";
import { InputProps as Props, classes } from "./InputInterface";
import { SMALL } from '../../interfaces/SizeInterface';

const Input = forwardRef<HTMLInputElement, Props>(( { 
    name = `nk__checkbox-name-${randomNumberGenerator()}`,
    id = `nk__checkbox-id-${randomNumberGenerator()}`,
    size = SMALL, 
    required = true,
    ...props
 }, ref) => {

    const { getTheme } = useThemeContext();
    const theme = props.theme ? props.theme : getTheme();
    const elementClass = buildClass({
        [classes.input]: true,
        [classes.size[size]]: true,
        [themeClasses[theme]]: true,
        [classes.inactive]: props.inactive
    });

    const applyMask = (event: any) => {
        const mask = props.mask?.split("") || [];
        const maskChars = mask.filter(i => i !== props.maskCharacter);
        console.log('apply mask')
    };

    const renderMasking = () => {
        return(
            <div className={elementClass}>
                {props.label && <label htmlFor={id}>{props.label}</label>}
                <input onInput={(e) => applyMask(e)} ref={ref} type={props.type} name={name} required={required} id={id} disabled={props.inactive ? true : false} placeholder={props.mask} />
                {props.helperText && <div className={classes.helperText}>{props.helperText}</div>}
            </div>
        );
    };

    const renderInput = () => {
        return(
            <div className={elementClass}>
                {props.label && <label htmlFor={id}>{props.label}</label>}
                <input ref={ref} type={props.type} name={name} id={id} aria-required={required} defaultValue="" disabled={props.inactive ? true : false} placeholder={props.placeholder} />
                {props.helperText && <div className={classes.helperText}>{props.helperText}</div>}
            </div>
        );
    };

    if (props.mask) {
        return renderMasking();
    } else {
        return renderInput();
    }
});

export default Input;