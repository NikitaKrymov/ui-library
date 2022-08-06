import React, { forwardRef, useState } from 'react';
import { useThemeContext } from '../../../store/ThemeContext';
import { buildClass, randomNumberGenerator } from '../../utils/utils';
import { InputPasswordProps as Props, classes } from "./InputPasswordInterface";
import { themeClasses } from '../../theme';
import { SMALL } from '../../interfaces/SizeInterface';
import Icon from '../icon/Icon';

const InputPassword = forwardRef<HTMLInputElement, Props>(({ 
    name = `nk__checkbox-name-${randomNumberGenerator()}`,
    id = `nk__checkbox-id-${randomNumberGenerator()}`,
    srShowTitle = "Show",
    srHideTitle = "Hide",
    size = SMALL, 
    ...props
}, ref) => {

    const [visible, setVisible] = useState(false);
    const { getTheme } = useThemeContext();
    const theme = props.theme ? props.theme : getTheme();
    const elementClass = buildClass({
        [classes.input]: true,
        [classes.size[size]]: true,
        [themeClasses[theme]]: true,
        [classes.inactive]: props.inactive,
    });

    return(
        <div className={elementClass}>
            {props.label && <label htmlFor={id}>{props.label}</label>}
            <input ref={ref} type={visible ? "text" : "password"} id={id} name={name} disabled={props.inactive ? true : false} placeholder={props.placeholder} />
            <span aria-label={visible ? srHideTitle : srShowTitle}><Icon tabIndex={0} icon={visible ? "hide" : "show"} onClick={() => setVisible(!visible)} /></span>
            {props.helperText && <div className={classes.helperText}>{props.helperText}</div>}
        </div>
    );
});

export default InputPassword;