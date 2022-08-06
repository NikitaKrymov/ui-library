import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";
import { Variants } from "../../interfaces/VariantInterface";

export interface DropdownProps {
    label: string,
    children: React.ReactNode
    size?: Sizes,
    theme?: Theme,
    variant?: Variants
}

export interface DropdownItemProps {
    onClick?: any,
    children: React.ReactNode
}

export const classes = {
    dropdown: "nk__dropdown",
    dropdownButton: "nk__dropdown__button",
    dropdownItem: "nk__dropdown__item",
    dtopdownContent: "nk__dropdown__content",
    size: {
        sm: "nk__dropdown--sm",
        md: "nk__dropdown--md",
        lg: "nk__dropdown--lg"
    },
    variant: {
        primary: "nk__dropdown--primary",
        secondary: "nk__dropdown--secondary"
    }
}