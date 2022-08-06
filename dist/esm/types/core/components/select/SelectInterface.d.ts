/// <reference types="react" />
import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";
import { Variants } from "../../interfaces/VariantInterface";
export interface SelectProps {
    children?: React.ReactNode;
    size?: Sizes;
    variant?: Variants;
    theme?: Theme;
    onChange?: any;
    label?: string;
    id?: string;
    name?: string;
    helperText?: string;
    errorText?: string;
}
export interface SelectOptionProps {
    children?: React.ReactNode;
}
export interface SelectOptionGroupProps {
    children?: React.ReactNode;
}
export declare const classes: {
    select: string;
    option: string;
    group: string;
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    variant: {
        primary: string;
        secondary: string;
    };
    helperText: string;
    errorText: string;
};
