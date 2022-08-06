import { Layouts } from "../../interfaces/LayoutInterface";
import { Theme } from "../../interfaces/ThemeInterface";

export interface TabsProps {
    theme?: Theme,
    children: React.ReactNode[],
    onChange?: any,
    layout?: Layouts
};

export interface TabProps {
    children: React.ReactNode,
    activeTab?: number,
    index?: number,
    onTabChange?: (index: number, value: React.ReactNode) => void
}

export interface TabElement extends React.HTMLAttributes<HTMLDivElement> {
    getActiveTabIndex: () => number
}

export const classes = {
    tabs: "nk__tabs",
    tab: "nk__tab",
    tabActive: "nk__tab--active",
    layout: {
        horizontal: "nk__tabs--horizontal",
        vertical: "nk__tabs--vertical"
    }
}

