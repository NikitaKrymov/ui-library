import React from 'react';
import { ListProps as Props, classes } from "./ListInterface";

const List: React.FC<Props> = ({ variant = "ol", children, title }) => {
    if (variant === "ol") {
        return(
            <ol className={classes.list}>
                {children}
            </ol>
        ); 
    } else {
        return(
            <ul className={classes.list}>
                {children}
            </ul>
        );
    }
}

export default List;