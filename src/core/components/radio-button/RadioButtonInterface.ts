import { Layouts } from "../../interfaces/LayoutInterface";
import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";

export interface RadioButtonFieldsetProps {
    children: React.ReactNode,
    size?: Sizes,
    title?: string,
    layout?: Layouts,
    theme?: Theme
}

export interface RadioButtonProps {
    children?: React.ReactNode,
    name: string,
    id: string,
    value: string,
    inactive?: boolean,
}

export const classes = {
    radioButton: "nk__radio-button",
    fieldset: "nk__radio-button__fieldset",
    size: {
        sm: "nk__radio-button__fieldset--sm",
        md: "nk__radio-button__fieldset--md",
        lg: "nk__radio-button__fieldset--lg"
    },
    layout: {
        horizontal: "nk__radio-button__fieldset--horizontal",
        vertical: "nk__radio-button__fieldset--vertical"
    },
    inactive: "nk__radio-button--disabled"
}