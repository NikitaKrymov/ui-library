import { Theme } from "../../interfaces/ThemeInterface";

export interface SideNavProps {
    children?: React.ReactNode
    theme?: Theme
};

export interface SideNavElementProps {
    to: string,
    label: string,
    children?: React.ReactNode,
}

export interface SideNavGroupProps {
    children?: React.ReactNode,
    label: string
}

export const classes = {
    sidenav: "nk__sidenav",
    sidenavElement: "nk__sidenav__element",
    sidenavElementActive: "nk__sidenav__element--active",
    sidenavGroup: "nk__sidenav__group"
};