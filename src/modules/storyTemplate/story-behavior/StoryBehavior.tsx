import React from 'react';
import Divider from '../../../core/components/divider/Divider';
import { classes } from '../story-template/StoryTemplate';
import "./story-behavior.scss";

interface Props {
    children: React.ReactNode
}



const StoryBehavior: React.FC<Props> = (props) => {
    return(
        <div className={classes.block}>
            <div className={classes.blockTitle}>
                Component Behavior
            </div>
            <div className={classes.behaviorBlock}>
                <div className={classes.behaviorBlockAttrs}>
                    <div>
                        State
                    </div>
                    <div>
                        Behavior
                    </div>
                </div>
                {props.children}
            </div>
        </div>
    );
};

export default StoryBehavior;