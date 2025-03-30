import DiscordIcon from "../assets/Icons/SVGDiscord.tsx";
import {SVGClose, SVGMaximize, SVGMinimize, SVGContact} from "../assets/Icons";
import {Window} from "@tauri-apps/api/window"

import "../styles/titlebar.css"

interface TitleBarProps {
    title:string
}

const TitleBar: React.FC<TitleBarProps> = ({title}) => {

    const win = Window.getCurrent()

    return (
        <div className="title-bar">
            <div className="title-bar-controls">
                <DiscordIcon/>
                <SVGContact/>
            </div>
            <div className="title-bar-title">{title}</div>
            <div className="window-controls">
                <SVGMinimize className="minimize" onClick={() => win.minimize()}/>
                <SVGMaximize className="maximize" onClick={() => win.toggleMaximize()}/>
                <SVGClose className="close" onClick={() => win.close()}/>
            </div>
        </div>
    )
}

export default TitleBar;