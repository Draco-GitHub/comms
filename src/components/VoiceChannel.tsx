import { useRef, useState, ChangeEvent } from "react"
import { Channel } from "../types";
import MicIcon from "../assets/react-icons/mic";
import ChevronDownIcon from "../assets/react-icons/chevron-down";
import HeadphonesIcon from "../assets/react-icons/headphones";
import VideoIcon from "../assets/react-icons/video";
import ScreenShareIcon from "../assets/react-icons/screen-share";
import EllipsisIcon from "../assets/react-icons/ellipsis";
import PhoneCallIcon from "../assets/react-icons/phone-call";
import ScanIcon from "../assets/react-icons/scan";


interface TextChannelProps {
    channel: Channel
}

const VoiceChannel:React.FC<TextChannelProps> = ({channel}) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputAreaRef = useRef<HTMLDivElement>(null);
    const [text, setText] = useState<string>("");
    const MAX_ROWS = 25;

    const handleContainerClick = () => {
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    };

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
        
        const textarea = textareaRef.current;
        const container = containerRef.current;
        const inputArea = inputAreaRef.current;
        if (!textarea || !container || !inputArea) return;
        
        textarea.style.height = '0px';
        
        const lineHeight = 20;
        const minHeight = lineHeight;
        const maxHeight = MAX_ROWS * lineHeight + 10;
        
        const contentHeight = Math.min(textarea.scrollHeight, maxHeight);
        const newTextareaHeight = Math.max(contentHeight, minHeight);
        
        const containerHeight = newTextareaHeight + 20;
        const inputAreaHeight = containerHeight + 20;
        
        textarea.style.height = `${newTextareaHeight}px`;
        container.style.height = `${containerHeight}px`;
        inputArea.style.height = `${inputAreaHeight}px`;
        
        textarea.style.overflowY = textarea.scrollHeight > maxHeight ? 'auto' : 'hidden';
    };

    return (
        <div className="voice-chat-area" style={{display: "flex", flex: 1, flexDirection:"column", background:"rgb(14, 14, 14)"}}>
            <div className="user-area" style={{display:"flex", flex:1, flexDirection:"column"}}>
                <div className="users-box" style={{display:"flex", flex:1, alignItems:"center", justifyContent:"space-evenly"}}>
                    <div className="user" style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"10px"}}>
                        <div style={{background:"#ffffff", width:"100px", height:"100px", borderRadius:"50%", boxShadow:"0 0 20px 0px black"}}/>
                        <span>username</span>
                    </div>
                    <div className="user" style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"10px"}}>
                        <div style={{background:"#ffffff", width:"100px", height:"100px", borderRadius:"50%", boxShadow:"0 0 20px 0px black"}}/>
                        <span>username</span>
                    </div>
                    <div className="user" style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"10px"}}>
                        <div style={{background:"#ffffff", width:"100px", height:"100px", borderRadius:"50%", boxShadow:"0 0 20px 0px black"}}/>
                        <span>username</span>
                    </div>
                    <div className="user" style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"10px"}}>
                        <div style={{background:"#ffffff", width:"100px", height:"100px", borderRadius:"50%", boxShadow:"0 0 20px 0px black"}}/>
                        <span>username</span>
                    </div>
                </div>
            </div>
            <div style={{display:"flex", padding:"10px", alignItems:"center", justifyContent:"space-between"}}>
                <div style={{width:"40px"}}></div>
                <div className="controls" style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:"10px"}}>
                    <div style={{display:"flex", gap:"5px", background:"#131313", borderRadius:"10px", padding:"5px"}}>
                        <div className="v-control" style={{display:"flex", gap:"1px"}}>
                            <MicIcon wrapperStyle={{background:"#262626", borderTopLeftRadius:"10px", borderBottomLeftRadius:"10px", height:"40px", width:"40px"}}/>
                            <ChevronDownIcon wrapperStyle={{background:"#262626", borderTopLeftRadius:"10px", borderBottomLeftRadius:"10px", height:"40px", width:"40px"}}/>
                        </div>
                        <div className="v-control" style={{display:"flex", gap:"1px"}}>
                            <HeadphonesIcon wrapperStyle={{background:"#262626", borderTopLeftRadius:"10px", borderBottomLeftRadius:"10px", height:"40px", width:"40px"}}/>
                            <ChevronDownIcon wrapperStyle={{background:"#262626", borderTopLeftRadius:"10px", borderBottomLeftRadius:"10px", height:"40px", width:"40px"}}/>
                        </div>
                    </div>
                    <div style={{display:"flex", gap:"5px", background:"#131313", borderRadius:"10px", padding:"5px"}}>
                        <div className="v-control" style={{display:"flex", gap:"1px"}}>
                            <VideoIcon wrapperStyle={{background:"#262626", borderTopLeftRadius:"10px", borderBottomLeftRadius:"10px", height:"40px", width:"40px"}}/>
                            <ChevronDownIcon wrapperStyle={{background:"#262626", borderTopLeftRadius:"10px", borderBottomLeftRadius:"10px", height:"40px", width:"40px"}}/>
                        </div>
                        <div className="v-control" style={{display:"flex", gap:"1px"}}>
                            <ScreenShareIcon wrapperStyle={{background:"#262626", borderTopLeftRadius:"10px", borderBottomLeftRadius:"10px", height:"40px", width:"40px"}}/>
                            <ChevronDownIcon wrapperStyle={{background:"#262626", borderTopLeftRadius:"10px", borderBottomLeftRadius:"10px", height:"40px", width:"40px"}}/>
                        </div>
                        <div className="v-control" style={{display:"flex", gap:"1px"}}>
                            <EllipsisIcon wrapperStyle={{background:"#262626", borderTopLeftRadius:"10px", borderBottomLeftRadius:"10px", height:"40px", width:"40px"}}/>
                        </div>
                    </div>
                    <div style={{display:"flex", gap:"5px", background:"#131313", borderRadius:"10px", padding:"5px"}}>
                        <div className="v-control" style={{display:"flex", gap:"1px"}}>
                            <PhoneCallIcon wrapperStyle={{background:"#262626", borderTopLeftRadius:"10px", borderBottomLeftRadius:"10px", height:"40px", width:"40px"}}/>
                        </div>
                    </div>
                </div>
                <div className="controls" style={{display:"flex", alignItems:"center"}}>
                    <div style={{display:"flex", gap:"5px", background:"#131313", borderRadius:"10px", padding:"5px"}}>
                        <div className="v-control" style={{display:"flex", gap:"1px"}}>
                            <ScanIcon wrapperStyle={{background:"#262626", borderTopLeftRadius:"10px", borderBottomLeftRadius:"10px", height:"40px", width:"40px"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VoiceChannel