import React from 'react';
import { SectionInterface as Props, classes } from "./SectionSelectorInterface";

const Section: React.FC<Props> = (props) => {
    return(
        <div className={classes.section}>
            {props.children}
        </div>
    );
};

export default Section;