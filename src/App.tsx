import React from 'react';
import { createRoutes } from './config/routes';
import "./app.scss";
import Menu from './modules/menu/Menu';
import { ThemeProvider } from './store/ThemeContext';

export const appClasses = {
    app: "nk__ui-lib",
    navWindow: "nk__ui-lib__nav",
    contentWindow: "nk__ui-lib__window",
};

const App: React.FC = () => {
    return(
        <ThemeProvider theme="blue">
            <div className={appClasses.app}>
                <div className={appClasses.navWindow}>
                    <Menu />
                </div>
                <div className={appClasses.contentWindow}>
                    {createRoutes()}
                </div>
            </div>
        </ThemeProvider>
    );
};

export default App;