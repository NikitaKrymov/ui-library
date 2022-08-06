import React from 'react';
import { useThemeContext } from '../../../store/ThemeContext';
import { themeClasses } from '../../theme';
import { buildClass } from '../../utils/utils';
import { LoadingIndicatorProps as Props, classes } from "./LoadingIndicatorInterface";

const LoadingIndicator: React.FC<Props> = (props) => {
    const { getTheme } = useThemeContext();
    const theme = props.theme ? props.theme : getTheme();
    const elementClass = buildClass({
        [classes.indicator]: true,
        [themeClasses[theme]]: true
    });

    return(
        <div className={elementClass} />
    );
};

export default LoadingIndicator;