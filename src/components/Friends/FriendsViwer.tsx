import {useState} from "react";
import FriendCard from "./FriendCard.tsx";
import UserArea from "../UserArea.tsx";

import Server from "./Friend.tsx";
import "./friend.css"

const ServerViewer= () => {
    const count = 50;

    const userIds = Array.from({ length: count }, (_, index) => `user_${index + 1}`);

    const [currentChannel, setCurrentChannel] = useState<string>(userIds[0]);

    const handleChannel = (userId: string) => {
        setCurrentChannel(userId);
    }

    return (
        <div className="content">
            <div className="left-nav">
                <div className="left-nav-header">
                    <div className="servers-search hoverable">
                        Search for servers
                    </div>
                </div>
                <div className="left-nav-items scroll-area">
                    {userIds.map((userId) => (
                        <FriendCard key={userId} userId={userId} isSelected={currentChannel === userId} openChannel={handleChannel}/>
                    ))}
                </div>
                <UserArea/>
            </div>
            <Server currentChannel={currentChannel}/>
        </div>
    );
}

export default ServerViewer;