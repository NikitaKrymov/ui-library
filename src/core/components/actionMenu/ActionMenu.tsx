import React, { forwardRef, useImperativeHandle, useState } from "react";
import { buildClass } from "../../utils/utils";
import { ActionMenuElement, ActionMenuProps as Props, classes } from "./ActionMenuInterface";

const ActionMenu = forwardRef<ActionMenuElement, Props>((props, ref) => {
    const [openStatus, setOpenStatus] = useState(false);

    useImperativeHandle(ref, () => ({
        open: () => {
            setOpenStatus(true);
        },
        close: () => {
            setOpenStatus(false);
        },
        toggle: () => {
            setOpenStatus(!openStatus);
        }
    }));

    const elementClasses = buildClass({
        [classes.container]: true,
        [classes.position[props.position]]: true
    });

    return(
        <div className={elementClasses} aria-expanded={openStatus} >
            {props.children}
        </div>
    );
});

export default ActionMenu;