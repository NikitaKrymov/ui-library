/// <reference types="react" />
import { Content } from "../../interfaces/ContentInterface";
import { VerticalPositions } from "../../interfaces/PositionInterface";
import { Theme } from "../../interfaces/ThemeInterface";
export interface BarProps {
    children?: React.ReactNode;
    theme?: Theme;
    position?: VerticalPositions;
    content?: Content;
    fixed?: boolean;
}
export declare const classes: {
    bar: string;
    position: {
        top: string;
        bottom: string;
    };
    content: {
        sb: string;
        se: string;
        center: string;
        end: string;
        start: string;
    };
};
