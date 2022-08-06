/// <reference types="react" />
import { Layouts } from "../../interfaces/LayoutInterface";
import { Theme } from "../../interfaces/ThemeInterface";
export interface CarouselProps {
    children: React.ReactNode;
    layout?: Layouts;
    theme?: Theme;
}
export interface CarouselItemProps {
    children: React.ReactNode;
    id?: string;
}
export declare const classes: {
    carousel: string;
    item: string;
    previous: string;
    next: string;
    wrapper: string;
    layout: {
        horizontal: string;
        vertical: string;
    };
    list: string;
    control: string;
    controlActive: string;
};
