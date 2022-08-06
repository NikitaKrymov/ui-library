import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { NotificationProps as Props, classes, NotificationElement } from "./NotificationInterface";
import Icon from '../icon/Icon';

const Notification = forwardRef<NotificationElement, Props>((props, ref) => {
    const [openStatus, setOpenStatus] = useState(false);
    const actionMenuRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
        open: () => {
            setOpenStatus(true);
            actionMenuRef.current && actionMenuRef.current.focus();
            
        },
        close: () => {
            setOpenStatus(false);
        }
    }));

    return(
        <div className={classes.notification} aria-expanded={openStatus}>
            <div className={classes.header}>
                <Icon tabIndex={0} onClick={() => setOpenStatus(false)} icon="close" ref={actionMenuRef}></Icon>
                {props.title && <div>{props.title}</div>}
            </div>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
});

export default Notification;