import { Icons } from "../../interfaces/IconInterface";
import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";
import { Variants } from "../../interfaces/VariantInterface";

export interface BadgeProps {
    children?: React.ReactNode,
    variant?: Variants,
    theme?: Theme,
    size?: Sizes
}

export const classes = {
    badge: "nk__badge",
    variant: {
        primary: "nk__badge__center",
        secondary: "nk__badge__corner",
    },
    size: {
        sm: "nk__badge--sm",
        md: "nk__badge--md",
        lg: "nk__badge--lg"
    }
}