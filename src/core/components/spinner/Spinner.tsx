import React from "react";
import { SMALL } from "../../interfaces/SizeInterface";
import { buildClass } from "../../utils/utils";
import { SpinnerProps as Props, classes } from "./SpinnerInterface";
import { useThemeContext } from "../../../store/ThemeContext";
import { themeClasses } from "../../theme";

const Spinner: React.FC<Props> = ({
    size = SMALL,
    ...props
}) => {

    const { getTheme } = useThemeContext();
    const theme = props.theme ? props.theme : getTheme();
    const elementClass = buildClass({
        [classes.spinner]: true,
        [classes.size[size]]: true,
        [themeClasses[theme]]: true
    });

    return(
        <div className={elementClass} />
    );
}

export default Spinner;