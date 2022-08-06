import React from "react";
import "./story-template.scss";
interface Props {
    children?: React.ReactNode;
}
export declare const classes: {
    story: string;
    header: string;
    description: string;
    themeSelector: string;
    viewbox: string;
    viewboxTitle: string;
    control: string;
    codebox: string;
    copyButton: {
        base: string;
        activated: string;
    };
    headline: string;
    block: string;
    blockTitle: string;
    blockContent: string;
    behaviorBlock: string;
    behaviorBlockAttrs: string;
    controlBox: string;
    controlBoxTitle: string;
    overviewBoxContainer: string;
    overviewBoxDisplayControl: string;
    overviewBoxDisplayControlActive: string;
    overviewBoxDisplay: string;
    display: {
        desktop: string;
        tablet: string;
        mobile: string;
    };
};
declare const StoryTemplate: React.FC<Props>;
export default StoryTemplate;
