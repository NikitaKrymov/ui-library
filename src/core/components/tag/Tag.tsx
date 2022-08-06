import React, { forwardRef } from "react";
import { useThemeContext } from "../../../store/ThemeContext";
import { themeClasses } from "../../theme";
import { buildClass } from "../../utils/utils";
import { TagProps as Props, classes } from "./TagInterface";
import { SMALL } from "../../interfaces/SizeInterface";

const Tag = forwardRef<HTMLDivElement, Props>(({ size = SMALL, ...props }, ref) => {
    const { getTheme } = useThemeContext();
    const theme = props.theme ? props.theme : getTheme();
    const elementClass = buildClass({
        [classes.tag]: true,
        [themeClasses[theme]]: true,
        [classes.size[size]]: true
    });

    return(
        <div ref={ref} className={elementClass}>
            <button>
                {props.label}
            </button>
            {props.children}
        </div>
    );
});

export default Tag;