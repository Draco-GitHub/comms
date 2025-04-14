import React, { useEffect, useState, useRef } from "react";
import { Server, ServerChannel, Category } from "../types";
import { useGlobal } from "../globals.tsx";

import "../styles/server.css"
import screenShareIcon from "../assets/Icons/screen-share.svg"


interface ServerChannelCardProps {
  channel: ServerChannel;
  handleChannelChange: (channel: ServerChannel) => void;
  isSelected: boolean;
}

const ServerChannelCard: React.FC<ServerChannelCardProps> = ({
  channel,
  handleChannelChange,
  isSelected
}) => {
  const [clickCount, setClickCount] = React.useState(0);
  
  const joinVoiceChannel = () => {
    console.log(`Joining voice channel: ${channel.display_name}`);
  };
  
  const handleClick = () => {
    if (channel.type === 2) {
      if (clickCount === 0) {
        joinVoiceChannel();
        setClickCount(1);
      } else {
        handleChannelChange(channel);
        setClickCount(0);
      }
    } else {
      handleChannelChange(channel);
    }
  };
  
  return (
    <div 
      className={`channel ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      {channel.display_name}
    </div>
  );
};

function getServerList() {
    return new Server(
        "804012489955475527",
        "Gamers Inn",
        [
            new ServerChannel("1", "General", 0),
            new ServerChannel("2", "Random", 1),
            new ServerChannel("4", "Voice Chat", 2),
            new Category(
                "1111111",
                "Text Channels",
                [
                    new ServerChannel("3", "General", 0)
                ]
            ) 
        ]
    )
}

const ServerSidebar: React.FC = () => {
    const server: Server = getServerList();
    const [currentChannel, setCurrentChannel] = useState<ServerChannel>();
    const [sidebarWidth, setSidebarWidth] = useState<number>(350);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const isDraggingRef = useRef<boolean>(false);
    const { setChannelDisplayed } = useGlobal();

    const handleChannelChange = (channel: ServerChannel) => {
        setCurrentChannel(channel);
        setChannelDisplayed(channel);
    } 

    const renderChannelList = () => {
        return server.channel_list.map((item) => {
            if (item instanceof Category) {
                return (
                    <div key={item.id} className="category">
                        <span>{item.name}</span>
                        <div className="category-channels">
                            {item.channels.map((channel) => (
                                <ServerChannelCard 
                                    key={channel.id}
                                    channel={channel}
                                    handleChannelChange={handleChannelChange}
                                    isSelected={currentChannel?.id === channel.id}
                                />
                            ))}
                        </div>
                    </div>
                );
            } else if (item instanceof ServerChannel) {
                return (
                    <ServerChannelCard 
                        key={item.id}
                        channel={item}
                        handleChannelChange={handleChannelChange}
                        isSelected={currentChannel?.id === item.id}
                    />
                );
            }
            return null;
        });
    };
    
    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        isDraggingRef.current = true;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
        if (!isDraggingRef.current) return;
        const newWidth = e.clientX;
        const minWidth = 250;
        const maxWidth = 350;
        if (newWidth >= minWidth && newWidth <= maxWidth) {
            setSidebarWidth(newWidth);
        }
    };
    
    const handleMouseUp = () => {
        isDraggingRef.current = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };
    
    useEffect(() => {
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);
        
    return (
        <div 
            className="left-nav-container" 
            ref={sidebarRef}
            style={{ width: `${sidebarWidth}px` }}
        >
            <div className="left-nav">
                <div className="left-nav-header">
                    <div className="server-name">
                        {}
                        <span>Server Name</span>
                    </div>
                    <div className="server-dropdown-container">
                        {screenShareIcon}
                    </div>
                </div>
                <div className="left-nav-items scroll-area">
                    <div className="server-channels">
                        {renderChannelList()}
                    </div>
                </div>
            </div>
            <div 
                className="resize-area"
                onMouseDown={handleMouseDown}
                style={{ cursor: 'col-resize' }}
            ></div>
        </div>
    );    
}

export default ServerSidebar;