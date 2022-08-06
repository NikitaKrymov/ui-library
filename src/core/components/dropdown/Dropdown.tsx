import React, { forwardRef, useState } from 'react';
import { SMALL } from '../../interfaces/SizeInterface';
import { buildClass } from '../../utils/utils';
import { DropdownProps as Props, classes } from "./DropdownInterface";
import { themeClasses } from '../../theme';
import { useThemeContext } from '../../../store/ThemeContext';
import { PRIMARY } from '../../interfaces/VariantInterface';

const Dropdown = forwardRef<HTMLButtonElement, Props>(({ size = SMALL, variant = PRIMARY, ...props}, ref) => {
    const [openStatus, setOpenStatus] = useState(false);
    const { getTheme } = useThemeContext();
    const theme = props.theme ? props.theme : getTheme();
    const elementClass = buildClass({
        [classes.dropdown]: true,
        [classes.size[size]]: true,
        [themeClasses[theme]]: true,
        [classes.variant[variant]]: true
    });

    return(
        <div className={elementClass} onClick={() => setOpenStatus(!openStatus)}>
            <button className={classes.dropdownButton}>
                {props.label}
            </button>
            <div className={classes.dtopdownContent} aria-expanded={openStatus}>
                {props.children}
            </div>
        </div>
    );
});

export default Dropdown;