import React from 'react';
import { buildClass } from '../../utils/utils';
import { DividerProps as Props, classes } from "./DividerInterface";

const Divider: React.FC<Props> = (props) => {
    const elementClass = buildClass({
        [classes.divider]: true,
        [classes.layout[props.layout]]: true
    });

    return(
        <hr className={elementClass} />
    );
}

export default Divider;