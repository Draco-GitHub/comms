import {useState} from "react";
import FriendCard from "./FriendCard.tsx";
import UserArea from "../UserArea.tsx";

import "./friend.css"
import ResizeArea from "../ResizeArea.tsx";
import Friend from "./Friend.tsx";

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
                    <div className="friends-search hoverable">
                        Search up friends
                    </div>
                </div>
                <div className="left-nav-items scroll-area">
                    {userIds.map((userId) => (
                        <FriendCard key={userId} userId={userId} isSelected={currentChannel === userId} openChannel={handleChannel}/>
                    ))}
                </div>
                <UserArea/>
            </div>
            <ResizeArea/>
            <Friend currentChannel={currentChannel}/>
        </div>
    );
}

export default ServerViewer;