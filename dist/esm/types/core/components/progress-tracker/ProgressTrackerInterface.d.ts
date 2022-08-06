/// <reference types="react" />
import { Aligns } from "../../interfaces/AlignInterface";
import { Layouts } from "../../interfaces/LayoutInterface";
import { Theme } from "../../interfaces/ThemeInterface";
export interface ProgressTrackerProps {
    children: React.ReactNode;
    layout?: Layouts;
    align?: Aligns;
    theme?: Theme;
}
export interface ProgressStepProps {
    children?: React.ReactNode;
    onClick?: () => void;
    index?: number;
    activateStep?: (index: number) => void;
    currentStep?: number;
    status?: ProgressStepStatus;
    title?: string;
}
export declare const REST = "rest";
export declare const CURRENT = "current";
export declare const COMPLETED = "completed";
export declare const INACTIVE = "inactive";
export declare const INVALID = "invalid";
export declare type ProgressStepStatus = typeof REST | typeof CURRENT | typeof COMPLETED | typeof INACTIVE | typeof INVALID;
export interface ProgressTrackerElement extends React.HTMLAttributes<HTMLUListElement> {
    selectNextStep: () => void;
    selectPrevStep: () => void;
    setCompleted: (stepArray: number[]) => void;
    setInvalid: (stepArray: number[]) => void;
    setInactive: (stepArray: number[]) => void;
    setCurrent: (index: number) => void;
}
export declare const classes: {
    progressTracker: string;
    layout: {
        horizontal: string;
        vertical: string;
    };
    stepTitle: string;
    stepMarker: string;
    align: {
        start: string;
        center: string;
        end: string;
    };
    step: string;
    stepStatus: {
        rest: string;
        current: string;
        inactive: string;
        completed: string;
        invalid: string;
    };
    stepHead: string;
};
