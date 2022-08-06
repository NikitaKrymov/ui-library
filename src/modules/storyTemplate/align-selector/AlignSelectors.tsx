import React from 'react';
import Tab from '../../../core/components/tabs/Tab';
import Tabs from '../../../core/components/tabs/Tabs';
import { classes } from "../story-template/StoryTemplate";

interface Props {
    onChange: (value: any) => void
}

const aligns = {
    start: "Start",
    center: "Center",
    end: "End",
};

export const AlignSelector: React.FC<Props> = (props) => {

    const handleTabChange = (index: number) => {
        props.onChange(Object.keys(aligns)[index]);
    }

    return (
        <div className={classes.themeSelector}>
            <Tabs onChange={handleTabChange}>
                {Object.values(aligns).map((position, i) => {
                    return(
                        <Tab key={i}>{position}</Tab>
                    );
                })}
            </Tabs>
        </div>
    );
};