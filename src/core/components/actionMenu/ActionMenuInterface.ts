import { Positions } from "../../interfaces/PositionInterface";

export interface ActionMenuProps {
    position: Positions,
    children: React.ReactNode
};

export interface ActionMenuElement extends React.HTMLAttributes<HTMLDivElement> {
    open: () => void,
    close: () => void,
    toggle: () => void
}

export const classes = {
    container: "nk__action__menu",
    position: {
        left: "nk__action__menu--left",
        top: "nk__action__menu--top",
        right: "nk__action__menu--right",
        bottom: "nk__action__menu--bottom"
    }
};