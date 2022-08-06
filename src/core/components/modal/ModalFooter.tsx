import React, { forwardRef } from 'react';
import Icon from '../icon/Icon';
import { ModalFooterProps as Props, classes } from "./ModalInterface";

const ModalFooter = forwardRef<HTMLDivElement, Props>((props, ref) => {
    return(
        <div className={classes.footer}>
            {props.children}
        </div>
    );
});

export default ModalFooter;