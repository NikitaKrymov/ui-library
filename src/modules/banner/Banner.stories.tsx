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
import { buildClass } from '../../core/utils/utils';
import { TOP, VerticalPositions } from '../../core/interfaces/PositionInterface';
import { Content } from '../../core/interfaces/ContentInterface';
import { VerticalPositionSelector } from '../storyTemplate/position-selector/PositionSelector';
import Banner from "../../core/components/banner/Banner";
import { PRIMARY, Variants } from '../../core/interfaces/VariantInterface';
import VariantSelector from '../storyTemplate/variant-selector/VariantSelector';
import BannerAction from '../../core/components/banner/BannerActions';
import { DESKTOP, Display } from '../../core/interfaces/DisplayInterface';
import Button from '../../core/components/button/Button';
import StoryProps from '../storyTemplate/story-props/StoryProps';
import StoryPropsPoint from '../storyTemplate/story-props/StoryPropsPoint';


const BannerStory: React.FC = () => {
    const controlRef = useRef<ActionMenuElement>(null);
    const [position, setPosition] = useState<VerticalPositions>(TOP);
    const [variant, setVariant] = useState<Variants>(PRIMARY);
    const [display, setDisplay] = useState<Display>(DESKTOP);

    const toggleControl = () => {
        controlRef.current && controlRef.current.toggle()
    };

    const ownClasses = {
        barContainer: "nk__ui-lib__story__banner__overview__container"
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
                Banner
            </StoryHeader>
            <StoryText>
                Informational content component that might contain an action element inside. Component can be mounted to the top or the bottom of the parent element. 
            </StoryText>
            <StoryViewBox>
                <div className={elementClass} style={{ height: '10rem', position: 'relative' }}>
                    <Banner position={position} variant={variant}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        <Button>
                            Undo
                        </Button>
                    </Banner>
                </div>
                <div className="nk__ui-lib__story__viewbox__control">
                    <Icon tabIndex={0} icon="settingsBold" onClick={toggleControl} />
                    <ActionMenu ref={controlRef} position="left">
                        <ViewBoxControl>
                            <ThemeSelector />
                            <VerticalPositionSelector onChange={setPosition} />
                            <VariantSelector onChange={(value: Variants) => setVariant(value)} />
                        </ViewBoxControl>
                    </ActionMenu>
                </div>
            </StoryViewBox>
            <Accordion title="View code">
                <StoryCodeBox>
{`<Banner position="${position}" variant="${variant}">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    <BannerAction>
        Undo
    </BannerAction>
</Banner>`}
                </StoryCodeBox>
            </Accordion>
            <Divider layout="horizontal" />
            {/* <StorySpecification>
                <StorySpecificationPoint title="Banner Action">
                    Button component has three different theme options: <code> blue | purple | green </code>
                    <p>
                        * Theme is an optional property for a component initialization. It automaticaly receives the theme value from the themeContext and can be rewritten with passing property.
                    </p>
                </StorySpecificationPoint> 
            </StorySpecification> */}
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
                <StoryPropsPoint title="Variant">
                    Property selects a variant of the component. <code> primary | secondary </code>
                </StoryPropsPoint>
            </StoryProps>
        </StoryTemplate>
    );
};

export default BannerStory;