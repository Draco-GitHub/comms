import { CSSProperties } from "react";
import Icon from "../../components/Icon";

interface SquareIconProps {
    className?: string;
    wrapperStyle?: CSSProperties,
    svgStyle?: CSSProperties,
    onClick?: () => void;
}

const SquareIcon:React.FC<SquareIconProps> = ({className, wrapperStyle, svgStyle, onClick}) => {
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
            <rect x="3" y="3" width="18" height="18"/>
        </svg>
    )
    return (
        <Icon svg={svg} className={className} style={wrapperStyle} onClick={onClick}/>
    )

}

export default SquareIcon;
