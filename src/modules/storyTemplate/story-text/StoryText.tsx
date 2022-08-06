import React from "react";
import { classes } from "../story-template/StoryTemplate";

interface Props {
    children: React.ReactNode
}
const StoryText: React.FC<Props> = (props) => {
    return(
        <div className={classes.description}>
            {props.children}
        </div>
    );
};

export default StoryText;