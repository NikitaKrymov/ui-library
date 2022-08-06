import React from "react";
import { classes } from "../story-template/StoryTemplate";

interface StoryHeaderProps {
    children?: React.ReactNode
}

export const StoryHeader: React.FC<StoryHeaderProps> = (props) => {
    return(
        <div className={classes.header}>
            {props.children}
        </div>
    );
};