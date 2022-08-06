import React, { forwardRef } from "react";
import { FormSectionProps as Props, classes } from "./FormInterface";

const FormSection: React.FC<Props> = ((props, ref) => {
    return(
        <div className={classes.section}>
            <div className={classes.sectionTitle}>
                {props.title}
            </div>
            {props.children}
        </div>
    );
});

export default FormSection;