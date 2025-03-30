import {useState} from "react";
import Server from "./components/Server.tsx";
import UserArea from "./UserArea.tsx";
import "./styles/servers.css"
import Icon from "./components/Icon.tsx";
import {SVGSearch, SVGSettings} from "./assets/Icons";

const Servers= () => {
    const count = 10;

    const userIds = Array.from({ length: count }, (_, index) => `user_${index + 1}`);

    const [currentChannel, setCurrentChannel] = useState<string>(userIds[0]);

    const handleChannel = (userId: string) => {
        setCurrentChannel(userId);
    }

    return (
        <div className="content">
            <div className="left-nav">
                <div className="top-bar">
                    <div className="friends-search hoverable">
                        Search for servers
                    </div>
                </div>
                <div className="servers scroll-container">
                    {userIds.map((userId) => (
                        <Server key={userId} userId={userId} isSelected={currentChannel === userId} openChannel={handleChannel}/>
                    ))}
                </div>
                <UserArea/>
            </div>
            <div className="main-content">
                <div className="top-bar">
                    <div className="channel-current">
                        <Icon src=""/>
                        {currentChannel && <span>{currentChannel}</span>}
                    </div>
                    <div className="top-bar-controls">
                        <SVGSettings className="hoverable"/>
                        <div className="channel-search hoverable">
                            Search
                            <SVGSearch/>
                        </div>
                    </div>
                </div>
                <div className="channel-view">
                    <div className="chat-pane scroll-container">

                    </div>
                    <div className="right-nav scroll-container">

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Servers;