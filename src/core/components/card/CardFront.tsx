import React, { forwardRef } from 'react';
import { CardFrontProps as Props, classes } from "./CardInterface";

const FrontCard = forwardRef<HTMLDivElement, Props>((props, ref) => {
    return(
        <div className={classes.frontSide}>
            {props.children}
        </div>
    );
});

export default FrontCard;