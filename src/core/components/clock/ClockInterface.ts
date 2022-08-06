import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";
import { Variants } from "../../interfaces/VariantInterface";

export interface ClockProps {
    size?: Sizes,
    variant?: Variants,
    theme?: Theme
}

export const classes = {
    clock: "nk__clock",
    card: "nk__clock__card",
    size: {
        sm: "nk__clock--sm",
        md: "nk__clock--md",
        lg: "nk__clock--lg",
    },
    variant: {
        primary: "nk__clock--primary",
        secondary: "nk__clock--secondary"
    },
    divider: "nk__clock__divider",
    newCard: "nk__clock__card--new"
}