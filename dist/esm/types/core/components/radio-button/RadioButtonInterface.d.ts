/// <reference types="react" />
import { Layouts } from "../../interfaces/LayoutInterface";
import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";
export interface RadioButtonFieldsetProps {
    children: React.ReactNode;
    size?: Sizes;
    title?: string;
    layout?: Layouts;
    theme?: Theme;
}
export interface RadioButtonProps {
    children?: React.ReactNode;
    name: string;
    id: string;
    value: string;
    inactive?: boolean;
}
export declare const classes: {
    radioButton: string;
    fieldset: string;
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    layout: {
        horizontal: string;
        vertical: string;
    };
    inactive: string;
};
