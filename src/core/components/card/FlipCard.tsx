import React, { forwardRef } from 'react';
import { FlipCardProps as Props, classes } from "./CardInterface";

const FlipCard = forwardRef<HTMLDivElement, Props>((props, ref) => {
    return(
        <div className={classes.flipCard}>
            <div className={classes.flipCardInnerWrapper}>
                {props.children}
            </div>
        </div>
    );
});

export default FlipCard;