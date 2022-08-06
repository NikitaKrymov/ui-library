import React, { forwardRef } from "react";
import { FormRowProps as Props, classes } from "./FormInterface";

const FormRow: React.FC<Props> = ((props, ref) => {
    return(
        <div className={classes.row}>
            {props.children}
        </div>
    );
});

export default FormRow;