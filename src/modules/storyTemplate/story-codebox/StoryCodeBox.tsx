import React, { useEffect, useRef, useState } from 'react';
import { themeClasses } from '../../../core/theme';
import { buildClass } from '../../../core/utils/utils';
import { useThemeContext } from '../../../store/ThemeContext';
import { classes } from "../story-template/StoryTemplate";

interface Props {
    children: React.ReactNode
}

const StoryCodeBox: React.FC<Props> = (props) => {
    const codeRef = useRef<any>(null);
    const { getTheme } = useThemeContext();
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        navigator.clipboard.readText().then(res => res === codeRef.current.innerText ? setCopied(true) : setCopied(false));
    }, []);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeRef.current.innerText);
        setCopied(true);
    };

    const buttonClass = buildClass({
        [classes.copyButton.base]: true,
        [classes.copyButton.activated]: copied,
        [themeClasses[getTheme()]]: true
    })

    return(
        <div className={classes.codebox}>
            <pre ref={codeRef}>
                {props.children}
            </pre>
            <button onClick={() => copyToClipboard()} className={buttonClass}>
                { copied ? "Copied" : "Copy"}
            </button>
        </div>
    );
};

export default StoryCodeBox;