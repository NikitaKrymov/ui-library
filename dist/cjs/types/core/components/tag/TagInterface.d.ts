/// <reference types="react" />
import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";
export interface TagProps {
    label: string;
    children?: React.ReactNode;
    theme?: Theme;
    size?: Sizes;
}
export declare const classes: {
    tag: string;
    size: {
        sm: string;
        md: string;
        lg: string;
    };
};
