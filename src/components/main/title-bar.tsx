import {Window} from "@tauri-apps/api/window"

import MinusIcon from "../../assets/icons/minus.tsx";
import SquareIcon from "../../assets/icons/square.tsx";
import XIcon from "../../assets/icons/x.tsx";

import "../../styles/titlebar.css"
import SidebarRightIcon from "../../assets/icons/side-panel-right.tsx";
import React from "react";

interface TitleBarProps {
    isSidePanelShown: boolean;
    setIsShown: () => void;
}

const TitleBar: React.FC<TitleBarProps> = ({isSidePanelShown, setIsShown}) => {

    const win = Window.getCurrent()


    return (
        <div className="title-bar">
            <div className="title-bar-controls">
                {isSidePanelShown ? <SidebarRightIcon svgStyle={{width:"22px", height:"22px"}} onClick={setIsShown}/> : null}
            </div>
            <div className="window-controls" style={{height:"100%"}}>
                <MinusIcon onClick={()=> win.minimize()} wrapperStyle={{width:"50px", height:"100%", color:"white"}} svgStyle={{width:"17px", height:"17px"}}/>
                <SquareIcon onClick={async ()=> {
                    await win.isMaximized()? await win.unmaximize() : await win.maximize()
                }} wrapperStyle={{width:"50px", height:"100%", color:"white"}} svgStyle={{width:"13px", height:"13px"}}/>
                <XIcon onClick={()=> win.close()} wrapperStyle={{width:"50px", height:"100%", color:"white"}} svgStyle={{width:"17px", height:"17px"}}/>
            </div>
        </div>
    )
}

export default TitleBar;