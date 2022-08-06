import React, { useRef, useState } from 'react';
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
import Bar from "../../core/components/bar/Bar";
import { buildClass } from '../../core/utils/utils';
import Tabs from '../../core/components/tabs/Tabs';
import Tab from '../../core/components/tabs/Tab';
import { TOP, VerticalPositions } from '../../core/interfaces/PositionInterface';
import { Content } from '../../core/interfaces/ContentInterface';
import { VerticalPositionSelector } from '../storyTemplate/position-selector/PositionSelector';
import ContentSelector from '../storyTemplate/content-selector/ContentSelector';
import { DESKTOP, Display } from '../../core/interfaces/DisplayInterface';
import { START } from '../../core/interfaces/AlignInterface';
import Button from '../../core/components/button/Button';
import StoryProps from '../storyTemplate/story-props/StoryProps';
import StoryPropsPoint from '../storyTemplate/story-props/StoryPropsPoint';


const BarStory: React.FC = () => {
    const controlRef = useRef<ActionMenuElement>(null);
    const [position, setPosition] = useState<VerticalPositions>(TOP);
    const [content, setContent] = useState<Content>(START);
    const [display, setDisplay] = useState<Display>(DESKTOP);

    const toggleControl = () => {
        controlRef.current && controlRef.current.toggle()
    };

    const ownClasses = {
        barContainer: "nk__ui-lib__story__bar__overview__container"
    }

    const elementClass = buildClass({
        [classes.overviewBoxContainer]: true,
        [ownClasses.barContainer]: true
    });

    const displayClass = buildClass({
        [classes.overviewBoxDisplay]: true,
        [classes.display[display]]: true
    });

    return(
        <StoryTemplate>
            <StoryHeader>
                Bar
            </StoryHeader>
            <StoryText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam porro nemo maiores beatae facilis, quidem deleniti mollitia aliquid blanditiis est sed ipsa. Incidunt, possimus perferendis? Minus fugit esse assumenda sed?
                Pick the theme that you like
            </StoryText>
            <StoryViewBox>
                <div className={elementClass} style={{ height: '10rem', marginTop: '1rem', position: 'relative' }}>
                    <Bar position={position} content={content}>
                        <Button variant="secondary">
                            Item
                        </Button>
                        <Button variant="secondary">
                            Item
                        </Button>
                    </Bar>
                </div>
                <div className="nk__ui-lib__story__viewbox__control">
                    <Icon tabIndex={0} icon="settingsBold" onClick={toggleControl} />
                    <ActionMenu ref={controlRef} position="left">
                        <ViewBoxControl>
                            <ThemeSelector />
                            <VerticalPositionSelector onChange={setPosition} />
                            <ContentSelector onChange={setContent} />
                        </ViewBoxControl>
                    </ActionMenu>
                </div>
            </StoryViewBox>
            <Accordion title="View code">
                <StoryCodeBox>
{`<Bar position="${position}" content="${content}">
    <Button variant="secondary">
        Item
    </Button>
    <Button variant="secondary">
        Item
    </Button>
</Bar>`}
                </StoryCodeBox>
            </Accordion>
            <Divider layout="horizontal" />
            <StorySpecification>
                <StorySpecificationPoint title="Content Alignment">
                    Component aligns the children element using a justify-content css attribute that can be defined as flex-start, center, flex-end, space-around, space-between, and space-evenly.
                </StorySpecificationPoint> 
                <StorySpecificationPoint title="Theme">
                    Button component has three different theme options: <code> blue | purple | green </code>
                    <p>
                        * Theme is an optional property for a component initialization. It automaticaly receives the theme value from the themeContext and can be rewritten with passing property.
                    </p>
                </StorySpecificationPoint> 
            </StorySpecification>
            <StoryBehavior>
                <StoryBehaviorPoint title="Rest">
                    Default state of the component.
                </StoryBehaviorPoint>
            </StoryBehavior>
            <StoryProps>
                <StoryPropsPoint title="Position">
                    Property sets up a position of the hidden display when being opened. <code> top | bottom </code>
                </StoryPropsPoint>
                <StoryPropsPoint title="Theme">
                    Render provided theme. <code> blue | purple | green </code>
                </StoryPropsPoint>
                <StoryPropsPoint title="Content">
                    Provided property will align the children inside the bar component. <code> start | center | end | sb | sa | se </code>
                </StoryPropsPoint>
                <StoryPropsPoint title="Fixed">
                    Boolean type property will apply position css attribute. <code> true | false </code>
                </StoryPropsPoint>
            </StoryProps>
        </StoryTemplate>
    );
};

export default BarStory;