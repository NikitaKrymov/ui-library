import React, { forwardRef } from 'react';
import { CardFrontProps as Props, classes } from "./CardInterface";

const BackCard = forwardRef<HTMLDivElement, Props>((props, ref) => {
    return(
        <div className={classes.backSide}>
            {props.children}
        </div>
    );
});

export default BackCard;