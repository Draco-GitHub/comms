import { Channel } from "../../../types.ts";
import "../../../styles/voice-chat.css"

import MicIcon from "../../../assets/icons/mic.tsx";
import ChevronDownIcon from "../../../assets/icons/chevron-down.tsx";
import HeadphonesIcon from "../../../assets/icons/headphones.tsx";
import VideoIcon from "../../../assets/icons/video.tsx";
import ScreenShareIcon from "../../../assets/icons/screen-share.tsx";
import EllipsisIcon from "../../../assets/icons/ellipsis.tsx";
import PhoneCallIcon from "../../../assets/icons/phone-call.tsx";
import ScanIcon from "../../../assets/icons/scan.tsx";
import SquareArrowOutUpRightIcon from "../../../assets/icons/square-arrow-out-up-right.tsx";
import Avatar from "../../ui/avatar.tsx";

interface TextChannelProps {
    channel: Channel
}

const VoiceChannel:React.FC<TextChannelProps> = ({channel}) => {

    console.log(channel);

    return (
        <div className="voice-chat-area">
            <div className="users-area">
                <div className="users-row">
                    <div className="user">
                        <Avatar src={"nothing"} size={100}/>
                        <span>username</span>
                    </div>
                    <div className="user">
                        <Avatar src={"nothing"} size={100}/>
                        <span>username</span>
                    </div>
                    <div className="user">
                        <Avatar src={"nothing"} size={100}/>
                        <span>username</span>
                    </div>
                    <div className="user">
                        <Avatar src={"nothing"} size={100}/>
                        <span>username</span>
                    </div>
                </div>
            </div>
            <div style={{display:"flex", padding:"10px", alignItems:"center", justifyContent:"space-between"}}>
                <div className="v-controls" style={{width:"40px"}}></div>
                <div className="v-controls">
                    <div className="v-control-box">
                        <div className="v-control" >
                            <MicIcon className="left-control"/>
                            <ChevronDownIcon className="right-control"/>
                        </div>
                        <div className="v-control" >
                            <HeadphonesIcon className="left-control"/>
                            <ChevronDownIcon className="right-control"/>
                        </div>
                    </div>
                    <div className="v-control-box">
                        <div className="v-control" >
                            <VideoIcon className="left-control"/>
                            <ChevronDownIcon className="right-control"/>
                        </div>
                        <div className="v-control" >
                            <ScreenShareIcon className="left-control"/>
                            <ChevronDownIcon className="right-control"/>
                        </div>
                        <div className="v-control" >
                            <EllipsisIcon/>
                        </div>
                    </div>
                    <div className="v-control-box">
                        <div className="v-control" >
                            <PhoneCallIcon wrapperStyle={{background: "#ff4242", width: "55px"}}/>
                        </div>
                    </div>
                </div>
                <div className="v-controls">
                    <SquareArrowOutUpRightIcon wrapperStyle={{height: "40px", width: "40px"}}/>
                    <ScanIcon wrapperStyle={{height: "40px", width: "40px"}}/>
                </div>
            </div>
        </div>
    )
}

export default VoiceChannel