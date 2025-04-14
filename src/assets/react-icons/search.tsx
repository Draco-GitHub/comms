import { CSSProperties } from "react";
import Icon from "../../components/Icon";

interface SearchIconProps {
    className?: string;
    wrapperStyle?: CSSProperties,
    svgStyle?: CSSProperties,
    onClick?: () => void;
}

const SearchIcon:React.FC<SearchIconProps> = ({className, wrapperStyle, svgStyle, onClick}) => {
    const defaultSvgStyle: CSSProperties = {
        width: "17px",
        height: "17px",
        maxWidth: '100%',
        maxHeight: '100%',
        fill: "none",
        stroke: "#FFFFFF",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    };
    const mergedSvgStyle = {...defaultSvgStyle, ...svgStyle }
    const svg = (
        <svg style={mergedSvgStyle} viewBox="0 0 24 24" >
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
        </svg>
    )
    return (
        <Icon svg={svg} className={className} style={wrapperStyle} onClick={onClick}/>
    )

}

export default SearchIcon;
