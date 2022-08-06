import React from 'react';
import { StoryHeader } from "../storyTemplate/story-header/StoryHeader";
import StoryTemplate, { classes } from '../storyTemplate/story-template/StoryTemplate';
import StoryViewBox from '../storyTemplate/story-viewbox/StoryViewBox';
import StoryText from '../storyTemplate/story-text/StoryText';
import StoryCodeBox from '../storyTemplate/story-codebox/StoryCodeBox';
import Accordion from '../../core/components/accordion/Accordion';
import StoryBehavior from '../storyTemplate/story-behavior/StoryBehavior';
import StoryBehaviorPoint from '../storyTemplate/story-behavior/StoryBehaviorPoint';

const AccordionStory: React.FC = () => {
    return(
        <StoryTemplate>
            <StoryHeader>
                Accordion
            </StoryHeader>
            <StoryText>
                Accordion component designed to deliver large amount of content to the user through disclosure of the element. User allowed to interact with the 
                component to expand and collapse a hidden part containing deliverable content.
            </StoryText>
            <StoryViewBox>
                <div className={classes.overviewBoxContainer} style={{ flexDirection: 'column', gap: '0.5rem' }}>
                    <Accordion title="Accordion 1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste nemo illo consequuntur? Ducimus quam ipsam mollitia magni voluptates alias expedita veritatis assumenda asperiores ut, ea consequuntur, modi magnam sed!
                    </Accordion>
                    <Accordion title="Accordion 2">
                        <div style={{ padding: "1rem"}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste nemo illo consequuntur? Ducimus quam ipsam mollitia magni voluptates alias expedita veritatis assumenda asperiores ut, ea consequuntur, modi magnam sed!
                        </div>
                    </Accordion>
                    <Accordion title="Accordion 3">
                        <div style={{ padding: "1rem"}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste nemo illo consequuntur? Ducimus quam ipsam mollitia magni voluptates alias expedita veritatis assumenda asperiores ut, ea consequuntur, modi magnam sed!
                        </div>
                    </Accordion>
                </div>
            </StoryViewBox>
            <Accordion title="View code">
                <StoryCodeBox>
{`
<Accordion title="Accordion">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste nemo illo consequuntur? 
    Ducimus quam ipsam mollitia magni voluptates alias expedita veritatis assumenda asperiores ut, ea 
    consequuntur, modi magnam sed!
</Accordion>
`}
                </StoryCodeBox>
            </Accordion>
            <StoryBehavior>
                <StoryBehaviorPoint title="Rest">
                    Default state of the component. Additional content of the accordion is hidden.
                </StoryBehaviorPoint>
                <StoryBehaviorPoint title="Expanded">
                    Active state of the component being called when user interacts with the component clicking on the accordion element itself.
                    Hidden part of the component expands down to provide required information.
                </StoryBehaviorPoint>
            </StoryBehavior>
        </StoryTemplate>
    );
};

export default AccordionStory;