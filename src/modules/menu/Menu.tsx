import React from 'react';
import SideNav from '../../core/components/sidenav/SideNav';
import SideNavElement from '../../core/components/sidenav/SideNavElement';
import SideNavGroup from '../../core/components/sidenav/SideNavGroup';

const Menu: React.FC = () => {
   return(
        <SideNav>
            <SideNavElement to="/gettingStarted" label="Getting Started">
            </SideNavElement>
            <SideNavGroup label="Components" >
                <SideNavElement to="/accordion" label="Accordion">
                </SideNavElement>
                <SideNavElement to="/actionMenu" label="Action Menu">
                </SideNavElement>
                <SideNavElement to="/badge" label="Badge">
                </SideNavElement>
                <SideNavElement to="/banner" label="Banner">
                </SideNavElement>
                <SideNavElement to="/bar" label="Bar">
                </SideNavElement>
                <SideNavElement to="/button" label="Button">
                </SideNavElement>
                <SideNavElement to="/calendar" label="Calendar">
                </SideNavElement>
                <SideNavElement to="/card" label="Card">
                </SideNavElement>
                <SideNavElement to="/carousel" label="Carousel">
                </SideNavElement>
                <SideNavElement to="/checkbox" label="Checkbox">
                </SideNavElement>
                <SideNavElement to="/clock" label="Clock">
                </SideNavElement>
                <SideNavElement to="/dropdown" label="Dropdown">
                </SideNavElement>
                <SideNavElement to="/form" label="Form">
                </SideNavElement>
                <SideNavElement to="/input" label="Input">
                </SideNavElement>
                <SideNavElement to="/list" label="List">
                </SideNavElement>
                <SideNavElement to="/loadingIndicator" label="Loading Indicator">
                </SideNavElement>
                <SideNavElement to="/modal" label="Modal">
                </SideNavElement>
                <SideNavElement to="/notification" label="Notification">
                </SideNavElement>
                <SideNavElement to="/password" label="Password">
                </SideNavElement>
                <SideNavElement to="/progressTracker" label="Progress Tracker">
                </SideNavElement>
                <SideNavElement to="/radioButton" label="RadioButton">
                </SideNavElement>
                <SideNavElement to="/tabs" label="Tabs">
                </SideNavElement>
                <SideNavElement to="/tag" label="Tag">
                </SideNavElement>
                <SideNavElement to="/textarea" label="Text Area">
                </SideNavElement>
                <SideNavElement to="/timePicker" label="Time Picker">
                </SideNavElement>
                <SideNavElement to="/sectionSelector" label="Section Selector">
                </SideNavElement>
                <SideNavElement to="/select" label="Select">
                </SideNavElement>
                <SideNavElement to="/spinner" label="Spinner">
                </SideNavElement>
                <SideNavElement to="/switch" label="Switch">
                </SideNavElement>
            </SideNavGroup>
            <SideNavGroup label="Data Visualization">
                <SideNavElement to="/barChart" label="Bar">
                </SideNavElement>
                <SideNavElement to="/lineChart" label="Line">
                </SideNavElement>
            </SideNavGroup>
        </SideNav>
   )
};

export default Menu;