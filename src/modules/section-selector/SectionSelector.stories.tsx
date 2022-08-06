
import React, { useRef } from 'react';
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
import ViewBoxControl from '../storyTemplate/story-viewbox/StoryViewBoxControl';
import ThemeSelector from '../storyTemplate/theme-selector/ThemeSelector';
import ActionMenu from '../../core/components/actionMenu/ActionMenu';
import Icon from '../../core/components/icon/Icon';
import { ActionMenuElement } from '../../core/components/actionMenu/ActionMenuInterface';
import { buildClass } from '../../core/utils/utils';
import SectionSelector from "../../core/components/section-selector/SectionSelector";
import Section from '../../core/components/section-selector/Section';


const SectionSelectorStory: React.FC = () => {
    const controlRef = useRef<ActionMenuElement>(null);

    const toggleControl = () => {
        controlRef.current && controlRef.current.toggle()
    };

    const ownClasses = {
        radioButtonContainer: "nk__ui-lib__story__radio-button__overview__container"
    }

    const elementClass = buildClass({
        [classes.overviewBoxContainer]: true,
        [ownClasses.radioButtonContainer]: true
    });

    return(
        <StoryTemplate>
            <StoryHeader>
                Section Selector 
            </StoryHeader>
            <StoryText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam porro nemo maiores beatae facilis, quidem deleniti mollitia aliquid blanditiis est sed ipsa. Incidunt, possimus perferendis? Minus fugit esse assumenda sed?
                Pick the theme that you like
            </StoryText>
            <StoryViewBox>
                <div className={elementClass}>
                    <SectionSelector>
                        <Section title="Section 1">
                            <div style={{ width: "100%", height: "15rem", backgroundColor:"blue"}}>
                            </div>
                        </Section>
                        <Section title="Section 2">
                            <div style={{ width: "100%", height: "15rem", backgroundColor:"green"}}>
                            </div>
                        </Section>
                        <Section title="Section 3">
                            <div style={{ width: "100%", height: "15rem", backgroundColor:"red"}}>
                            </div>
                        </Section>
                    </SectionSelector>
                </div>
                <div className="nk__ui-lib__story__viewbox__control">
                    <Icon tabIndex={0} icon="settingsBold" onClick={toggleControl} />
                    <ActionMenu ref={controlRef} position="left">
                        <ViewBoxControl>
                            <ThemeSelector />
                        </ViewBoxControl>
                    </ActionMenu>
                </div>
            </StoryViewBox>
            <Accordion title="View code">
                <StoryCodeBox>
{`
<RadioButtonFieldset title="Select test" size={size}>
    <RadioButton value="1" name="test" id="test1">
        Value 1
    </RadioButton>
    <RadioButton value="2" name="test" id="test2">
        Value 2
    </RadioButton>
    <RadioButton value="3" name="test" id="test3">
        Value 3
    </RadioButton>
</RadioButtonFieldset>
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

export default SectionSelectorStory;
