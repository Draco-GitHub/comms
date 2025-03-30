import React from "react";
import Icon from "../Icon.tsx";

import "./friend-card.css"

interface FriendChannelProps {
    userId: string;
    isSelected: boolean;
    openChannel: (userId: string) => void;
}

const FriendCard: React.FC<FriendChannelProps> = ({userId, isSelected, openChannel}) => {
    return (
        <div
            className={`friend-card hoverable ${isSelected ? 'selected' : ''}`}
            onClick={() => openChannel(userId)}
        >
            <Icon src="https://cdn.discordapp.com/icons/1193841000108531764/70aab611c0cb684c9833b8e05b7ff046.webp?size=512"/>
            <div className="friend-card-info">
                <span>Friend {userId}</span>
                <span></span>
            </div>
        </div>
    )
}

export default FriendCard