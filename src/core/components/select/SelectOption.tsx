import React, { forwardRef } from 'react';
import { SelectOptionProps as Props, classes } from "./SelectInterface";

const SelectOption = forwardRef<HTMLOptionElement, Props>((props, ref) => {
    return(
        <option className={classes.option}>
            {props.children}
        </option>
    );
});

export default SelectOption;