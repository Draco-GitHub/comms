import { useRef, useState, ChangeEvent } from "react"
import { Channel } from "../types";
import SearchBar from "./search-bar";
import AudioLinesIcon from "../assets/react-icons/audio-lines";
import PinIcon from "../assets/react-icons/pin";
import ScreenShareIcon from "../assets/react-icons/screen-share";
import VideoIcon from "../assets/react-icons/video";
import MicIcon from "../assets/react-icons/mic";
import HeadphonesIcon from "../assets/react-icons/headphones";
import PhoneOffIcon from "../assets/react-icons/phone-off";


interface TextChannelProps {
    channel: Channel
}

const TextChannel:React.FC<TextChannelProps> = ({channel}) => {
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
        <div className="text-chat-area" style={{display: "flex", flex: 1, flexDirection:"column"}}>
            <div className="" style={{display:"flex", justifyContent:"end", }}>
                <div style={{display:"flex", alignItems:"center", padding:"10px", gap:"10px"}}>
                    <PinIcon/>
                    <SearchBar onSearch={(text)=> console.log(text)} style={{height: "35px", width:"250px", border: "1px solid #4A4A4A"}}/>
                </div>
            </div>
            <div className="text-chat scroll-area" style={{flex: 1}}>
            </div>
            <div ref={inputAreaRef} className="text-input-area" style={{ display:"flex", alignItems:"center", height: 'auto', minHeight: '70px', padding:"10px" }}>
                <div style={{padding:"10px", background:"#262626", borderRadius:"4px", marginLeft:"10px"}}>
                    <div className="status" style={{display:"flex", gap:"5px"}}>
                        <AudioLinesIcon svgStyle={{stroke:"green"}}/>
                        <span style={{fontSize:"12pt", color:"green"}}>Voice Connected</span>
                    </div>
                    <div>
                    <div className="channel-connected" style={{display:"flex"}}>
                        <span style={{fontSize:"8pt", }}>Voice Channel / Server Name</span>
                    </div>
                        <div className="controls" style={{display:"flex", justifyContent:"space-evenly"}}>
                            <ScreenShareIcon/>
                            <VideoIcon/>
                            <MicIcon/>
                            <HeadphonesIcon/>
                            <PhoneOffIcon/>
                        </div>
                    </div>
                </div>
                <div ref={containerRef} className="text-input-container"  onClick={handleContainerClick} style={{ display:"flex", flex:1, alignItems:"center", background:"#262626", borderRadius:"4px", paddingInline:"10px", minHeight: '38px', height: 'auto', marginLeft:"10px" }}>
                    <textarea 
                        ref={textareaRef}
                        name="channel-text-input"
                        className="scroll-area"
                        value={text}
                        onChange={handleTextChange}
                        rows={1}
                        placeholder="Type a message..."
                    />
                </div>
            </div>
        </div>
    )
}

export default TextChannel