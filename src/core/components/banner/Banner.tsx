import React, { forwardRef } from 'react';
import { useThemeContext } from '../../../store/ThemeContext';
import { themeClasses } from '../../theme';
import { buildClass } from '../../utils/utils';
import { BannerProps as Props, classes } from "./BannerInterface";

const Banner = forwardRef<HTMLDivElement, Props>(({
    position = "top",
    variant = "primary",
    ...props
}, ref) => {

    const { getTheme } = useThemeContext();
    const theme = props.theme ? props.theme : getTheme();
    const elementClass = buildClass({
        [classes.banner]: true,
        [classes.position[position]]: true,
        [themeClasses[theme]]: true,
        [classes.variant[variant]]: true
    });

    return(
        <div className={elementClass}>
            {props.children}
        </div>
    );
});

export default Banner;