import {useState} from "react";
import ServerCard from "./ServerCard.tsx";
import UserArea from "../UserArea.tsx";
import ResizeArea from "../ResizeArea.tsx";
import SVGSettings from "../../assets/Icons/SVGSettings.tsx";
import ChannelSearch from "../ChannelSearch.tsx";
import Icon from "../Icon.tsx";
import TextChannel from "../TextChannel.tsx";

import "./server.css"


const ServersViewer: React.FC<PageProps> = ({onChannelSearchClick}) => {
    const count = 50;

    const serverIds = Array.from({ length: count }, (_, index) => `user_${index + 1}`);
    const channelIds = Array.from({ length: count }, (_, index) => `user_${index + 1}`);

    const [currentServer, setCurrentServer] = useState<string>(serverIds[0]);
    const [currentChannel, setCurrentChannel] = useState<string>("# text-chat");

    const handleServerChange = (userId: string) => {
        setCurrentServer(userId);
    }

    return (
        <div className="content">
            <div className="left-nav">
                <div className="left-nav-header">
                    <div className="servers-search hoverable">
                        Search up servers
                    </div>
                </div>
                <div className="left-nav-items scroll-area">                
                    {serverIds.map((serverId) => (
                        <ServerCard key={serverId} userId={serverId} isSelected={currentServer === serverId} openChannel={handleServerChange}/>
                    ))}
                </div>
                <UserArea/>
            </div>
            <ResizeArea/>
            <div className="channel-view">
                <div className="channel-header">
                    <div className="channel-info">
                        <Icon src=""/>
                        {currentServer && <span>{currentServer}</span>}
                        <span>{currentChannel}</span>
                    </div>
                    <div className="channel-controls">
                        <SVGSettings className="hoverable"/>
                        <ChannelSearch onClick={onChannelSearchClick}/>
                    </div>
                </div>
                <TextChannel/>
            </div>
        </div>
    );
}

export default ServersViewer;