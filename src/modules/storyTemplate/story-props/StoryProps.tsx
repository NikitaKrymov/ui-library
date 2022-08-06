
import React from 'react';
import Divider from '../../../core/components/divider/Divider';
import { classes } from '../story-template/StoryTemplate';
import "./story-props.scss";

interface Props {
    children: React.ReactNode
}

const StoryProps: React.FC<Props> = (props) => {
    return(
        <div className={classes.block}>
            <div className={classes.blockTitle}>
                Component Props
            </div>
            <div className={classes.behaviorBlock}>
                <div className={classes.behaviorBlockAttrs}>
                    <div>
                        Property Name
                    </div>
                    <div>
                        Description
                    </div>
                </div>
                {props.children}
            </div>
        </div>
    );
};

export default StoryProps;