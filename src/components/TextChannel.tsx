import "../styles/text-channel.css"
import ResizeArea from "./ResizeArea"
import { useRef, useState, ChangeEvent } from "react"

const TextChannel = () => {
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
        <div className="communication-view">
            <div className="text-chat-area">
                <div className="text-chat scroll-area">
                </div>
                <div 
                    ref={inputAreaRef}
                    className="text-input-area"
                    style={{ height: 'auto', minHeight: '70px' }}
                >
                    <div 
                        ref={containerRef}
                        className="text-input-container" 
                        onClick={handleContainerClick}
                        style={{ minHeight: '38px', height: 'auto' }}
                    >
                        <textarea 
                            ref={textareaRef}
                            name="channel-text-input"
                            id=""
                            value={text}
                            onChange={handleTextChange}
                            rows={1}
                            placeholder="Type a message..."
                            style={{ 
                                resize: "none",
                                boxSizing: "border-box",
                                width: "100%",
                                overflow: "hidden",
                                display: "block"
                            }}
                        />
                    </div>
                </div>
            </div>
            <ResizeArea/>
            <div className="text-chat-right-nav scroll-area">
            </div>
        </div>
    )
}

export default TextChannel