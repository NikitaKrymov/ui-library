import React, { forwardRef } from "react";
import { buildClass } from "../../utils/utils";
import { BadgeProps as Props, classes } from "./BadgeInterface";
import { themeClasses } from "../../theme";
import { useThemeContext } from "../../../store/ThemeContext";
import { SMALL } from "../../interfaces/SizeInterface";
import { PRIMARY } from "../../interfaces/VariantInterface";

const Badge = forwardRef<HTMLDivElement, Props>(({ variant = PRIMARY, size = SMALL, ...props }, ref) => {
    const { getTheme } = useThemeContext();
    const theme = props.theme ? props.theme : getTheme();
    const elementClass = buildClass({
        [classes.badge]: true,
        [classes.variant[variant]]: true,
        [themeClasses[theme]]: true,
        [classes.size[size]]: true
    });

    return(
        <div className={elementClass}>
            {props.children}
        </div>
    );
});

export default Badge;