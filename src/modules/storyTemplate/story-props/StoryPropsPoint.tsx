import React from 'react';

interface Props {
    title: string,
    children: React.ReactNode
}

const classes = {
    row: "nk__ui-lib__story__block__props__row"
}

const StoryPropsPoint: React.FC<Props> = (props) => {
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

export default StoryPropsPoint;