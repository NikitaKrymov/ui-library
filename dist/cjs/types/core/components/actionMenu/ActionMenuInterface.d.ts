/// <reference types="react" />
import { Positions } from "../../interfaces/PositionInterface";
export interface ActionMenuProps {
    position: Positions;
    children: React.ReactNode;
}
export interface ActionMenuElement extends React.HTMLAttributes<HTMLDivElement> {
    open: () => void;
    close: () => void;
    toggle: () => void;
}
export declare const classes: {
    container: string;
    position: {
        left: string;
        top: string;
        right: string;
        bottom: string;
    };
};
