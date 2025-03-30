import React from "react";
import Icon from "./Icon.tsx";

interface FriendChannelProps {
    userId: string;
    isSelected: boolean;
    openChannel: (userId: string) => void;
}

const Server: React.FC<FriendChannelProps> = ({userId, isSelected, openChannel}) => {
    return (
        <div
            className={`server ${isSelected ? 'selected' : ''}`}
            onClick={() => openChannel(userId)}
        >
            <Icon src="https://cdn.discordapp.com/icons/1193841000108531764/70aab611c0cb684c9833b8e05b7ff046.webp?size=512"/>
            <span>Friend {userId}</span>
        </div>
    )
}

export default Server