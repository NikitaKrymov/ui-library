import { Layouts } from "../../interfaces/LayoutInterface";
import { Theme } from "../../interfaces/ThemeInterface";
import { Variants } from "../../interfaces/VariantInterface";

export interface CardProps {
    children?: React.ReactNode,
    layout?: Layouts,
    theme?: Theme,
    variant?: Variants
};

export interface CardTitleProps {
    children: React.ReactNode
};

export interface FlipCardProps {
    children: React.ReactNode
};

export interface CardFrontProps {
    children: React.ReactNode
};

export interface CardBackProps {
    children: React.ReactNode
};

export const classes = {
    card: "nk__card",
    title: "nk__card__title",
    text: "nk__card__text",
    layout: {
        horizontal: "nk__card--horizontal",
        vertical: "nk__card--vertical"
    },
    variant: {
        primary: "nk__card--primary",
        secondary: "nk__card--secondary"
    },
    flipCard: "nk__flip-card",
    flipCardInnerWrapper: "nk__flip-card__inner-wrapper",
    frontSide: "nk__flip-card--front",
    backSide: "nk__flip-card--back"
}