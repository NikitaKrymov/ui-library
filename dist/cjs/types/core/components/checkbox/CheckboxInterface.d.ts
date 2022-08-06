/// <reference types="react" />
import { Layouts } from "../../interfaces/LayoutInterface";
import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";
export interface CheckboxProps {
    name?: string;
    value?: string;
    id?: string;
    children?: React.ReactNode;
    theme?: Theme;
    size?: Sizes;
    inactive?: boolean;
    checked?: boolean;
}
export interface CheckboxGroupProps {
    children: React.ReactNode;
    title?: string;
    theme?: Theme;
    size?: Sizes;
    name?: string;
    layout?: Layouts;
}
export declare const classes: {
    checkbox: string;
    group: string;
    legend: string;
    input: string;
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    layout: {
        vertical: string;
        horizontal: string;
    };
};
