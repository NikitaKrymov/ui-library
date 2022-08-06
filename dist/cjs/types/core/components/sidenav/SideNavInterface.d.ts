/// <reference types="react" />
import { Theme } from "../../interfaces/ThemeInterface";
export interface SideNavProps {
    children?: React.ReactNode;
    theme?: Theme;
}
export interface SideNavElementProps {
    to: string;
    label: string;
    children?: React.ReactNode;
}
export interface SideNavGroupProps {
    children?: React.ReactNode;
    label: string;
}
export declare const classes: {
    sidenav: string;
    sidenavElement: string;
    sidenavElementActive: string;
    sidenavGroup: string;
};
