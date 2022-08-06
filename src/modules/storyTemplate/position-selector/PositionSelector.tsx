import React from 'react';
import Tab from '../../../core/components/tabs/Tab';
import Tabs from '../../../core/components/tabs/Tabs';
import { Positions, VerticalPositions } from '../../../core/interfaces/PositionInterface';
import { classes } from "../story-template/StoryTemplate";

interface Props {
    onChange: (value: any) => void
}

const verticalPosition = {
    top: "Top",
    bottom: "Bottom"
};

const positions = {
    left: "Left",
    top: "Top",
    right: "Right",
    bottom: "Bottom",
};

export const VerticalPositionSelector: React.FC<Props> = (props) => {

    const handleTabChange = (index: number, value: VerticalPositions) => {
        props.onChange(Object.keys(verticalPosition)[index]);
    }

    return (
        <div className={classes.themeSelector}>
            <Tabs onChange={handleTabChange}>
                {Object.values(verticalPosition).map((position, i) => {
                    return(
                        <Tab key={i}>{position}</Tab>
                    );
                })}
            </Tabs>
        </div>
    );
};

export const PositionSelector: React.FC<Props> = (props) => {

    const handleTabChange = (index: number, value: Positions) => {
        props.onChange(Object.keys(positions)[index]);
    }

    return (
        <div className={classes.themeSelector}>
            <Tabs onChange={handleTabChange}>
                {Object.values(positions).map((position, i) => {
                    return(
                        <Tab key={i}>{position}</Tab>
                    );
                })}
            </Tabs>
        </div>
    );
};