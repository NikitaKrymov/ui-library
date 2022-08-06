import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";

export interface SwitchProps {
    label?: string,
    checked?: boolean,
    size?: Sizes,
    theme?: Theme,
    inactive?: boolean,
    value?: boolean
};

export const classes = {
    switch: "nk__switch",
    switchButton: "nk__switch__button",
    slider: "nk__switch__slider",
    size: {
        sm: "nk__switch--sm",
        md: "nk__switch--md",
        lg: "nk__switch--lg"
    },
    inactive: "nk__switch--disabled"
};

