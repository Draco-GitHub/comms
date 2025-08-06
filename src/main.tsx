import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalProvider } from "./globals.tsx";
import Content from "./content.tsx";

import "./styles/global.css"

const App: React.FC = () => {
    return (
        <React.StrictMode>
            <GlobalProvider>
                <Content/>
            </GlobalProvider>
        </React.StrictMode>
    );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);