import React from 'react';
import Divider from '../../../core/components/divider/Divider';

interface Props {
    title: string,
    children: React.ReactNode
}

const classes = {
    row: "nk__ui-lib__story__block__behavior__row"
}

const StoryBehaviorPoint: React.FC<Props> = (props) => {
    return(
        <div className={classes.row}>
            <div>
                {props.title}
            </div>
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default StoryBehaviorPoint;