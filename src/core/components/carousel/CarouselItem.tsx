import React, { forwardRef } from 'react';
import { CarouselItemProps as Props, classes } from "./CarouselInterface";

const CarouselItem = forwardRef<HTMLDivElement, Props>((props, ref) => {
    return(
        <div id={props.id} className={classes.item} aria-hidden="true">
            {props.children}
        </div>
    );
});

export default CarouselItem;