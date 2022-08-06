import React, { forwardRef, useState } from "react";
import { SwitchProps as Props, classes } from "./SwitchInterface";
import { buildClass } from "../../utils/utils";
import { themeClasses } from "../../theme";
import { useThemeContext } from "../../../store/ThemeContext";
import { SMALL } from "../../interfaces/SizeInterface";

const Switch = forwardRef<HTMLLabelElement, Props>(({ size = SMALL, ...props }, ref) => {
    const [checked, setChecked] = useState(props.value || false);
    const { getTheme } = useThemeContext();
    const theme = props.theme ? props.theme : getTheme();

    const elementClass = buildClass({
        [classes.switch]: true,
        [classes.size[size]]: true,
        [themeClasses[theme]]: true,
        [classes.inactive]: props.inactive || false
    });

    return(
        <div className={elementClass}>
            {props.label && <label>{props.label}</label>}
            <button disabled={props.inactive ? true : false} onClick={() => setChecked(!checked)} className={classes.switchButton}>
                <input tabIndex={-1} type="checkbox" checked={checked} disabled={props.inactive ? true : false} />
                <div className={classes.slider}></div>
            </button>
        </div>
    );
});

export default Switch;