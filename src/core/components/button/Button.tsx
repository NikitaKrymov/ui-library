import React, { forwardRef } from 'react';
import { buildClass } from '../../utils/utils';
import { classes, ButtonProps as Props } from "./ButtonInterface";
import { themeClasses } from '../../theme';
import { useThemeContext } from '../../../store/ThemeContext';
import { SMALL } from '../../interfaces/SizeInterface';
import { PRIMARY } from '../../interfaces/VariantInterface';

const Button = forwardRef<HTMLButtonElement, Props>(({ size = SMALL, variant = PRIMARY, ...props }, ref) => {
    const { getTheme } = useThemeContext();
    const theme = props.theme ? props.theme : getTheme();
    const buttonClasses = buildClass({
        [classes.button]: true,
        [classes.size[size]]: true, 
        [classes.variant[variant]]: true,
        [themeClasses[theme]]: true
    });

    return(
        <button type={props.type} onClick={props.onClick ? props.onClick : () => {} } ref={ref} className={`${buttonClasses}`} disabled={props.inactive ? true : false}>
            {props.children}
        </button>
    );
});

export default Button;