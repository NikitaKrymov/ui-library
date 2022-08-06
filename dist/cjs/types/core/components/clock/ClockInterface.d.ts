import { Sizes } from "../../interfaces/SizeInterface";
import { Theme } from "../../interfaces/ThemeInterface";
import { Variants } from "../../interfaces/VariantInterface";
export interface ClockProps {
    size?: Sizes;
    variant?: Variants;
    theme?: Theme;
}
export declare const classes: {
    clock: string;
    card: string;
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    variant: {
        primary: string;
        secondary: string;
    };
    divider: string;
    newCard: string;
};
