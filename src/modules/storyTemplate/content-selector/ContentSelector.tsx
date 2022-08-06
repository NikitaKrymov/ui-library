import React from 'react';
import Tab from '../../../core/components/tabs/Tab';
import Tabs from '../../../core/components/tabs/Tabs';
import { Content } from '../../../core/interfaces/ContentInterface';
import { Positions, VerticalPositions } from '../../../core/interfaces/PositionInterface';
import { classes } from "../story-template/StoryTemplate";

interface Props {
    onChange: (value: any) => void
}

const content = {
    start: "Start",
    center: "Center",
    end: "End",
    sb: "Space Between",
    se: "Space Evenly"
};

const ContentSelector: React.FC<Props> = (props) => {

    const handleTabChange = (index: number, value: Content) => {
        props.onChange(Object.keys(content)[index]);
    }

    return (
        <div className={classes.themeSelector}>
            <Tabs onChange={handleTabChange}>
                {Object.values(content).map((position, i) => {
                    return(
                        <Tab key={i}>{position}</Tab>
                    );
                })}
            </Tabs>
        </div>
    );
};

export default ContentSelector