import "../../../styles/global-search.css"
import {ReactNode} from "react";
import SearchBar from "../../ui/search-bar.tsx";
import ButtonSelector from "../../ui/buttons/button-selector.tsx";
import DiscordIcon from "../../../assets/icons/discord.tsx";
import WhatsappIcon from "../../../assets/icons/whatsapp.tsx";
import MessengerIcon from "../../../assets/icons/messenger.tsx";
import GlobeIcon from "../../../assets/icons/globe.tsx";
import ContactIcon from "../../../assets/icons/contact.tsx";
import GroupsIcon from "../../../assets/icons/groups.tsx";
import ServerIcon from "../../../assets/icons/server.tsx";
import TelegramIcon from "../../../assets/icons/telegram.tsx";
import SignalIcon from "../../../assets/icons/signal.tsx";
import {Channel, Contact, Group} from "../../../types.ts";
import ChannelCard from "../../ui/cards/channel-card.tsx";

interface IconOption {
    id: string;
    icon: ReactNode;
    name: string;
}

const GlobalSearch = () => {

    const platforms: IconOption[] = [
        { id: 'global', icon: <GlobeIcon/>, name: 'Global' },
        { id: 'discord', icon: <DiscordIcon/>, name: 'Discord' },
        { id: 'whatsapp', icon: <WhatsappIcon/>, name: 'Whatsapp' },
        { id: 'messenger', icon: <MessengerIcon/>, name: 'Messenger' },
        { id: 'telegram', icon: <TelegramIcon/>, name: 'Telegram' },
        { id: 'signal', icon: <SignalIcon/>, name: 'Signal' },
    ];

    const locations: IconOption[] = [
        { id: 'global', icon: <GlobeIcon/>, name: 'Global' },
        { id: 'friends', icon: <ContactIcon/>, name: 'Friends' },
        { id: 'groups', icon: <GroupsIcon/>, name: 'Groups' },
        { id: 'servers', icon: <ServerIcon/>, name: 'Servers' },
    ];
    const mockContacts: Channel[] = [
        new Contact("Cheshire", "url1", "discord", "online"),
        new Contact("AcridG", "url1", "discord", "online"),
        new Contact("evn", "url1", "discord", "away"),
        new Contact("Ninkey", "url1", "discord", "online"),
        new Contact("Otto", "url1", "discord", "online"),
        new Group("GROUP", "url1", "discord", []),
    ]


    return (
        <div className="global-search">
            <div className="search-section">
                <ButtonSelector options={platforms} style={{height:'40px'}}/>
                <ButtonSelector options={locations} style={{height:'40px'}}/>
                <SearchBar onSearch={(text)=> console.log(text)} style={{height: "40px", width: "400px"}}/>
            </div>
            <div className="list-container scroll-area">
                {mockContacts.map((item, index) => (
                    <ChannelCard
                        key={index}
                        channel={item}
                        tabIndex={index}
                        style={{padding: "10px"}}
                    />
                ))}
            </div>
        </div>
    )
}

export default GlobalSearch;