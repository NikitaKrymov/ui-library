import React, { forwardRef, useImperativeHandle, useState } from "react";
import { buildClass } from "../../utils/utils";
import { ProgressTrackerProps as Props, classes, COMPLETED, CURRENT, REST, INVALID, INACTIVE } from "./ProgressTrackerInterface";
import { themeClasses } from "../../theme";
import { useThemeContext } from "../../../store/ThemeContext";
import { HORIZONTAL } from "../../interfaces/LayoutInterface";
import { CENTER } from "../../interfaces/AlignInterface";

const ProgressTracker = forwardRef<any, Props>(({ layout = HORIZONTAL, align = CENTER, ...props }, ref) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);
    const [invalidSteps, setInvalidSteps] = useState<number[]>([]);
    const [inactiveSteps, setInactiveSteps] = useState<number[]>([]);
    const { getTheme } = useThemeContext();
    const theme = props.theme ? props.theme : getTheme();

    useImperativeHandle(ref, () => ({
        selectNextStep() { 
            setCurrentStep(currentStep + 1);
        },
        selectPrevStep() {
            setCurrentStep(currentStep - 1);
        },
        setCompleted(stepArray: number[]) {
            setCompletedSteps(stepArray);
        },
        setInvalid(stepArray: number[]) {
            setInvalidSteps(stepArray);
        },
        setInactive(stepArray: number[]) {
            setInactiveSteps(stepArray);
        },
        setCurrent(index: number) {
            setCurrentStep(index);
        },
    }));

    const elementClasses = buildClass({
        [classes.progressTracker]: true,
        [classes.layout[layout]]: true,
        [classes.align[align]]: true,
        [themeClasses[theme]]: true
    });

    const activateStep = (index: number) => {
        setCurrentStep(index);
    };

    const childrenWithProps = React.Children.map(props.children, (child, i) => {
        if (React.isValidElement(child)) {
            const props = {
                status: REST,
                index: i + 1,
                activateStep,
            }
            if (completedSteps.includes(i)) {
                return React.cloneElement(child, {...props, status: COMPLETED });
            }
            if (invalidSteps.includes(i)) {
                return React.cloneElement(child, {...props, status: INVALID });
            }
            if (currentStep === i + 1) {
                return React.cloneElement(child, {...props, status: CURRENT });
            }
            if (inactiveSteps.includes(i)) {
                return React.cloneElement(child, {...props, status: INACTIVE });
            }
            return React.cloneElement(child, props);
        }
        return child;
    });

    return(
        <ul ref={ref} className={elementClasses}>
           {childrenWithProps} 
        </ul>
    );
});

export default ProgressTracker;