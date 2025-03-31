import {useState} from "react";
import FriendCard from "./FriendCard.tsx";
import UserArea from "../UserArea.tsx";
import ResizeArea from "../ResizeArea.tsx";
import SVGSettings from "../../assets/Icons/SVGSettings.tsx";
import ChannelSearch from "../ChannelSearch.tsx";
import Icon from "../Icon.tsx";
import TextChannel from "../TextChannel.tsx";

import "./friend.css"

const FriendsViewer: React.FC<PageProps> = ({onChannelSearchClick}) => {
    const count = 50;
    
    const friendIds = Array.from({ length: count }, (_, index) => `user_${index + 1}`);

    const [currentFriend, setCurrentFriend] = useState<string>("# - text-chat");

    const handleServerChange = (userId: string) => {
        setCurrentFriend(userId);
    }

    return (
        <div className="content">
            <div className="left-nav">
                <div className="left-nav-header">
                    <div className="friends-search hoverable">
                        Search up friends
                    </div>
                </div>
                <div className="left-nav-items scroll-area">
                    {friendIds.map((friendId) => (
                        <FriendCard key={friendId} userId={friendId} isSelected={currentFriend === friendId} openChannel={handleServerChange}/>
                    ))}
                </div>
                <UserArea/>
            </div>
            <ResizeArea/>
            <div className="channel-view">
                <div className="channel-header">
                    <div className="channel-info">
                        <Icon src=""/>
                        {currentFriend && <span>{currentFriend}</span>}
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

export default FriendsViewer;