import React, { forwardRef, useState } from 'react';
import { useThemeContext } from '../../../store/ThemeContext';
import { themeClasses } from '../../theme';
import { buildClass } from '../../utils/utils';
import { SectionSelectorInterface as Props, classes, SectionInterface } from "./SectionSelectorInterface";

const SectionSelector = forwardRef<HTMLDivElement, Props>((props, ref) => {
    const { getTheme } = useThemeContext();
    const theme = props.theme ? props.theme : getTheme();
    const [activeSection, setActiveSection] = useState(0);

    const elementClass = buildClass({
        [classes.wrapper]: true,
        [themeClasses[theme]]: true
    });

    const renderSectionSelector = () => {
        return React.Children.map(props.children, (child: any, i: number) => {
            const itemClass = buildClass({
                [classes.selectorItem]: true,
                [classes.selectorItemActive]: i === activeSection
            });

            return(
                <div className={itemClass} onClick={() => setActiveSection(i)}>
                    {child.props.title}
                </div>
            );
        })
    };


    const renderSection = () => {
        return React.Children.map(props.children, (child: any, i: number) => {
            if (i === activeSection) {
                return(
                    <div className={classes.section}>
                        {child.props.children}
                    </div>
                );
            }
        })
    };

    return(
        <div className={elementClass}>
            <div className={classes.selector}>
                {renderSectionSelector()}
            </div>
            {renderSection()}
        </div>
    );
})

export default SectionSelector;