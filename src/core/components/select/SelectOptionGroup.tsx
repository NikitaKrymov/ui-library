import React, { forwardRef } from 'react';
import { SelectOptionGroupProps as Props, classes } from "./SelectInterface";

const SelectOptionGroup = forwardRef<HTMLOptionElement, Props>((props, ref) => {
    return(
        <option className={classes.group}>
            {props.children}
        </option>
    );
});

export default SelectOptionGroup;