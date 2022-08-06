import React, { forwardRef } from 'react';
import { SMALL } from '../../interfaces/SizeInterface';
import { buildClass } from '../../utils/utils';
import { DropdownItemProps as Props, classes } from "./DropdownInterface";

const DropdownItem = forwardRef<HTMLButtonElement, Props>((props, ref) => {
    return(
        <button className={classes.dropdownItem}>
            {props.children}
        </button>
    );
});

export default DropdownItem;