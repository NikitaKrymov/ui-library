import { Theme } from "../../../interfaces/ThemeInterface";

export interface BarChartProps {
    children?: React.ReactNode,
    theme?: Theme
}

export const classes = {
    chart: "nk__chart__bar__container",
    bar: "nk__chart__bar",
    ticks: "nk__chart__bar__ticks"
}