import React from "react";
import Icon from "./Icon.tsx";

interface FriendChannelProps {
    userId: string;
    isSelected: boolean;
    openChannel: (userId: string) => void;
}

const Friend: React.FC<FriendChannelProps> = ({userId, isSelected, openChannel}) => {
    return (
        <div
            className={`friend hoverable ${isSelected ? 'selected' : ''}`}
            onClick={() => openChannel(userId)}
        >
            <Icon src=""/>
            <div className="friend-info">
                <span style={{fontSize:"14px", fontWeight:"bold"}}>Friend {userId}</span>
                <div className="status">
                    <img src="" alt="status-emote"/>
                    <span style={{fontSize:"12px"}}>status</span>
                </div>
            </div>
        </div>
    )
}

export default Friend