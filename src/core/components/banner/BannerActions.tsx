import React, { forwardRef } from 'react';
import { BannerActionProps as Props, classes } from "./BannerInterface";

const BannerAction = forwardRef<HTMLDivElement, Props>((props, ref) => {
    return(
        <button className={classes.action}>
            {props.children}
        </button>
    );
});

export default BannerAction;