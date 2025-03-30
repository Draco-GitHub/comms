import {useState} from "react";
import ServerCard from "./ServerCard.tsx";
import UserArea from "../UserArea.tsx";

import "./server.css"
import Server from "./Server.tsx";
import ResizeArea from "../ResizeArea.tsx";

const ServersViewer= () => {
    const count = 50;

    const userIds = Array.from({ length: count }, (_, index) => `server_${index + 1}`);

    const [currentChannel, setCurrentChannel] = useState<string>(userIds[0]);

    const handleChannel = (userId: string) => {
        setCurrentChannel(userId);
    }

    return (
        <div className="content">
            <div className="left-nav">
                <div className="left-nav-header">
                    <div className="servers-search hoverable">
                        Search up servers
                    </div>
                </div>
                <div className="left-nav-items scroll-area">
                    {userIds.map((userId) => (
                        <ServerCard key={userId} userId={userId} isSelected={currentChannel === userId} openChannel={handleChannel}/>
                    ))}
                </div>
                <UserArea/>
            </div>
            <ResizeArea/>
            <Server currentChannel={currentChannel}/>
        </div>
    );
}

export default ServersViewer;