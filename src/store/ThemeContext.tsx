import React, { useContext, useState } from "react";
import { Theme } from "../core/interfaces/ThemeInterface";

type GetTheme = () => Theme
type SetTheme = (newTheme: Theme) => void

interface Props {
    theme: Theme,
    children?: React.ReactNode
}

interface ThemeContext {
    getTheme: GetTheme,
    setTheme: SetTheme
}

const themeContext = React.createContext<ThemeContext>({ getTheme: () => "blue", setTheme: () => {} });

export const ThemeProvider: React.FC<Props> = ({ theme, children }) => {
    const [activeTheme, setActiveTheme] = useState<Theme>(theme);

    const getTheme: GetTheme = (): Theme => {
        return activeTheme;
    }

    const setTheme: SetTheme = (newTheme: Theme) => {
        setActiveTheme(newTheme);
    }

    return (
        <themeContext.Provider value={{ getTheme, setTheme }}>
            {children}
        </themeContext.Provider>
    );
}


export const useThemeContext = () => useContext(themeContext);