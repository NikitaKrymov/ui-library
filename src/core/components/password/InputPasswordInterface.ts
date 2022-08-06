import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";

export interface InputPasswordProps {
    inactive?: boolean,
    label?: string,
    helperText?: string,
    errorText?: string,
    size?: Sizes,
    placeholder?: string,
    theme?: Theme,
    name?: string,
    id?: string,
    buttonTitle?: string,
    srShowTitle?: string,
    srHideTitle?: string
}

export const classes = {
    input: "nk__input nk__input-password",
    size: {
        sm: "nk__input--sm",
        md: "nk__input--md",
        lg: "nk__input--lg"
    },
    helperText: "nk__input__helper-text",
    inactive: "nk__input--disabled",
    button: "nk__input-password__button"
}