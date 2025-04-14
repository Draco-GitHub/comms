import React from "react";
import { ServerChannel } from "../types";
import TextChannel from "./TextChannel";
import { useGlobal } from "../globals.tsx";

const ChannelViewer: React.FC = () => {
  const { channelDisplayed } = useGlobal();
  
  console.log("channel displayed: ", channelDisplayed);
  
  if (channelDisplayed instanceof ServerChannel) {
    console.log("displaying text channel");
    return <TextChannel />;        
  }
  
  return null;
};

export default ChannelViewer;

