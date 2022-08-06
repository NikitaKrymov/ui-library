/// <reference types="react" />
import { Theme } from "../../interfaces/ThemeInterface";
export interface SectionSelectorInterface {
    theme?: Theme;
    children?: React.ReactNode;
}
export interface SectionInterface {
    children?: React.ReactNode;
    title: string;
}
export declare const classes: {
    wrapper: string;
    section: string;
    selector: string;
    selectorItem: string;
    selectorItemActive: string;
};
