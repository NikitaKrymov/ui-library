import React from 'react';
import { classes } from "../story-template/StoryTemplate";
import "./story-specification.scss";

interface Props {
    children: React.ReactNode
}

const StorySpecification: React.FC<Props> = (props) => {
    return(
        <div className={classes.block}>
            <div className={classes.blockTitle}>
                Specifications
            </div>
            {props.children}
        </div>
    );
};

export default StorySpecification;