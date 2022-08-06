import React, { forwardRef } from 'react';
import Icon from '../icon/Icon';
import { ModalHeaderProps as Props, classes } from "./ModalInterface";

const ModalHeader = forwardRef<HTMLDivElement, Props>((props, ref) => {
    return(
        <div className={classes.header}>
            <Icon onClick={props.close} icon="close" ref={ref} tabIndex={0} />
            {props.children}
        </div>
    );
});

export default ModalHeader;