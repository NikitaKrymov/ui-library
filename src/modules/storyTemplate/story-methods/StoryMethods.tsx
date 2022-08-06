import React from 'react';
import Divider from '../../../core/components/divider/Divider';
import { classes } from '../story-template/StoryTemplate';
import "../story-props/story-props.scss";

interface Props {
    children: React.ReactNode
}

const StoryMethods: React.FC<Props> = (props) => {
    return(
        <div className={classes.block}>
            <div className={classes.blockTitle}>
                Component Methods
            </div>
            <div className={classes.behaviorBlock}>
                <div className={classes.behaviorBlockAttrs}>
                    <div>
                        Method Name
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

export default StoryMethods;