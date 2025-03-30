import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.css";
import "./styles/main.css";
import Friends from "./Friends.tsx";
import Servers from "./Servers.tsx";
import TitleBar from "./TitleBar.tsx";

const App: React.FC = () => {

    const [currentPageID, setCurrentPageID] = useState<string>("Servers");
    const pages: Record<string, JSX.Element> = {
        Friends:<Friends/>,
        Servers:<Servers/>
    };

    return (
        <React.StrictMode>
            <TitleBar/>
            {pages[currentPageID]}
        </React.StrictMode>
    );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <App />
);
