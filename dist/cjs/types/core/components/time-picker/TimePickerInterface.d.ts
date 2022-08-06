import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";
export interface TimePickerProps {
    type?: "text" | "number";
    label?: string;
    helperText?: string;
    errorText?: string;
    size?: Sizes;
    inactive?: boolean;
    placeholder?: string;
    value?: string;
    theme?: Theme;
    name?: string;
    id?: string;
}
export declare const classes: {
    time: string;
    header: string;
    container: string;
    hours: string;
    minutes: string;
    dayFrame: string;
    selectedHour: string;
    selectedMinute: string;
    selectedDayFrame: string;
};
