/// <reference types="react" />
import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";
import { Variants } from "../../interfaces/VariantInterface";
export interface DropdownProps {
    label: string;
    children: React.ReactNode;
    size?: Sizes;
    theme?: Theme;
    variant?: Variants;
}
export interface DropdownItemProps {
    onClick?: any;
    children: React.ReactNode;
}
export declare const classes: {
    dropdown: string;
    dropdownButton: string;
    dropdownItem: string;
    dtopdownContent: string;
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    variant: {
        primary: string;
        secondary: string;
    };
};
