/// <reference types="react" />
import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";
import { Variants } from "../../interfaces/VariantInterface";
export interface BadgeProps {
    children?: React.ReactNode;
    variant?: Variants;
    theme?: Theme;
    size?: Sizes;
}
export declare const classes: {
    badge: string;
    variant: {
        primary: string;
        secondary: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
};
