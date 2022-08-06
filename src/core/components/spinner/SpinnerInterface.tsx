import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";

export interface SpinnerProps {
    size?: Sizes,
    theme?: Theme
}

export const classes = {
    spinner: "nk__spinner",
    size: {
        sm: "nk__spinner--sm",
        md: "nk__spinner--md",
        lg: "nk__spinner--lg"
    }
}