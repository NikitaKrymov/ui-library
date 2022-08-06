import React, { useRef, useState } from 'react';
import Button from '../../core/components/button/Button';
import { StoryHeader } from "../storyTemplate/story-header/StoryHeader";
import StoryTemplate, { classes } from '../storyTemplate/story-template/StoryTemplate';
import StoryViewBox from '../storyTemplate/story-viewbox/StoryViewBox';
import StoryText from '../storyTemplate/story-text/StoryText';
import StoryCodeBox from '../storyTemplate/story-codebox/StoryCodeBox';
import Accordion from '../../core/components/accordion/Accordion';
import StoryHeadline from '../storyTemplate/story-text/StoryHeadline';
import StorySpecification from '../storyTemplate/story-specification/StorySpecification';
import StorySpecificationPoint from '../storyTemplate/story-specification/StorySpecificationPoint';
import Divider from '../../core/components/divider/Divider';
import StoryBehavior from '../storyTemplate/story-behavior/StoryBehavior';
import StoryBehaviorPoint from '../storyTemplate/story-behavior/StoryBehaviorPoint';
import { MEDIUM, Sizes, SMALL } from '../../core/interfaces/SizeInterface';
import { PRIMARY, Variants } from '../../core/interfaces/VariantInterface';
import ViewBoxControl from '../storyTemplate/story-viewbox/StoryViewBoxControl';
import ThemeSelector from '../storyTemplate/theme-selector/ThemeSelector';
import SizeSelector from '../storyTemplate/size-selector/SizeSelector';
import VariantSelector from '../storyTemplate/variant-selector/VariantSelector';
import ActionMenu from '../../core/components/actionMenu/ActionMenu';
import Icon from '../../core/components/icon/Icon';
import { ActionMenuElement } from '../../core/components/actionMenu/ActionMenuInterface';
import Dropdown from "../../core/components/dropdown/Dropdown";
import DropdownItem from '../../core/components/dropdown/DropdownItem';
import { buildClass } from '../../core/utils/utils';
import Badge from '../../core/components/badge/Badge';
import { DESKTOP, Display } from '../../core/interfaces/DisplayInterface';
import StoryProps from '../storyTemplate/story-props/StoryProps';
import StoryPropsPoint from '../storyTemplate/story-props/StoryPropsPoint';


const BadgeStory: React.FC = () => {
    const [size, setSize] = useState<Sizes>(SMALL);
    const [variant, setVariant] = useState<Variants>(PRIMARY);
    const [display, setDisplay] = useState<Display>(DESKTOP);

    const controlRef = useRef<ActionMenuElement>(null);

    const toggleControl = () => {
        controlRef.current && controlRef.current.toggle()
    };

    const ownClasses = {
        dropdownContainer: "nk__ui-lib__story__dropdown__overview__container"
    }

    const elementClass = buildClass({
        [classes.overviewBoxContainer]: true,
    });

    const displayClass = buildClass({
        [classes.overviewBoxDisplay]: true,
        [classes.display[display]]: true
    });

    return(
        <StoryTemplate>
            <StoryHeader>
                Badge
            </StoryHeader>
            <StoryText>
                Badge is a small size data categorizing component design to draw user's attention. 
            </StoryText>
            <StoryViewBox>
                <div className={elementClass}>
                    {variant === "secondary" ?
                    <Button size="md" variant="secondary">
                        Label
                        <Badge variant="secondary">
                            6
                        </Badge>
                    </Button>
                    :
                    <Badge variant="primary" size={size}>
                        Badge center example
                    </Badge>}
                </div>
                <div className="nk__ui-lib__story__viewbox__control">
                    <Icon tabIndex={0} icon="settingsBold" onClick={toggleControl} />
                    <ActionMenu ref={controlRef} position="left">
                        <ViewBoxControl>
                            <ThemeSelector />
                            <SizeSelector onChange={(value: Sizes) => setSize(value)} />
                            <VariantSelector onChange={(value: Variants) => setVariant(value)} />
                        </ViewBoxControl>
                    </ActionMenu>
                </div>
            </StoryViewBox>
            <Accordion title="View code">
                <StoryCodeBox>
{variant === "secondary" ?
`<Button size="md" variant="secondary">
    Label
    <Badge variant="secondary">
        6
    </Badge>
</Button>`
:
`<Badge variant="primary" size="${size}">
    Badge center example
</Badge>`}
                </StoryCodeBox>
            </Accordion>
            <Divider layout="horizontal" />
            <StorySpecification>
                <StorySpecificationPoint title="Variants">
                    Button component has two different variant options: <code> primary | secondary </code>.
                    Primary variant is a standalone component containing data. Secondary variant will be placed in the top right corner of the parent element containing the badge component.
                </StorySpecificationPoint> 
                <StorySpecificationPoint title="Theme">
                    Button component has three different theme options.
                    <p>
                        * Theme is an optional property for a component initialization. It automaticaly receives the theme value from the themeContext and can be rewritten with passing property.
                    </p>
                </StorySpecificationPoint> 
            </StorySpecification>
            <StoryBehavior>
                <StoryBehaviorPoint title="Rest">
                    Default state of the component.
                </StoryBehaviorPoint>
                <StoryBehaviorPoint title="Hover">
                    Button enters the hover state when user moves the moves over the component by changing colors of the text and background indicating it can be pressed. 
                </StoryBehaviorPoint>
                <StoryBehaviorPoint title="Active">
                    Pressing the button it will enter an active state changing the color indicating that action has been made with the component.
                </StoryBehaviorPoint>
                <StoryBehaviorPoint title="Inactive">
                    Default state of the button with inactive property propvided.
                </StoryBehaviorPoint>
                <StoryBehaviorPoint title="Focus">
                    Button being focused with tabbing will enter a focus state with border round the component indicating the current active element on the page.
                </StoryBehaviorPoint>
            </StoryBehavior>
            <StoryProps>
                <StoryPropsPoint title="Size">
                    Property applies the size class to the component. <code> sm | md | lg </code>
                </StoryPropsPoint>
                <StoryPropsPoint title="Variant">
                    Property will render a specific variant of the component. <code> primary | secondary </code>
                </StoryPropsPoint>
                <StoryPropsPoint title="Theme">
                    Theme property that applies the color class. <code> blue | purple | green </code>
                </StoryPropsPoint>
            </StoryProps>
        </StoryTemplate>
    );
};

export default BadgeStory;