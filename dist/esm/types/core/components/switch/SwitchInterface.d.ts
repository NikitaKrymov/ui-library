import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";
export interface SwitchProps {
    label?: string;
    checked?: boolean;
    size?: Sizes;
    theme?: Theme;
    inactive?: boolean;
    value?: boolean;
}
export declare const classes: {
    switch: string;
    switchButton: string;
    slider: string;
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    inactive: string;
};
