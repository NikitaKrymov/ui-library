/// <reference types="react" />
import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";
import { Variants } from "../../interfaces/VariantInterface";
export interface ButtonProps {
    variant?: Variants;
    size?: Sizes;
    onClick?: () => void;
    theme?: Theme;
    children: React.ReactNode;
    inactive?: boolean;
    type?: "button" | "submit";
}
export declare const classes: {
    button: string;
    size: {
        sm: string;
        lg: string;
        md: string;
    };
    variant: {
        secondary: string;
        primary: string;
    };
};
