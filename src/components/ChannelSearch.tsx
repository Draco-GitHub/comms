import { ChangeEvent, useRef, useState } from "react";
import "../styles/channel-search.css"
import React from "react";

import screenShareIcon from "../assets/Icons/screen-share.svg"

interface ChannelSearchProps {
    setOverlay: (node: React.ReactNode) => void;
    isOverlayOpen: boolean;
}

const ChannelSearch: React.FC<ChannelSearchProps> = ({ setOverlay }) => {
    const textareaRef = useRef<HTMLInputElement>(null);
    const [text, setText] = useState<string>("");
    
    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newText = e.target.value;
        setText(newText);
    };

    const searchOptions = [
        {option: "from", type: "user"},
        {option: "mentions", type: "user"},
        {option: "has", type: "link, embed or file"},
        {option: "before", type: "specific date"},
        {option: "during", type: "specific date"},
        {option: "after", type: "specific date"},
        {option: "pinned", type: "true or false"},
    ]

    const searchHistory = [
        {option: "before", history: "user_1"},
    ]
    
    const showSearchOverlay = () => {
        setOverlay(
            <React.Fragment>
                <div className="overlay-channel-search">
                    <input 
                        type="text"
                        ref={textareaRef}
                        name="channel-search-input"
                        value={text}
                        onChange={handleTextChange}
                        placeholder="Search"
                        autoFocus
                    />
                    {screenShareIcon}
                </div>
                <div className="search-options">
                    <div className="search-options-title">
                        <span>Search Options</span>
                    </div>

                    {searchOptions.map((item, index) => (
                        <div className="search-option-row" key={index}>
                            <div className="search-option">
                                <span className="option" style={{fontWeight:"bold"}}>{item.option}: </span>
                                <span className="type" style={{color: "#b1b1b1"}}>{item.type}</span>
                            </div>
                        </div>
                    ))}

                    <br />

                    <div className="search-options-title">
                        <span>History</span>
                    </div>

                    {searchHistory.map((item, index) => (
                        <div className="search-option-row" key={index}>
                            <div className="search-option">
                                <span className="option">{item.option}: </span>
                                <span className="type">{item.history}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        );
    };
        
    return (
        <div className="channel-search hoverable" onClick={showSearchOverlay}>
            <div className="channel-search-text">
                {text === "" ? "Search" : text}
            </div>
            {screenShareIcon}
        </div>
    );
};

export default ChannelSearch;