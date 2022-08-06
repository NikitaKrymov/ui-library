import React, { forwardRef, useState } from 'react';
import { AccordionProps as Props, classes } from "./AccordionInterface";
import Icon from '../icon/Icon';

const Accordion = forwardRef<HTMLButtonElement, Props>((props, ref) => {
    const [openStatus, setOpenStatus] = useState(false);

    return(
        <div className={classes.accordion}>
            <button onClick={() => setOpenStatus(!openStatus)} className={classes.button}>
                <Icon icon={openStatus ? "minus" : "plus" } />
                {props.title} 
            </button>
            <div className={classes.content} aria-expanded={openStatus}>
                {props.children}
            </div>
        </div>

    );
});

export default Accordion;