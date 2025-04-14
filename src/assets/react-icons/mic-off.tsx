import { CSSProperties } from "react";
import Icon from "../../components/Icon";

interface MicOffIconProps {
    className?: string;
    wrapperStyle?: CSSProperties,
    svgStyle?: CSSProperties,
    onClick?: () => void;
}

const MicOffIcon:React.FC<MicOffIconProps> = ({className, wrapperStyle, svgStyle, onClick}) => {
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
            <line x1="2" y1="2" x2="22" y2="22"/>
            <path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"/>
            <path d="M5 10v2a7 7 0 0 0 12 5"/>
            <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"/>
            <path d="M9 9v3a3 3 0 0 0 5.12 2.12"/>
            <line x1="12" y1="19" x2="12" y2="22"/>
        </svg>
    )
    return (
        <Icon svg={svg} className={className} style={wrapperStyle} onClick={onClick}/>
    )

}

export default MicOffIcon;
