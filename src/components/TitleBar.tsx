import {Window} from "@tauri-apps/api/window"

import "../styles/titlebar.css"
import { useGlobal } from "../globals.tsx";
import Discord from "./discord.tsx";
import DiscordIcon from "../assets/react-icons/discord.tsx";
import MinusIcon from "../assets/react-icons/minus.tsx";
import SquareIcon from "../assets/react-icons/square.tsx";
import XIcon from "../assets/react-icons/x.tsx";

const TitleBar: React.FC = () => {
    const { channelDisplayed, setContent } = useGlobal();

    const win = Window.getCurrent()

    return (
        <div className="title-bar">
            <div className="title-bar-controls">
                <DiscordIcon onClick={()=>setContent(<Discord/>)} wrapperStyle={{width:"30px", height:"30px", color:"white"}} svgStyle={{width:"17px", height:"17px"}}/>
            </div>
            <div className="title-bar-title">{channelDisplayed?.display_name}</div>
            <div className="window-controls" style={{height:"100%"}}>
                <MinusIcon onClick={()=> win.minimize()} wrapperStyle={{width:"50px", height:"100%", color:"white"}} svgStyle={{width:"17px", height:"17px"}}/>
                <SquareIcon onClick={()=> win.maximize()} wrapperStyle={{width:"50px", height:"100%", color:"white"}} svgStyle={{width:"13px", height:"13px"}}/>
                <XIcon onClick={()=> win.close()} wrapperStyle={{width:"50px", height:"100%", color:"white"}} svgStyle={{width:"17px", height:"17px"}}/>
            </div>
        </div>
    )
}

export default TitleBar;