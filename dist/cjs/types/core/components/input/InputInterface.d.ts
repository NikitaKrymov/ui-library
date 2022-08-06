import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";
export interface InputProps {
    type?: "text" | "number";
    label?: string;
    helperText?: string;
    errorText?: string;
    size?: Sizes;
    inactive?: boolean;
    placeholder?: string;
    value?: string;
    theme?: Theme;
    name?: string;
    id?: string;
    mask?: string;
    maskCharacter?: string;
    required?: boolean;
}
export declare const classes: {
    input: string;
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    helperText: string;
    inactive: string;
};
