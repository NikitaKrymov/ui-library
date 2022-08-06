import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";
import { Variants } from "../../interfaces/VariantInterface";

export interface SelectProps {
   children?: React.ReactNode 
   size?: Sizes,
   variant?: Variants,
   theme?: Theme,
   onChange?: any,
   label?: string,
   id?: string,
   name?: string,
   helperText?: string,
   errorText?: string
}

export interface SelectOptionProps {
   children?: React.ReactNode 
}

export interface SelectOptionGroupProps {
   children?: React.ReactNode 
}

export const classes = {
    select: "nk__select",
    option: "nk__select__option",
    group: "nk__select__option__group",
    size: {
        sm: "nk__select--sm",
        md: "nk__select--md",
        lg: "nk__select--lg"
    },
    variant: {
        primary: "nk__select--primary",
        secondary: "nk__select--secondary"
    },
    helperText: "nk__select__helper-text",
    errorText: "nk__select__error-text",
}