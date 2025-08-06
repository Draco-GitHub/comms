import { ChangeEvent, CSSProperties, useRef, useState } from "react";
import SearchIcon from "../../assets/icons/search.tsx";


interface TextProps {
    text:string
}

const Text:React.FC<TextProps> = ({text}) => {
    const formatPatterns: Record<string, JSX.Element> = {
        "" : <span></span>,
        "" : <span></span>,
        "" : <span></span>,
        "" : <span></span>,
        "" : <span></span>
      };
    
    
    return (
        <div>
            <span></span>
        </div>
    )
}

interface SearchBarProps {
    onSearch: (searchText: string) => void;
    style?: CSSProperties;
}
  
const SearchBar = ({ onSearch, style }: SearchBarProps) => {
    const [text, setText] = useState<string>("");
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null)
    
    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newText = e.target.value;
        console.log(newText)
        setText(newText);
        onSearch(newText);
    };

    const focusInput = () => {
        inputRef.current?.focus()
    }

    const defaultStyle:CSSProperties = {
        display: "flex",
        alignItems: "center",
        background: "#1B1B1B",
        border: "1px solid #4A4A4A",
        flexShrink: 0,
        borderRadius: "4px",
        padding:"5px 10px",
        boxShadow: isFocused? "0 0 5px 2px #000000" : "none"
    }

    const mergedStyle = { ...defaultStyle, ...style };

    return (
        <div className="search-bar" style={mergedStyle} onClick={focusInput}>
            <div style={{display: "flex", flex:1}}>
                <input
                    type="text"
                    value={text}
                    ref= {inputRef}
                    onChange={handleTextChange}
                    onFocus={()=>setIsFocused(true)}
                    onBlur={()=>setIsFocused(false)}
                    autoComplete="off"
                />
                <Text text={text}/>
            </div>
            <SearchIcon onClick={() => onSearch(text)}/>
        </div>
    );
}
  
export default SearchBar;