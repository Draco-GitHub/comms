import React, {useState} from "react";
import {useGlobal} from "../../../globals.tsx";
import {Channel, Contact, Group} from "../../../types.ts";
import TextChannel from "../../main/channels/channel-text.tsx";
import Avatar from "../avatar.tsx";

interface ChannelCardProps {
    channel: Channel;
    tabIndex: number;
    avatarSize?: number;
    style?: React.CSSProperties
}

const ChannelCard: React.FC<ChannelCardProps> = ({ channel, tabIndex, avatarSize=50, style}) => {

    const {setContent} = useGlobal();


    const contactStyle: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        flexShrink: 0,
        ...style
    }

    const handleClick = () => {
        if (channel instanceof Contact || channel instanceof Group) {
            setContent(<TextChannel channel={channel}/>)
        }
    };

    return (
        <div
            className="channel-card"
            onClick={handleClick}
            tabIndex={tabIndex}
            style={contactStyle}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1c1c1c"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
        >
            <Avatar src={channel.avatar_url} size={avatarSize} status={channel instanceof Contact ? channel.status : undefined} />
            <span>{channel.display_name}</span>
        </div>
    );
};

export default ChannelCard;