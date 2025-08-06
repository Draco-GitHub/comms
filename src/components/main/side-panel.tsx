import "../../styles/side-panel.css"
import {useGlobal} from "../../globals.tsx";
import React from "react";
import GlobalSearch from "./pages/global-search.tsx";
import Avatar from "../ui/avatar.tsx";
import BellIcon from "../../assets/icons/bell.tsx";
import SettingsIcon from "../../assets/icons/settings.tsx";
import HistoryIcon from "../../assets/icons/history.tsx";
import HomeIcon from "../../assets/icons/home.tsx";
import SidePanelLeftIcon from "../../assets/icons/side-panel-left.tsx";
import ChannelCard from "../ui/cards/channel-card.tsx";
import {Channel, Contact, Group} from "../../types.ts";

interface SidebarOptionProps {
    icon: React.ReactNode;
    text: string;
    onClick: () => void;
}

const SidebarOption: React.FC<SidebarOptionProps> = ({icon, text, onClick}) => {
    return (
        <div className="side-bar-option" onClick={onClick} tabIndex={0}>
            {icon}
            <span>{text}</span>
        </div>
    )
}


interface SidePanelProps {
    setIsShown: () => void;
}
const SidePanel:React.FC<SidePanelProps> = ({setIsShown}) => {

    const {setContent} = useGlobal()

    const mockContacts: Channel[] = [
        new Contact("Cheshire", "url1", "discord", "online"),
        new Contact("AcridG", "url1", "discord", "online"),
        new Contact("evn", "url1", "discord", "away"),
        new Contact("Ninkey", "url1", "discord", "online"),
        new Contact("Otto", "url1", "discord", "online"),
    ]


    return (
        <div className="side-bar">
            <div className="side-bar-top">
                <div className="side-bar-header">
                    <div className="logo">

                    </div>
                    <div className="icon-holder">
                        <SidePanelLeftIcon svgStyle={{width:"22px", height:"22px"}} onClick={setIsShown}/>
                    </div>
                </div>
                <div className="category">
                    <SidebarOption
                        icon={<HomeIcon svgStyle={{width:"22px", height:"22px"}}/>}
                        text={"Home"}
                        onClick={() => {setContent(<GlobalSearch/>)}}
                    />
                    <SidebarOption
                        icon={<HistoryIcon svgStyle={{width:"22px", height:"22px"}}/>}
                        text={"History"}
                        onClick={() => {setContent(<GlobalSearch/>)}}
                    />
                    <SidebarOption
                        icon={<BellIcon svgStyle={{width:"22px", height:"22px"}}/>}
                        text={"Notifications"}
                        onClick={() => {setContent(<GlobalSearch/>)}}
                    />
                </div>
                <div className="category">
                    <span style={{fontSize: 14, fontWeight: "bold"}}>Recently Accessed</span>
                    {mockContacts.map((item, index) => (
                        <ChannelCard
                            key={index}
                            channel={item}
                            tabIndex={index}
                            avatarSize={30}
                        />
                    ))}
                </div>
            </div>
            <div className="side-bar-bottom">
                <div className="category">
                    <SidebarOption
                        icon={<SettingsIcon svgStyle={{width:"22px", height:"22px"}}/>}
                        text={"Settings"}
                        onClick={() => {setContent(<GlobalSearch/>)}}
                    />
                </div>
            </div>
        </div>
    )
}

export default SidePanel;