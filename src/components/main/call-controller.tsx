import MicIcon from "../../assets/icons/mic.tsx";
import HeadphonesIcon from "../../assets/icons/headphones.tsx";
import VideoIcon from "../../assets/icons/video.tsx";
import ScreenShareIcon from "../../assets/icons/screen-share.tsx";
import PhoneOffIcon from "../../assets/icons/phone-off.tsx";
import AudioLinesIcon from "../../assets/icons/audio-lines.tsx";

const CallController: React.FC = () => {
    return (
        <div className="call-controller">
            <div className="call-info">
                <div className="connection-status">
                    <AudioLinesIcon svgStyle={{stroke:"green"}}/>
                    <span style={{fontSize:"16px", color:"green"}}>Voice Connected</span>
                </div>
                <span className="channel-info">
                        Voice Channel / Server Nameaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </span>
            </div>
            <div className="call-controls">
                <MicIcon/>
                <HeadphonesIcon/>
                <VideoIcon/>
                <ScreenShareIcon/>
                <PhoneOffIcon wrapperStyle={{background:"#ff4242"}}/>
            </div>
        </div>
    )
}

export default CallController;