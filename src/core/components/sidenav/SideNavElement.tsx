import React, { forwardRef } from "react";
import { SideNavElementProps as Props, classes } from "./SideNavInterface";
import { buildClass, isHrefContainsPath } from "../../utils/utils";

const SideNavElement = forwardRef<HTMLLIElement, Props>((props, ref) => {

    const elementClass = buildClass({
        [classes.sidenavElement]: true,
        [classes.sidenavElementActive]: isHrefContainsPath(props.to),
    });


    return(
        <li className={elementClass} ref={ref}>
            <a href={props.to}>
                {props.children ? <span>{props.children}</span> : null}
                <div>
                    {props.label}
                </div>
            </a>
        </li>
    );
});

export default SideNavElement;