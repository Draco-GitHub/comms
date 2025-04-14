import React from "react";
import ReactDOM from "react-dom/client";
import TitleBar from "./components/TitleBar.tsx";
import { GlobalProvider } from "./globals.tsx";
import Content from "./content.tsx";
import Overlay from "./components/Overlay.tsx";

import "./styles/main.css";
import "./styles/global.css"


const App: React.FC = () => {
  return (
    <React.StrictMode>
      <GlobalProvider>
        <Overlay/>
        <TitleBar />
        <Content />
      </GlobalProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);