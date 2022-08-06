import { Layouts } from "../../interfaces/LayoutInterface";
import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";

export interface CheckboxProps {
    name?: string,
    value?: string,
    id?: string,
    children?: React.ReactNode,
    theme?: Theme,
    size?: Sizes,
    inactive?: boolean,
    checked?: boolean,
}

export interface CheckboxGroupProps {
    children: React.ReactNode,
    title?: string,
    theme?: Theme,
    size?: Sizes,
    name?: string,
    layout?: Layouts
}

export const classes = {
    checkbox: "nk__checkbox",
    group: "nk__checkbox-group",
    legend: "nk__checkbox__legend",
    input: "nk__checkbox__input",
    size: {
        sm: "nk__checkbox--sm",
        md: "nk__checkbox--md",
        lg: "nk__checkbox--lg"
    },
    layout: {
        vertical: "nk__checkbox-group--vertical",
        horizontal: "nk__checkbox-group--horizontal",
    }
}