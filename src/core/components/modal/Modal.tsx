import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { buildClass } from '../../utils/utils';
import ModalHeader from './ModalHeader';
import { ModalProps as Props, classes, ModalElement } from "./ModalInterface";

const Modal = forwardRef<ModalElement, Props>((props, ref) => {
    const [openStatus, setOpenStatus] = useState(false);
    const closeModalIconRef = useRef<HTMLDivElement>(null);
    // const modalRef = useRef<HTMLDivElement>(null)
    const elementClass = buildClass({
        [classes.overlay]: true
    });

    useImperativeHandle(ref, () => ({
        open: () => {
            setOpenStatus(true);
            closeModalIconRef.current && closeModalIconRef.current.focus();
        },
        close: () => {
            setOpenStatus(false);
        },
    }));

    // let allElements: any = [];
    // allElements = modalRef.current && modalRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');

    // console.log(allElements[allElements?.length - 1])
    
    // const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    //     console.log(event.key)
    //     if (document.activeElement === allElements[allElements.length - 2]) {
    //         console.log('last')
    //         if (event.key === "Tab") {
    //             closeModalIconRef.current && closeModalIconRef.current.focus();
    //             console.log("active", document.activeElement)
    //         }
    //     }
    // };
    
    
    return(
        <div aria-expanded={openStatus} className={elementClass}>
            <div className={classes.modal}>
                <ModalHeader close={() => setOpenStatus(false)} ref={closeModalIconRef}>
                    {props.title}
                </ModalHeader>
                {props.children}
            </div>
        </div>
    );
});

export default Modal;