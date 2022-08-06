import React from 'react';
import Tab from '../../../core/components/tabs/Tab';
import Tabs from '../../../core/components/tabs/Tabs';
import { Theme } from '../../../core/interfaces/ThemeInterface';
import { themes } from '../../../core/theme';
import { classes } from "../story-template/StoryTemplate";

interface Props {
    children: React.ReactNode
}

const ViewBoxControl: React.FC<Props> = (props) => {
    return (
        <div className={classes.controlBox}>
            <div className={classes.controlBoxTitle}>
                Controls
            </div>
            {props.children}
        </div>
    );
};

export default ViewBoxControl;