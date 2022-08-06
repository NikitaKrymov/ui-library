import { Theme } from "../../interfaces/ThemeInterface";

export interface SectionSelectorInterface {
    theme?: Theme,
    children?: React.ReactNode,
}

export interface SectionInterface {
    children?: React.ReactNode,
    title: string
}

export const classes = {
    wrapper: "nk__section__wrapper",
    section: "nk__section",
    selector: "nk__section-selector",
    selectorItem: "nk__section-selector__item",
    selectorItemActive: "nk__section-selector__item--active"
}