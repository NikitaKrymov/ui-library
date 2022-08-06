import React from 'react';
import { classes } from '../story-template/StoryTemplate';

interface Props {
    children: React.ReactNode
}

const StoryHeadline: React.FC<Props> = (props) => {
    return(
        <div className={classes.headline}>
            {props.children} 
        </div>
    );
};

export default StoryHeadline;
