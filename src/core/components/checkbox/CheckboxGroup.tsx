import React, { forwardRef, isValidElement } from 'react';
import { VERTICAL } from '../../interfaces/LayoutInterface';
import { SMALL } from '../../interfaces/SizeInterface';
import { buildClass, randomNumberGenerator } from '../../utils/utils';
import { CheckboxGroupProps as Props, classes } from "./CheckboxInterface";

const CheckboxGroup = forwardRef<HTMLFieldSetElement, Props>(({
    name = `checkbox-group-name-${randomNumberGenerator()}`,
    size = SMALL,
    theme,
    layout = VERTICAL,
    ...props
}, ref) => {

    const elementClass = buildClass({
        [classes.group]: true,
        [classes.layout[layout]]: true
    })

    const childrenWithProps = React.Children.map(props.children, (child, i) => {
        if (isValidElement(child)) {
            return React.cloneElement(child, { name, size, theme })
        }
        return child;
    })
    return(
        <fieldset ref={ref} className={elementClass}>
            {props.title && <legend>{props.title}</legend>}
            {childrenWithProps}
        </fieldset>
    );
});

export default CheckboxGroup;