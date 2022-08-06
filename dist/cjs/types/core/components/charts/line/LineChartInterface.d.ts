import { Theme } from "../../../interfaces/ThemeInterface";
export interface LineChartProps {
    theme?: Theme;
    legend?: string;
    data: {
        name: string;
        value: number;
    }[];
}
export declare const classes: {
    container: string;
    chart: string;
    ticks: string;
    line: string;
    linePoint: string;
    sector: string;
};
