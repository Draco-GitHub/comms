import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import TitleBar from "./components/TitleBar.tsx";
import ServersViewer from "./components/Servers/ServersViwer.tsx";
import FriendsViewer from "./components/Friends/FriendsViwer.tsx";

import "./styles/main.css";
import "./styles/temp.css"

const App: React.FC = () => {

    const [currentPageID, setCurrentPageID] = useState<string>("Servers");

    const handleOverlayChange = (node:React.FC) => {
        
    }

    const pages: Record<string, JSX.Element> = {
        Friends:<FriendsViewer/>,
        Servers:<ServersViewer/>
    };

    return (
        <React.StrictMode>
            <TitleBar title={currentPageID}/>
            {pages[currentPageID]}
        </React.StrictMode>
    );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <App />
);
