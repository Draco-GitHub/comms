import React, { useState } from 'react';
import SearchBar from "../../ui/search-bar.tsx";
import PinIcon from "../../../assets/icons/pin.tsx";
import "../../../styles/text-chat.css"
import {Channel} from "../../../types.ts";
import TextArea from "../../ui/text-area.tsx";
import Avatar from "../../ui/avatar.tsx";
import PhoneCallIcon from "../../../assets/icons/phone-call.tsx";
import VoiceChannel from "./channel-voice.tsx";
import {useGlobal} from "../../../globals.tsx";

interface TextChannelProps {
    channel: Channel
}

const TextChannel: React.FC<TextChannelProps> = ({channel}) => {

    const {setContent} = useGlobal();
    const [currentMessages, setCurrentMessages] = useState<string[]>([
        "test"
    ]);

    function onSubmit(value: string) {
        setCurrentMessages(prev => [...prev, value]);
    }

    return (
        <div className="text-chat-area">
            <div className="tc-top-bar">
                <div className="tc-top-bar-left">
                    <Avatar src={channel.avatar_url} size={30}/>
                    {channel.display_name}
                </div>
                <div className="tc-top-bar-right">
                    <PhoneCallIcon onClick={() => {setContent(<VoiceChannel channel={channel}/>)}}/>
                    <PinIcon/>
                    <SearchBar onSearch={(text)=> console.log(text)} style={{height: "35px", width:"250px", border: "1px solid #4A4A4A"}}/>
                </div>
            </div>
            <div className="text-chat-container">
                <div className="text-chat scroll-area">
                    {currentMessages.map((message, index) => {
                        return <div key={index}>{message}</div>
                    })}
                </div>
            </div>

            <TextArea onSubmit={onSubmit} showCharCount={true}/>
        </div>
    )
}

export default TextChannel