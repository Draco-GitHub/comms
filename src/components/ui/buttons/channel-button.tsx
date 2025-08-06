import {Channel} from "../../../types.ts";
import React from "react";

interface ChannelButtonProps {
    channel: Channel;
    onClick: ()=>void;
}

const ChannelButton:React.FC<ChannelButtonProps> = ({channel, onClick}) => {
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            onClick();
        }
    };

    return (
        <div className="channel" onClick={onClick} role="button" tabIndex={0} onKeyDown={handleKeyPress}>
            <div className="channel-info">
                <span style={{fontSize:"10pt", fontWeight:"bold", marginRight:"10px"}}>{channel.display_name}</span>
                <span style={{fontSize:"8pt", fontWeight:"bold", color:"#808080"}}>{channel.category}</span>
            </div>
            <div className="server-info">
                <img src="" alt="" style={{borderRadius:"50%", height:"10px", width:"10px"}}/>
                <span style={{fontSize:"10pt", fontWeight:"bold", color:"#808080"}}>{channel.owner}</span>
            </div>
        </div>
    )
}

export default ChannelButton;