import { Theme } from "../../interfaces/ThemeInterface";

export interface CalendarProps {
    theme?: Theme,
    yearStart?: 2010,
    yearEnd?: 2030
}

export const classes = {
    calendar: "nk__calendar",
    header: "nk__calendar__header",
    selectors: "nk__calendar__header__selectors",
    headerDate: "nk__calendar__header__date",
    dates: "nk__calendar__dates",
    date: "nk__calendar__dates__date",
    dateAlien: "nk__calendar__dates__date--alien",
    weekDisplay: "nk__calendar__week-display",
    dateSelected: "nk__calendar__dates__date--selected",
    currentDate: "nk__calendar__dates__date--current",
}