import { Layouts } from "../../interfaces/LayoutInterface";

export interface DividerProps {
    layout: Layouts
};

export const classes = {
    divider: "nk__divider",
    layout: {
        horizontal: "nk__divider--horizontal",
        vertical: "nk__divider--vertical"
    }
};