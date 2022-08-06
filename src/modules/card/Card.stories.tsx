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
import Card from "../../core/components/card/Card";
import CardTitle from '../../core/components/card/CardTitle';
import { buildClass } from '../../core/utils/utils';
import VariantSelector from '../storyTemplate/variant-selector/VariantSelector';
import { PRIMARY, Variants } from '../../core/interfaces/VariantInterface';
import FlipCard from '../../core/components/card/FlipCard';
import FrontCard from '../../core/components/card/CardFront';
import BackCard from '../../core/components/card/CardBack';
import CardText from '../../core/components/card/CardText';


const CardStory: React.FC = () => {
    const [variant, setVariant] = useState<Variants>(PRIMARY);
    const controlRef = useRef<ActionMenuElement>(null);

    const toggleControl = () => {
        controlRef.current && controlRef.current.toggle()
    };

    const ownClasses = {
        dropdownContainer: "nk__ui-lib__story__card__overview__container"
    }

    const elementClass = buildClass({
        [classes.overviewBoxContainer]: true,
        [ownClasses.dropdownContainer]: true
    });

    return(
        <StoryTemplate>
            <StoryHeader>
                Card | Flip Card
            </StoryHeader>
            <StoryText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam porro nemo maiores beatae facilis, quidem deleniti mollitia aliquid blanditiis est sed ipsa. Incidunt, possimus perferendis? Minus fugit esse assumenda sed?
                Pick the theme that you like
            </StoryText>
            <StoryViewBox>
                <div className={elementClass} style={{ flexDirection: "column", width: "30rem", height: "20rem", gap: '1rem' }}>
                    <Card variant={variant}>
                        <CardTitle>
                            Card Title
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste nemo illo consequuntur? Ducimus quam ipsam mollitia magni voluptates alias expedita veritatis assumenda asperiores ut, ea consequuntur, modi magnam sed!
                        </CardText>
                    </Card>

                    <FlipCard>
                        <FrontCard>
                            <Card variant={variant}>
                                <CardTitle>
                                    Card Title
                                </CardTitle>
                            </Card>
                        </FrontCard>
                        <BackCard>
                            <Card variant="primary">
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste nemo illo consequuntur? Ducimus quam ipsam mollitia magni voluptates alias expedita veritatis assumenda asperiores ut, ea consequuntur, modi magnam sed!
                                </CardText>
                            </Card>
                        </BackCard>
                    </FlipCard>
                </div>
                <div className="nk__ui-lib__story__viewbox__control">
                    <Icon tabIndex={0} icon="settingsBold" onClick={toggleControl} />
                    <ActionMenu ref={controlRef} position="left">
                        <ViewBoxControl>
                            <ThemeSelector />
                            <VariantSelector onChange={(value: Variants) => setVariant(value)} />
                        </ViewBoxControl>
                    </ActionMenu>
                </div>
            </StoryViewBox>
            <Accordion title="View code">
                <StoryCodeBox>
{`<Card variant="${variant}">
    <CardTitle>
        Card Title
    </CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste nemo illo consequuntur? Ducimus quam ipsam mollitia magni voluptates alias expedita veritatis assumenda asperiores ut, ea consequuntur, modi magnam sed!
    </CardText>
</Card>

<FlipCard>
    <FrontCard>
        <Card variant="${variant}">
            <CardTitle>
                Card Title
            </CardTitle>
        </Card>
    </FrontCard>
    <BackCard>
        <Card variant="primary">
            <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste nemo illo consequuntur? Ducimus quam ipsam mollitia magni voluptates alias expedita veritatis assumenda asperiores ut, ea consequuntur, modi magnam sed!
            </CardText>
        </Card>
    </BackCard>
</FlipCard>`}
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

export default CardStory;