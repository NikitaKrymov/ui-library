import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";
import { Variants } from "../../interfaces/VariantInterface";

export interface ButtonProps {
    variant?: Variants,
    size?: Sizes,
    onClick?: () => void,
    theme?: Theme,
    children: React.ReactNode,
    inactive?: boolean,
    type?: "button" | "submit"
};

export const classes = {
    button: "nk__button",
    size: {
        sm: "nk__button--sm",
        lg: "nk__button--lg",
        md: "nk__button--md",
    },
    variant: {
        secondary: "nk__button--secondary",
        primary: "nk__button--primary",
    }
}