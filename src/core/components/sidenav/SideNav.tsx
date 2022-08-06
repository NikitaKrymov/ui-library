import React, { forwardRef, useEffect } from "react";
import { SideNavProps as Props, classes } from "./SideNavInterface";
import { buildClass } from "../../utils/utils";
import { themeClasses } from "../../theme";
import { useThemeContext } from "../../../store/ThemeContext";


const SideNav = forwardRef<HTMLDivElement, Props>((props, ref) => {
    const { getTheme } = useThemeContext();
    const theme = props.theme ? props.theme : getTheme();

    const elementClasses = buildClass({
        [classes.sidenav]: true,
        [themeClasses[theme]]: true
    });

    useEffect(() => {
        const activeElement = document.querySelector(`.${classes.sidenavElementActive}`);
        if (activeElement) {
            activeElement.scrollIntoView({
                block: "center",
            })
        }
    }, []);

    return(
        <nav className={elementClasses} ref={ref}>
           <ul>
                {props.children} 
            </ul> 
        </nav>
    );
});

export default SideNav;