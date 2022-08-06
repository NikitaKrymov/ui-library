import { Theme } from "../../interfaces/ThemeInterface";
export interface CalendarProps {
    theme?: Theme;
    yearStart?: 2010;
    yearEnd?: 2030;
}
export declare const classes: {
    calendar: string;
    header: string;
    selectors: string;
    headerDate: string;
    dates: string;
    date: string;
    dateAlien: string;
    weekDisplay: string;
    dateSelected: string;
    currentDate: string;
};
