import { SVGSearch } from "../assets/Icons";
import "../styles/channel-search.css"

interface ChannelSearchProps {
    onClick: () => void;
}

const ChannelSearch: React.FC<ChannelSearchProps> = ({onClick}) => {

    return (
        <div className="channel-search hoverable" onClick={onClick}>
            Search
            <SVGSearch/>
        </div>
    )

}

export default ChannelSearch;