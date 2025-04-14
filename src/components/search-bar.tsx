import { ChangeEvent, CSSProperties, useState } from "react";
import searchIcon from "../assets/Icons/search.svg"
import Icon from "./Icon";

interface SearchBarProps {
    onSearch: (searchText: string) => void;
    style?: CSSProperties;
}
  
const SearchBar = ({ onSearch, style }: SearchBarProps) => {
    const [text, setText] = useState<string>("");
    const [isFocused, setIsFocused] = useState<boolean>(false);
    
    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newText = e.target.value;
        setText(newText);
        onSearch(newText);
    };

    const defaultStyle:CSSProperties = {
        display: "flex",
        alignItems: "center",
        background: "#1B1B1B",
        border: "1px solid #4A4A4A",
        borderRadius: "4px",
        padding:"5px 10px",
        boxShadow: isFocused? "0 0 5px 2px #FFFFFF" : "none"
    }

    const mergedStyle = { ...defaultStyle, ...style };

    return (
        <div className="search-bar" style={mergedStyle}>
            <input
                type="text"
                name="channel-search-input"
                value={text}
                onChange={handleTextChange}
                placeholder="Search"
                onFocus={()=>setIsFocused(true)}
                onBlur={()=>setIsFocused(false)}
            />
            <Icon src={searchIcon} onClick={() => {onSearch(text);}}/>
        </div>
    );
}
  
export default SearchBar;