import {Channel} from "../../../types.ts";
import React from "react";

interface HistoryResultButtonProps {
    channel: Channel;
    onClick?: () => void;
}

const HistoryResultCard:React.FC<HistoryResultButtonProps> = ({channel, onClick}) => {
    return (
        <div className="result" onClick={onClick} tabIndex={0}>
            <div className="avatar" style={{marginRight: "10px"}}></div>
            {channel.display_name}
        </div>
    )
}

export default HistoryResultCard;