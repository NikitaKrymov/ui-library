import React, { forwardRef } from 'react';
import Icon from '../icon/Icon';
import { ModalBodyProps as Props, classes } from "./ModalInterface";

const ModalBody = forwardRef<HTMLDivElement, Props>((props, ref) => {
    return(
        <div className={classes.body}>
            {props.children}
        </div>
    );
});

export default ModalBody;