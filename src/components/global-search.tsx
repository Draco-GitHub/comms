import { useGlobal } from "../globals";
import { Channel } from "../types";
import SearchBar from "./search-bar";
import TextChannel from "./TextChannel";
import VoiceChannel from "./VoiceChannel";


const GlobalSearch = () => {
    const {setContent} = useGlobal();
    return (
        <div className="search-overlay" style={{background: "#212121", borderRadius: "10px", padding: "15px 20px"}}>
            <SearchBar onSearch={(text)=> console.log(text)} style={{height: "35px"}}/>
            <span style={{fontSize:"8pt", fontWeight:"bold"}}>SEARCH OPTIONS</span>
            <div className="options" style={{display:"flex", alignItems:"center", gap:"10px", marginBottom: "10px"}}>
                <div style={{padding:"10px", background:"#101011" , borderRadius: "4px" }}>
                    <span style={{fontSize: "10pt", fontWeight: "10px"}}>Friends</span>
                </div>
                <div style={{padding:"10px", background:"#101011" , borderRadius: "4px" }}>
                    <span style={{fontSize: "10pt", fontWeight: "10px"}}>Groups</span>
                </div>
                <div style={{padding:"10px", background:"#101011" , borderRadius: "4px" }}>
                    <span style={{fontSize: "10pt", fontWeight: "10px"}}>Servers</span>
                </div>
            </div>
            <span style={{fontSize:"8pt", fontWeight:"bold"}}>PREVIOUS CHANNELS</span>
            <div className="history">
                <div className="channel" onClick={()=> {setContent(<TextChannel channel={new Channel("id","name",0)}/>)}} style={{display:"flex", justifyContent:"space-between", marginTop:"10px", background:"#323232", padding:"5px 10px", borderRadius:"4px", width:"400px"}}>
                    <div className="channel-info" style={{display:"flex", alignItems:"center", gap:"10px"}}>
                        <span style={{fontSize:"10pt", fontWeight:"bold"}}>#️ channel</span>
                        <span style={{fontSize:"8pt", fontWeight:"bold", color:"#808080"}}>CATEGORY</span>
                    </div>
                    <div className="server-info">
                        <img src="" alt="" style={{borderRadius:"50%", height:"10px", width:"10px"}}/>
                        <span style={{fontSize:"10pt", fontWeight:"bold", color:"#808080"}}>Server name</span>
                    </div>
                </div>
                <div className="channel" onClick={()=> {setContent(<VoiceChannel channel={new Channel("id","name",0)}/>)}} style={{display:"flex", justifyContent:"space-between", marginTop:"10px", background:"#323232", padding:"5px 10px", borderRadius:"4px", width:"400px"}}>
                    <div className="channel-info" style={{display:"flex", alignItems:"center", gap:"10px"}}>
                        <span style={{fontSize:"10pt", fontWeight:"bold"}}>🔈Gaming 5</span>
                        <span style={{fontSize:"8pt", fontWeight:"bold", color:"#808080"}}>CATEGORY</span>
                    </div>
                    <div className="server-info">
                        <img src="" alt="" style={{borderRadius:"50%", height:"10px", width:"10px"}}/>
                        <span style={{fontSize:"10pt", fontWeight:"bold", color:"#808080"}}>Server name</span>
                    </div>
                </div>
            </div>
            <div className="tip" style={{marginTop:"10px"}}>
                <span style={{fontSize:"8pt", fontWeight:"bold", color:"#00FF26"}}>PROTIP: </span>
                <span style={{fontSize:"8pt"}}> Start searches with @ # ! * to narrow down the results</span>
            </div>
        </div>
    )
}

export default GlobalSearch;