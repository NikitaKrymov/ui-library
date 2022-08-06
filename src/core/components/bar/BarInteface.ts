import { Content } from "../../interfaces/ContentInterface";
import { VerticalPositions } from "../../interfaces/PositionInterface";
import { Theme } from "../../interfaces/ThemeInterface";

export interface BarProps {
    children?: React.ReactNode,
    theme?: Theme,
    position?: VerticalPositions,
    content?: Content,
    fixed?: boolean
}

export const classes = {
    bar: "nk__bar",
    position: {
        top: "nk__bar--top",
        bottom: "nk__bar--bottom"
    },
    content: {
        sb: "nk__bar--sb",
        se: "nk__bar--se",
        center: "nk__bar--center",
        end: "nk__bar--end",
        start: "nk__bar--start"
    }
}