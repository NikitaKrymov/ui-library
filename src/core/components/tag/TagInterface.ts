import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";

export interface TagProps {
    label: string,
    children?: React.ReactNode,
    theme?: Theme,
    size?: Sizes
}

export const classes = {
    tag: "nk__tag",
    size: {
        sm: "nk__tag--sm",
        md: "nk__tag--md",
        lg: "nk__tag--lg"
    }
}