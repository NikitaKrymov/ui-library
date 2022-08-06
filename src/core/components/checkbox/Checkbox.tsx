import React, { forwardRef } from 'react';
import { buildClass, randomNumberGenerator } from '../../utils/utils';
import { CheckboxProps as Props, classes } from "./CheckboxInterface";
import { useThemeContext } from '../../../store/ThemeContext';
import { themeClasses } from '../../theme';
import { SMALL } from '../../interfaces/SizeInterface';

const Checkbox = forwardRef<HTMLInputElement, Props>(({ 
    name = `nk__checkbox-name-${randomNumberGenerator()}`,
    value = `nk__checkbox-value-${randomNumberGenerator()}`,
    id = `nk__checkbox-id-${randomNumberGenerator()}`,
    size = SMALL,
    inactive = false,
    checked = false,
    ...props
}, ref) => {
    const { getTheme } = useThemeContext();
    const theme = props.theme ? props.theme : getTheme();
    console.log(classes.size[size])
    const elementClasses = buildClass({
        [classes.checkbox]: true,
        [themeClasses[theme]]: true,
        [classes.size[size]]: true
    })

    const handleKeydown = (e: any) => {
        console.log(e.key)
        switch(e.key) {
            case "Enter": return e.target.click();
            default: return;
        }
    };

    return(
        <label tabIndex={0} className={elementClasses} htmlFor={id} onKeyDown={(e) => handleKeydown(e)}>
            <input defaultChecked={checked} disabled={inactive} ref={ref} tabIndex={-1} type="checkbox" name={name} value={value} className={classes.input} id={id} />
            <span>{props.children}</span>
        </label>
    );
});

export default Checkbox;