import React from 'react';
import { Display } from '../../../core/interfaces/DisplayInterface';
interface Props {
    children: React.ReactNode;
    onDisplayChange?: (value: Display) => void;
    display?: Display;
}
declare const StoryViewBox: React.FC<Props>;
export default StoryViewBox;
