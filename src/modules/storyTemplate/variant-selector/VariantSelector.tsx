import React from 'react';
import Tab from '../../../core/components/tabs/Tab';
import Tabs from '../../../core/components/tabs/Tabs';
import { Sizes } from '../../../core/interfaces/SizeInterface';
import { Variants } from '../../../core/interfaces/VariantInterface';
import { classes } from "../story-template/StoryTemplate";

interface Props {
    onChange: (value: any) => void
}

const variants = {
    primary: "Primary",
    secondary: "Secondary"
};

const VariantSelector: React.FC<Props> = (props) => {

    const handleTabChange = (index: number, value: Variants) => {
        props.onChange(Object.keys(variants)[index]);
    }

    return (
        <div className={classes.themeSelector}>
            <Tabs onChange={handleTabChange}>
                {Object.values(variants).map((variant, i) => {
                    return(
                        <Tab key={i}>{variant}</Tab>
                    );
                })}
            </Tabs>
        </div>
    );
};

export default VariantSelector;