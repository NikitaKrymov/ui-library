/// <reference types="react" />
import { VerticalPositions } from "../../interfaces/PositionInterface";
import { Theme } from "../../interfaces/ThemeInterface";
import { Variants } from "../../interfaces/VariantInterface";
export interface BannerProps {
    children: React.ReactNode;
    position?: VerticalPositions;
    theme?: Theme;
    variant?: Variants;
}
export interface BannerActionProps {
    children: React.ReactNode;
}
export declare const classes: {
    banner: string;
    action: string;
    position: {
        top: string;
        bottom: string;
    };
    variant: {
        primary: string;
        secondary: string;
    };
};
