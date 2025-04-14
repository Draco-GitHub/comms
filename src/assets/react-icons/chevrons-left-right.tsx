import { CSSProperties } from "react";
import Icon from "../../components/Icon";

interface ChevronsLeftRightIconProps {
    className?: string;
    wrapperStyle?: CSSProperties,
    svgStyle?: CSSProperties,
    onClick?: () => void;
}

const ChevronsLeftRightIcon:React.FC<ChevronsLeftRightIconProps> = ({className, wrapperStyle, svgStyle, onClick}) => {
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
            <path d="m9 7-5 5 5 5"/>
            <path d="m15 7 5 5-5 5"/>
        </svg>
    )
    return (
        <Icon svg={svg} className={className} style={wrapperStyle} onClick={onClick}/>
    )

}

export default ChevronsLeftRightIcon;
