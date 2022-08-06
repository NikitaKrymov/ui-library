import React, { forwardRef } from 'react';
import { useThemeContext } from '../../../store/ThemeContext';
import { VERTICAL } from '../../interfaces/LayoutInterface';
import { themeClasses } from '../../theme';
import { buildClass } from '../../utils/utils';
import { CardProps as Props, classes } from "./CardInterface";
import { PRIMARY } from '../../interfaces/VariantInterface';

const Card = forwardRef<HTMLDivElement, Props>(({ layout = VERTICAL, variant = PRIMARY, ...props }, ref) => {
    const { getTheme } = useThemeContext();
    const theme = props.theme ? props.theme : getTheme(); 

    const elementClasses = buildClass({
        [classes.card]: true,
        [classes.layout[layout]]: true,
        [themeClasses[theme]]: true,
        [classes.variant[variant]]: true
    });

    return(
        <div className={elementClasses}>
            {props.children}
        </div>
    );
});

export default Card;