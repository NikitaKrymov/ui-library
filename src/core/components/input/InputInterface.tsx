import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";

export interface InputProps {
    type?: "text" | "number",
    label?: string,
    helperText?: string,
    errorText?: string,
    size?: Sizes,
    inactive?: boolean,
    placeholder?: string,
    value?: string,
    theme?: Theme,
    name?: string,
    id?: string,
    mask?: string,
    maskCharacter?: string,
    required?: boolean
}

export const classes = {
    input: "nk__input",
    size: {
        sm: "nk__input--sm",
        md: "nk__input--md",
        lg: "nk__input--lg"
    },
    helperText: "nk__input__helper-text",
    inactive: "nk__input--disabled"
}