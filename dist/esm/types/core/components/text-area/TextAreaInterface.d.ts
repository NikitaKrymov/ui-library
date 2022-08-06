import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";
export interface TextAreaProps {
    label?: string;
    helperText?: string;
    errorText?: string;
    size?: Sizes;
    inactive?: boolean;
    placeholder?: string;
    value?: string;
    theme?: Theme;
    required?: boolean;
}
export declare const classes: {
    textarea: string;
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    helperText: string;
};
