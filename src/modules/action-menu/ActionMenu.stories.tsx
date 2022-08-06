import React, { useRef, useState } from 'react';
import { StoryHeader } from "../storyTemplate/story-header/StoryHeader";
import StoryTemplate from '../storyTemplate/story-template/StoryTemplate';
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
import Button from '../../core/components/button/Button';
import { classes } from "../storyTemplate/story-template/StoryTemplate";
import { PositionSelector } from '../storyTemplate/position-selector/PositionSelector';
import { LEFT, Positions, TOP } from '../../core/interfaces/PositionInterface';
import StoryProps from '../storyTemplate/story-props/StoryProps';
import StoryPropsPoint from '../storyTemplate/story-props/StoryPropsPoint';
import StoryMethods from '../storyTemplate/story-methods/StoryMethods';
import StoryMethodsPoint from '../storyTemplate/story-methods/StoryMethodsPoint';


const ActionMenuStory: React.FC = () => {
    const [position, setPosition] = useState<Positions>(LEFT);

    const controlRef = useRef<ActionMenuElement>(null);
    const actionRef = useRef<ActionMenuElement>(null);

    const toggleControl = () => {
        controlRef.current && controlRef.current.toggle()
    };

    const toggleActionMenu = () => {
        actionRef.current && actionRef.current.toggle()
    };

    return(
        <StoryTemplate>
            <StoryHeader>
                Action Menu
            </StoryHeader>
            <StoryText>
                Action Menu component is a hidden display that appears on the screen when user interacts with the element that triggers
                the overlay content box to mount to the selected side of the trigger element displaying the inner content.
            </StoryText>
            <StoryViewBox>
                <div className={classes.overviewBoxContainer}>
                    <Button size="md" variant="primary" onClick={toggleActionMenu}>
                        Launch Action Menu
                        <ActionMenu ref={actionRef} position={position}>
                            <div> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sapiente optio cum necessitatibus, odio nesciunt dolorem odit magni porro repellendus natus? Nihil enim adipisci officiis repellat accusantium aut, repellendus quas.
                            </div>
                        </ActionMenu>
                    </Button>
                </div>
                <div className="nk__ui-lib__story__viewbox__control">
                    <Icon tabIndex={0} icon="settingsBold" onClick={toggleControl} />
                    <ActionMenu ref={controlRef} position="left">
                        <ViewBoxControl>
                            <ThemeSelector />
                            <PositionSelector onChange={(value) => setPosition(value)} />
                        </ViewBoxControl>
                    </ActionMenu>
                </div>
            </StoryViewBox>
            <Accordion title="View code">
                <StoryCodeBox>
{`<Button size="md" vairant="primary">
    Launch Action Menu
    <ActionMenu ref={actionRef} position="${position}">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sapiente optio cum necessitatibus, 
        odio nesciunt dolorem odit magni porro repellendus natus? Nihil enim adipisci officiis repellat accusantium aut, 
        repellendus quas.
    </ActionMenu>
</Button>`}
                </StoryCodeBox>
            </Accordion>
            <Divider layout="horizontal" />
            <StorySpecification>
                <StorySpecificationPoint title="Children">
                    Children of the action menu can be any element with any style. Action menu container will adopt to the provided style of the children.
                </StorySpecificationPoint> 
                <StorySpecificationPoint title="Closing action menu">
                    Action menu container can be returned to its default state by clicking on the trigger if <code>toggle()</code> method being called.
                    Or clicking outside the action menu will close the displayed element.
                </StorySpecificationPoint> 
            </StorySpecification>
            <StoryBehavior>
                <StoryBehaviorPoint title="Rest">
                    Default state of the component. The hidden content display is collapsed.
                </StoryBehaviorPoint>
                <StoryBehaviorPoint title="Expanded">
                    Active state of the component. The hidden content is expanded by interacting with the action menu hidden overlay trigger.
                </StoryBehaviorPoint>
            </StoryBehavior>
            <StoryProps>
                <StoryPropsPoint title="Position">
                    Property sets up a position of the hidden display when being opened. <code> left | top | right | bottom </code>
                </StoryPropsPoint>
                <StoryPropsPoint title="Ref">
                    Provided property extends HTMLDivElement and gains 3 additional methods that affects the component functionality.
                </StoryPropsPoint>
                <StoryPropsPoint title="Theme">
                    Render provided theme. <code> blue | purple | green </code>
                </StoryPropsPoint>
            </StoryProps>
            <StoryMethods>
                <StoryMethodsPoint title="ref.open()">
                    Method opens an action menu showing hidden content of the component.
                </StoryMethodsPoint>
                <StoryMethodsPoint title="ref.close()">
                    Method closes a hidden content display.
                </StoryMethodsPoint>
                <StoryMethodsPoint title="ref.toggle()">
                    Method allows to toggle component hidden display visibility state.
                </StoryMethodsPoint>
            </StoryMethods>
        </StoryTemplate>
    );
};

export default ActionMenuStory;