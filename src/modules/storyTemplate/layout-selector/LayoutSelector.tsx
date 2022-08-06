import React from 'react';
import Tab from '../../../core/components/tabs/Tab';
import Tabs from '../../../core/components/tabs/Tabs';
import { Layouts } from "../../../core/interfaces/LayoutInterface";
import { classes } from "../story-template/StoryTemplate";

interface Props {
    onChange: (value: any) => void
}

const layouts = {
    horizontal: "Horizontal",
    vertical: "Vertical"
};

const LayoutSelector: React.FC<Props> = (props) => {

    const handleTabChange = (index: number, layout: Layouts) => {
        props.onChange(Object.keys(layouts)[index]);
    }

    return (
        <div className={classes.themeSelector}>
            <Tabs onChange={handleTabChange}>
                {Object.values(layouts).map((layout, i) => {
                    return(
                        <Tab key={i}>{layout}</Tab>
                    );
                })}
            </Tabs>
        </div>
    );
};

export default LayoutSelector;