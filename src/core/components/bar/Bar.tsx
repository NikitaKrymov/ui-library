import React, { forwardRef } from 'react';
import { useThemeContext } from '../../../store/ThemeContext';
import { themeClasses } from '../../theme';
import { buildClass } from '../../utils/utils';
import { BarProps as Props, classes } from "./BarInteface";

const Bar = forwardRef<HTMLDivElement, Props>(({
    position = "top",
    content = "start",
    ...props
}, ref) => {
    const { getTheme } = useThemeContext();
    const theme = props.theme ? props.theme : getTheme();

    const elementClass = buildClass({
        [classes.bar]: true,
        [themeClasses[theme]]: true,
        [classes.position[position]]: true,
        [classes.content[content]]: true
    });

    return(
        <div className={elementClass}>
            {props.children}            
        </div>
    );
});

export default Bar;