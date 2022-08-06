import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";
export interface InputPasswordProps {
    inactive?: boolean;
    label?: string;
    helperText?: string;
    errorText?: string;
    size?: Sizes;
    placeholder?: string;
    theme?: Theme;
    name?: string;
    id?: string;
    buttonTitle?: string;
    srShowTitle?: string;
    srHideTitle?: string;
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
    button: string;
};
