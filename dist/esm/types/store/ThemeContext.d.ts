import React from "react";
import { Theme } from "../core/interfaces/ThemeInterface";
declare type GetTheme = () => Theme;
declare type SetTheme = (newTheme: Theme) => void;
interface Props {
    theme: Theme;
    children?: React.ReactNode;
}
interface ThemeContext {
    getTheme: GetTheme;
    setTheme: SetTheme;
}
export declare const ThemeProvider: React.FC<Props>;
export declare const useThemeContext: () => ThemeContext;
export {};
