import React from "react";
import "./story-template.scss";

interface Props {
    children?: React.ReactNode
}

export const classes = {
    story: "nk__ui-lib__story",
    header: "nk__ui-lib__story__header",
    description: "nk__ui-lib__story__description",
    themeSelector: "nk__ui-lib__story__theme-selector",
    viewbox: "nk__ui-lib__story__viewbox",
    viewboxTitle: "nk__ui-lib__story__viewbox__title",
    control: "nk__ui-lib__story__viewbox__control",
    codebox: "nk__ui-lib__story__codebox",
    copyButton: {
        base: "nk__ui-lib__story__codebox__copy-button",
        activated: "nk__ui-lib__story__codebox__copy-button--activated"
    },
    headline: "nk__ui-lib__story__headline",
    block: "nk__ui-lib__story__block",
    blockTitle: "nk__ui-lib__story__block__title",
    blockContent: "nk__ui-lib__story__block__content",
    behaviorBlock: "nk__ui-lib__story__block__behavior",
    behaviorBlockAttrs: "nk__ui-lib__story__block__behavior__attrs",
    controlBox: "nk__ui-lib__story__viewbox__control-box",
    controlBoxTitle: "nk__ui-lib__story__viewbox__control-box__title",
    overviewBoxContainer: "nk__ui-lib__story__viewbox__container",
    overviewBoxDisplayControl: "nk__ui-lib__story__viewbox__display-control",
    overviewBoxDisplayControlActive: "nk__ui-lib__story__viewbox__display-control--active",
    overviewBoxDisplay: "nk__ui-lib__story__viewbox__display",
    display: {
        desktop: "nk__ui-lib__story__viewbox__display--desktop",
        tablet: "nk__ui-lib__story__viewbox__display--tablet",
        mobile: "nk__ui-lib__story__viewbox__display--mobile"
    }
}

const StoryTemplate: React.FC<Props> = (props) => {
    return(
        <div className={classes.story}>
            {props.children}
        </div>
    );
}

export default StoryTemplate;