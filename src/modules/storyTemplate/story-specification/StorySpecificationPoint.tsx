import React from 'react';
import "./story-specification.scss";

interface Props {
    children?: React.ReactNode,
    title: string
}

const classes = {
    specification: "nk__ui-lib__story__block__specification",
    title: "nk__ui-lib__story__block__specification__title",
    description: "nk__ui-lib__story__block__specification__description",
}

const StorySpecificationPoint: React.FC<Props> = (props) => {
    return(
        <div className={classes.specification}>
            <div className={classes.title}>
                {props.title}
            </div>
            <div className={classes.description}>
                {props.children}
            </div>
        </div>
    );
}

export default StorySpecificationPoint;