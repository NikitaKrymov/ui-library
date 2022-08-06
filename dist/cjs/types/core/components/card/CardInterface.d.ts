/// <reference types="react" />
import { Layouts } from "../../interfaces/LayoutInterface";
import { Theme } from "../../interfaces/ThemeInterface";
import { Variants } from "../../interfaces/VariantInterface";
export interface CardProps {
    children?: React.ReactNode;
    layout?: Layouts;
    theme?: Theme;
    variant?: Variants;
}
export interface CardTitleProps {
    children: React.ReactNode;
}
export interface FlipCardProps {
    children: React.ReactNode;
}
export interface CardFrontProps {
    children: React.ReactNode;
}
export interface CardBackProps {
    children: React.ReactNode;
}
export declare const classes: {
    card: string;
    title: string;
    text: string;
    layout: {
        horizontal: string;
        vertical: string;
    };
    variant: {
        primary: string;
        secondary: string;
    };
    flipCard: string;
    flipCardInnerWrapper: string;
    frontSide: string;
    backSide: string;
};
