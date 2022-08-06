import { VerticalPositions } from "../../interfaces/PositionInterface";
import { Theme } from "../../interfaces/ThemeInterface";
import { Variants } from "../../interfaces/VariantInterface";

export interface BannerProps {
    children: React.ReactNode,
    position?: VerticalPositions,
    theme?: Theme,
    variant?: Variants
}

export interface BannerActionProps {
    children: React.ReactNode
}

export const classes = {
    banner: "nk__banner",
    action: "nk__banner__action",
    position: {
        top: "nk__banner--top",
        bottom: "nk__banner--bottom"
    },
    variant: {
        primary: "nk__banner--primary",
        secondary: "nk__banner-secondary"
    }
}