import Icon from "../Icon.tsx";
import {SVGSettings} from "../../assets/Icons/index.tsx";
import ChannelSearch from "../ChannelSearch.tsx";

interface ServerProps {
    currentChannel:string
}

const Server:React.FC<ServerProps> = ({currentChannel}) => {
    return (
        <div className="channel-view">
                <div className="channel-header">
                    <div className="channel-info">
                        <Icon src=""/>
                        {currentChannel && <span>{currentChannel}</span>}
                    </div>
                    <div className="channel-controls">
                        <SVGSettings className="hoverable"/>
                        <ChannelSearch/>
                    </div>
                </div>
                <div className="communication-view">
                    <div className="communication-pane">
                        <div className="scroll-area">

                        </div>
                    </div>
                    <div className="right-nav scroll-area">

                    </div>
                </div>
            </div>
    )
}

export default Server;