import { useGlobal } from "./globals";
import SidePanel from "./components/main/side-panel.tsx";
import Overlay from "./components/main/overlay.tsx";
import TitleBar from "./components/main/title-bar.tsx";
import React, {useEffect, useState} from "react";
import GlobalSearch from "./components/main/pages/global-search.tsx";


const Content = () => {
    const { content, setContent } = useGlobal();

    const [isSidePanelShown, setIsSidePanelShown] = useState(false);
    const toggleSidePanel = () => {
        setIsSidePanelShown(!isSidePanelShown);
    }

    useEffect(() => {
        setContent(<GlobalSearch/>);
    })

    return (
        <React.Fragment>
            <Overlay/>
            {isSidePanelShown? null : <SidePanel setIsShown={toggleSidePanel}/>}
            <div className="content">
                <TitleBar isSidePanelShown={isSidePanelShown} setIsShown={toggleSidePanel}/>
                {content}
            </div>
        </React.Fragment>
    )
}

export default Content;