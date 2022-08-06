import { Theme } from "../../interfaces/ThemeInterface";
import { Icons } from "../../interfaces/IconInterface";
export interface IconProps {
    theme?: Theme;
    icon: Icons;
    onClick?: any;
    tabIndex?: number;
}
export declare const ICONS: {
    plus: string[];
    minus: string[];
    close: string[];
    settingsBold: string[];
    settingsThin: string[];
    component: string[];
    arrowUp: string[];
    arrowDown: string[];
    show: string[];
    hide: string[];
    desktop: string[];
    tablet: string[];
    mobile: string[];
    clock: string[];
    calendar: string[];
    done: string[];
};
export declare const classes: {
    icon: string;
};
