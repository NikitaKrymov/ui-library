import { Theme } from "../../../interfaces/ThemeInterface";

export interface LineChartProps {
    theme?: Theme,
    legend?: string,
    data: {
        name: string,
        value: number,
    }[]
}

export const classes = {
    container: "nk__chart__container",
    chart: "nk__chart__line__container",
    ticks: "nk__chart__line__ticks",
    line: "nk__chart__line",
    linePoint: "nk__chart__line__point",
    sector: "nk__chart__line__sector"
};

