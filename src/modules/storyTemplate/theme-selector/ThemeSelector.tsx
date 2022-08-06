import React from 'react';
import Tab from '../../../core/components/tabs/Tab';
import Tabs from '../../../core/components/tabs/Tabs';
import { Theme } from '../../../core/interfaces/ThemeInterface';
import { themes } from '../../../core/theme';
import { useThemeContext } from '../../../store/ThemeContext';
import { classes } from "../story-template/StoryTemplate";


const ThemeSelector: React.FC = () => {

    const { setTheme } = useThemeContext();

    const handleTabChange = (index: number, value: Theme) => {
        setTheme(value);
    }

    return (
        <div className={classes.themeSelector}>
            <Tabs onChange={handleTabChange}>
                {Object.values(themes.lightMode).map((theme, i) => {
                    return(
                        <Tab key={i}>{theme}</Tab>
                    );
                })}
            </Tabs>
        </div>
    );
};

export default ThemeSelector;