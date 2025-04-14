import { CSSProperties } from "react";
import Icon from "../../components/Icon";

interface ScanIconProps {
    className?: string;
    wrapperStyle?: CSSProperties,
    svgStyle?: CSSProperties,
    onClick?: () => void;
}

const ScanIcon:React.FC<ScanIconProps> = ({className, wrapperStyle, svgStyle, onClick}) => {
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
            <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
            <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
            <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
            <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
        </svg>
    )
    return (
        <Icon svg={svg} className={className} style={wrapperStyle} onClick={onClick}/>
    )

}

export default ScanIcon;
