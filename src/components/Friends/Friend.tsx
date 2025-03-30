import Icon from "../Icon.tsx";
import {SVGSettings} from "../../assets/Icons/index.tsx";
import ChannelSearch from "../ChannelSearch.tsx";
import TextChannel from "../TextChannel.tsx";

interface FriendProps {
    currentChannel:string
}

const Friend:React.FC<FriendProps> = ({currentChannel}) => {
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
                <TextChannel/>
            </div>
    )
}

export default Friend;