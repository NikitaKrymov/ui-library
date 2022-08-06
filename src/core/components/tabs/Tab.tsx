import React, { forwardRef } from "react";
import { TabProps as Props, classes } from "./TabsInterface";
import { buildClass } from "../../utils/utils";

const Tab = forwardRef<HTMLButtonElement, Props>((props, ref) => {
    const elementClasses = buildClass({
        [classes.tab]: true,
        [classes.tabActive]: props.activeTab === props.index
    });

    return(
        <button ref={ref} className={elementClasses} onClick={() => props.index && props.onTabChange ? props.onTabChange(props.index, props.children) : {}}>
            {props.children}
        </button>
    );
});

export default Tab;