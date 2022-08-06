import React, { forwardRef, useState } from 'react';
import Icon from '../icon/Icon';
import { SideNavGroupProps as Props, classes } from "./SideNavInterface";

const SideNavGroup = forwardRef<HTMLElement, Props>((props, ref) => {
    const [expand, setExpand] = useState(false);

    return(
        <div className={classes.sidenavGroup}>
            <button onClick={() => setExpand(!expand)}>
                {props.label}
                <span>
                    {expand ? <Icon icon="arrowUp" /> : <Icon icon="arrowDown" />}
                </span>
            </button>
            <ul aria-expanded={expand}>
                {props.children}
            </ul>
        </div>
    );
});

export default SideNavGroup;