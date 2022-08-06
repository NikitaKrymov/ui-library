import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";

export interface TextAreaProps {
    label?: string,
    helperText?: string,
    errorText?: string,
    size?: Sizes,
    inactive?: boolean,
    placeholder?: string,
    value?: string,
    theme?: Theme,
    required?: boolean
};

export const classes = {
    textarea: "nk__textarea",
    size: {
        sm: "nk__textarea--sm",
        md: "nk__textarea--md",
        lg: "nk__textarea--lg",
    },
    helperText: "nk__textarea__helper-text",
}