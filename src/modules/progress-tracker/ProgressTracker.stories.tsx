import React, { useEffect, useRef, useState } from 'react';
import { StoryHeader } from "../storyTemplate/story-header/StoryHeader";
import StoryTemplate, { classes } from '../storyTemplate/story-template/StoryTemplate';
import StoryViewBox from '../storyTemplate/story-viewbox/StoryViewBox';
import StoryText from '../storyTemplate/story-text/StoryText';
import StoryCodeBox from '../storyTemplate/story-codebox/StoryCodeBox';
import Accordion from '../../core/components/accordion/Accordion';
import StorySpecification from '../storyTemplate/story-specification/StorySpecification';
import StorySpecificationPoint from '../storyTemplate/story-specification/StorySpecificationPoint';
import Divider from '../../core/components/divider/Divider';
import StoryBehavior from '../storyTemplate/story-behavior/StoryBehavior';
import StoryBehaviorPoint from '../storyTemplate/story-behavior/StoryBehaviorPoint';
import { Sizes, SMALL } from '../../core/interfaces/SizeInterface';
import { PRIMARY, Variants } from '../../core/interfaces/VariantInterface';
import ViewBoxControl from '../storyTemplate/story-viewbox/StoryViewBoxControl';
import ThemeSelector from '../storyTemplate/theme-selector/ThemeSelector';
import ActionMenu from '../../core/components/actionMenu/ActionMenu';
import Icon from '../../core/components/icon/Icon';
import { ActionMenuElement } from '../../core/components/actionMenu/ActionMenuInterface';
import ProgressTracker from '../../core/components/progress-tracker/ProgressTracker';
import ProgressStep from '../../core/components/progress-tracker/ProgressStep';
import { DESKTOP, Display } from '../../core/interfaces/DisplayInterface';
import { buildClass } from '../../core/utils/utils';
import { ProgressTrackerElement } from '../../core/components/progress-tracker/ProgressTrackerInterface';
import { Aligns, START } from '../../core/interfaces/AlignInterface';
import { AlignSelector } from '../storyTemplate/align-selector/AlignSelectors';


const ProgressTrakerStory: React.FC = () => {
    const [size, setSize] = useState<Sizes>(SMALL);
    const [variant, setVariant] = useState<Variants>(PRIMARY);
    const [display, setDisplay] = useState<Display>(DESKTOP);
    const [align, setAlign] = useState<Aligns>(START);

    const controlRef = useRef<ActionMenuElement>(null);
    const progressTrackerRef = useRef<ProgressTrackerElement>(null);

    const toggleControl = () => {
        controlRef.current && controlRef.current.toggle()
    };

    const displayClass = buildClass({
        [classes.overviewBoxDisplay]: true,
        [classes.display[display]]: true
    });
    
    useEffect(() => {
       progressTrackerRef.current && progressTrackerRef.current.setCompleted([0, 1]);
    }, );

    return(
        <StoryTemplate>
            <StoryHeader>
                Progress Tracker
            </StoryHeader>
            <StoryText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam porro nemo maiores beatae facilis, quidem deleniti mollitia aliquid blanditiis est sed ipsa. Incidunt, possimus perferendis? Minus fugit esse assumenda sed?
                Pick the theme that you like
            </StoryText>
            <StoryViewBox>
                <div className={classes.overviewBoxContainer}>
                    <ProgressTracker ref={progressTrackerRef} align={align} layout="horizontal">
                        <ProgressStep title="Step 1">
                            Step Description
                        </ProgressStep>
                        <ProgressStep title="Step 2">
                            Step Description
                        </ProgressStep>
                        <ProgressStep title="Step 3">
                            Step Description
                        </ProgressStep>
                        <ProgressStep title="Step 4">
                            Step Description
                        </ProgressStep>
                    </ProgressTracker>
                </div>
                <div className="nk__ui-lib__story__viewbox__control">
                    <Icon tabIndex={0} icon="settingsBold" onClick={toggleControl} />
                    <ActionMenu ref={controlRef} position="left">
                        <ViewBoxControl>
                            <ThemeSelector />
                            <AlignSelector onChange={(value: Aligns) => setAlign(value)} />
                        </ViewBoxControl>
                    </ActionMenu>
                </div>
            </StoryViewBox>
            <Accordion title="View code">
                <StoryCodeBox>
{`
<ProgressTracker align="center" layout="horizontal">
    <ProgressStep>
        Step 1
    </ProgressStep>
    <ProgressStep>
        Step 2
    </ProgressStep>
    <ProgressStep>
        Step 3
    </ProgressStep>
    <ProgressStep>
        Step 1
    </ProgressStep>
</ProgressTracker>
`}
                </StoryCodeBox>
            </Accordion>
            <Divider layout="horizontal" />
            <StorySpecification>
                <StorySpecificationPoint title="Sizes">
                    Button component has three different size options: <code> sm | md | ld </code>
                    <p>
                        * Size is a required property for a component initialization.
                    </p>
                </StorySpecificationPoint> 
                <StorySpecificationPoint title="Variants">
                    Button component has two different variant options: <code> primary | secondary </code>
                    <p>
                        * Variant is a required property for a component initialization.
                    </p>
                </StorySpecificationPoint> 
                <StorySpecificationPoint title="Theme">
                    Button component has three different theme options: <code> blue | purple | green </code>
                    <p>
                        * Theme is an optional property for a component initialization. It automaticaly receives the theme value from the themeContext and can be rewritten with passing property.
                    </p>
                </StorySpecificationPoint> 
            </StorySpecification>
            <Divider layout="horizontal" />
            <StoryBehavior>
                <StoryBehaviorPoint title="Rest">
                    Default state of the component.
                </StoryBehaviorPoint>
                <StoryBehaviorPoint title="Inactive">
                    Default state of the button with inactive property propvided.
                </StoryBehaviorPoint>
                <StoryBehaviorPoint title="Focus">
                    Button being focused with tabbing will enter a focus state with border round the component indicating the current active element on the page.
                </StoryBehaviorPoint>
            </StoryBehavior>
        </StoryTemplate>
    );
};

export default ProgressTrakerStory;
