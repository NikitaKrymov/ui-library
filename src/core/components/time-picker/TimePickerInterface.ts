import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";

export interface TimePickerProps {
    type?: "text" | "number",
    label?: string,
    helperText?: string,
    errorText?: string,
    size?: Sizes,
    inactive?: boolean,
    placeholder?: string,
    value?: string,
    theme?: Theme,
    name?: string,
    id?: string,
}

export const classes = {
    time: "nk__time-picker",
    header: "nk__time-picker__header",
    container: "nk__time-picker__container",
    hours: "nk__time-picker__hours",
    minutes: "nk__time-picker__minutes",
    dayFrame: "nk__time-picker__day-frames",
    selectedHour: "nk__time-picker__hours__hour--selected",
    selectedMinute: "nk__time-picker__minutes__minute--selected",
    selectedDayFrame: "nk__time-picker__day-frames__day-frame--selected"
}