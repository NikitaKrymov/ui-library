import React, { forwardRef } from 'react';
import { CardTitleProps as Props, classes } from "./CardInterface";
     
const CardTitle = forwardRef<HTMLHeadingElement, Props>((props, ref) => {
    return(
        <h3 className={classes.title}>
            {props.children}
        </h3>
    );
});

export default CardTitle;