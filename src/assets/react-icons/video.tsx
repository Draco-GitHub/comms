import { CSSProperties } from "react";
import Icon from "../../components/Icon";

interface VideoIconProps {
    className?: string;
    wrapperStyle?: CSSProperties,
    svgStyle?: CSSProperties,
    onClick?: () => void;
}

const VideoIcon:React.FC<VideoIconProps> = ({className, wrapperStyle, svgStyle, onClick}) => {
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
            <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/>
            <rect x="2" y="6" width="14" height="12"/>
        </svg>
    )
    return (
        <Icon svg={svg} className={className} style={wrapperStyle} onClick={onClick}/>
    )

}

export default VideoIcon;
