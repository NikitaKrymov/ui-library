import React from 'react';
import Tab from '../../../core/components/tabs/Tab';
import Tabs from '../../../core/components/tabs/Tabs';
import { Sizes } from '../../../core/interfaces/SizeInterface';
import { classes } from "../story-template/StoryTemplate";

interface Props {
    onChange: (value: any) => void
}

const sizes = {
    sm: "Small",
    md: "Medium",
    lg: "Large"
};

const SizeSelector: React.FC<Props> = (props) => {

    const handleTabChange = (index: number, value: Sizes) => {
        props.onChange(Object.keys(sizes)[index]);
    }

    return (
        <div className={classes.themeSelector}>
            <Tabs onChange={handleTabChange}>
                {Object.values(sizes).map((size, i) => {
                    return(
                        <Tab key={i}>{size}</Tab>
                    );
                })}
            </Tabs>
        </div>
    );
};

export default SizeSelector;