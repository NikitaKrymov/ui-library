import React, { forwardRef } from 'react';
import { CardTitleProps as Props, classes } from "./CardInterface";
     
const CardText = forwardRef<HTMLHeadingElement, Props>((props, ref) => {
    return(
        <p className={classes.text}>
            {props.children}
        </p>
    );
});

export default CardText;