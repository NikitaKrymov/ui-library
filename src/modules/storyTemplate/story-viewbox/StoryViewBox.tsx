import React, { useEffect, useRef, useState } from 'react';
import ActionMenu from '../../../core/components/actionMenu/ActionMenu';
import { ActionMenuElement } from '../../../core/components/actionMenu/ActionMenuInterface';
import { classes } from "../story-template/StoryTemplate";
import ThemeSelector from '../theme-selector/ThemeSelector';
import Tabs from "../../../core/components/tabs/Tabs";
import Tab from "../../../core/components/tabs/Tab";
import Icon from "../../../core/components/icon/Icon";
import { Display, DESKTOP } from '../../../core/interfaces/DisplayInterface';

interface Props {
    children: React.ReactNode,
    onDisplayChange?: (value: Display) => void,
    display?: Display
}

const StoryViewBox: React.FC<Props> = (props) => {
    const displays = {
        mobile: "mobile",
        tablet: "tablet",
        desktop: "desktop"
    };

    return(
        <div className={classes.block}>
            <div className={classes.blockTitle}>
                Overview 
            </div>
            { props.display ? <div className={classes.overviewBoxDisplayControl}>
                {Object.values(displays).map((element: any, i: number) => {
                    return (
                        <div data-label={element} key={i} className={element === props.display ? classes.overviewBoxDisplayControlActive : ""} onClick={() => props.onDisplayChange && props.onDisplayChange(element)}>
                            <Icon icon={element}  />
                        </div>
                    );
                })}
            </div> : null }
            {props.children}
        </div>
    );
};

export default StoryViewBox;