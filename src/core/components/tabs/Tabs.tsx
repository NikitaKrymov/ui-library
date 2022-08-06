import React, { forwardRef, useImperativeHandle, useState } from "react";
import { themeClasses } from "../../theme";
import { buildClass } from "../../utils/utils";
import { TabsProps as Props, classes, TabElement } from "./TabsInterface";
import { useThemeContext } from "../../../store/ThemeContext";
import { HORIZONTAL, VERTICAL } from "../../interfaces/LayoutInterface";


const Tabs = forwardRef<TabElement, Props>(({ layout = HORIZONTAL, ...props }, ref) => {
    const [tab, setTab] = useState(1);
    const { getTheme } = useThemeContext();
    const theme = props.theme ? props.theme : getTheme();

    const elementClasses = buildClass({
        [classes.tabs]: true,
        [themeClasses[theme]]: true,
        [classes.layout[layout]]: true
    });

    const handleTabChange = (index: number, value: string) => {
        setTab(index);
        props.onChange && props.onChange(index - 1, value.toLowerCase());
    };
    
    const childrenWithProps = React.Children.map(props.children, (child, i)=> {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { index: i + 1, onTabChange: handleTabChange, activeTab: tab })
        }
        return child;
    });

    return(
        <div className={elementClasses}>
            {childrenWithProps}
        </div>
    );
});

export default Tabs;