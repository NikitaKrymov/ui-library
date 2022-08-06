import React, { forwardRef } from 'react'
import { useThemeContext } from '../../../store/ThemeContext';
import { themeClasses } from '../../theme';
import { buildClass } from '../../utils/utils';
import { IconProps as Props, ICONS, classes } from "./IconInterface";    

const Icon = forwardRef<HTMLElement, Props>((props, ref) => {
    const { getTheme } = useThemeContext();

    const theme = props.theme ? props.theme : getTheme();

    const elementClasses = buildClass({
        [classes.icon]: true,
        [themeClasses[theme]]: true
    });

    const onKeyDown = (event: React.KeyboardEvent<SVGSVGElement>) => {
        switch(event.key) {
            default: return () => {};
            case "Enter": return props.onClick();
        }
    };
    console.log(ICONS[props.icon])

    return(
        <svg viewBox="0 0 32 32" onKeyDown={(e) => onKeyDown(e)} tabIndex={props.tabIndex} className={elementClasses} onClick={props.onClick}>
            {ICONS[props.icon].map(item => {
                return(
                    <path d={item} />
                )
            })}
        </svg>
    );
});

export default Icon;