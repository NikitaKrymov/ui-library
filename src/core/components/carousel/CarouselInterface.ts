import { Layouts } from "../../interfaces/LayoutInterface";
import { Theme } from "../../interfaces/ThemeInterface";

export interface CarouselProps {
    children: React.ReactNode,
    layout?: Layouts,
    theme?: Theme
}

export interface CarouselItemProps {
    children: React.ReactNode,
    id?: string
}

export const classes = {
    carousel: "nk__carousel",
    item: "nk__carousel__item",
    previous: "nk__carousel__control--previous",
    next: "nk__carousel__control--next",
    wrapper: "nk__carousel__wrapper",
    layout: {
        horizontal: "nk__carousel--horizontal",
        vertical: "nk__carousel--vertical"
    },
    list: "nk__carousel__list",
    control: "nk__carousel__list__control",
    controlActive: "nk__carousel__list__control--active",

}