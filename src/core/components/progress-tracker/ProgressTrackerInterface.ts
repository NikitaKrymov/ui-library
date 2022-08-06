import { Aligns } from "../../interfaces/AlignInterface";
import { Layouts } from "../../interfaces/LayoutInterface";
import { Theme } from "../../interfaces/ThemeInterface";

export interface ProgressTrackerProps {
    children: React.ReactNode,
    layout?: Layouts,
    align?: Aligns,
    theme?: Theme,
}

export interface ProgressStepProps {
    children?: React.ReactNode,
    onClick?: () => void,
    index?: number,
    activateStep?: (index: number) => void,
    currentStep?: number,
    status?: ProgressStepStatus,
    title?: string
}

export const REST = "rest";
export const CURRENT = "current";
export const COMPLETED = "completed";
export const INACTIVE = "inactive";
export const INVALID = "invalid";

export type ProgressStepStatus = typeof REST | typeof CURRENT | typeof COMPLETED | typeof INACTIVE | typeof INVALID;

export interface ProgressTrackerElement extends React.HTMLAttributes<HTMLUListElement> {
    selectNextStep: () => void,
    selectPrevStep: () => void,
    setCompleted: (stepArray: number[]) => void,
    setInvalid: (stepArray: number[]) => void,
    setInactive: (stepArray: number[]) => void,
    setCurrent: (index: number) => void
}

export const classes = {
    progressTracker: "nk__progress-tracker",
    layout: {
        horizontal: "nk__progress-tracker--horizontal",
        vertical: "nk__progress-tracker--vertical"
    },
    stepTitle: "nk__progress-tracker__step__title",
    stepMarker: "nk__progress-tracker__step__marker",
    align: {
        start: "nk__progress-tracker--start",
        center: "nk__progress-tracker--center",
        end: "nk__progress-tracker--end",
    },
    step: "nk__progress-tracker__step",
    stepStatus: {
        rest: "",
        current: "nk__progress-tracker__step--current",
        inactive: "nk__progress-tracker__step--inactive",
        completed: "nk__progress-tracker__step--completed",
        invalid: "nk__progress-tracker__step--invalid"
    },
    stepHead: "nk__progress-tracker__step__head",
}