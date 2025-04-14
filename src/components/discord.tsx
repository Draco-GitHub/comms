import { useEffect } from "react";
import { useGlobal } from "../globals.tsx";
import GlobalSearch from "./global-search.tsx";

const Discord = () => {

    const { setContent } = useGlobal();
    
    useEffect(() => {
    }, []);

    

    return (
        <div style={{display: "flex", flex:1, justifyContent:"center", alignItems:"center"}}>
            <GlobalSearch/>
        </div>
    )
}

export default Discord;