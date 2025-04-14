import React, { createContext, useState, useContext } from 'react';
import { Channel } from './types';

interface GlobalContextType {
  content: React.ReactNode,
  setContent: (content: React.ReactNode) => void;
  voiceChannel: Channel | null;
  setVoiceChannel: (channel: Channel | null) => void;
  channelDisplayed: Channel | null;
  setChannelDisplayed: (channel: Channel | null) => void;
  overlay: React.ReactNode;
  setOverlay: (node: React.ReactNode) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<React.ReactNode>(null);
  const [voiceChannel, setVoiceChannel] = useState<Channel | null>(null);
  const [channelDisplayed, setChannelDisplayed] = useState<Channel | null>(null);
  const [overlay, setOverlay] = useState<React.ReactNode>(null);

  return (
    <GlobalContext.Provider
      value={{
        content,
        setContent,
        voiceChannel,
        setVoiceChannel,
        channelDisplayed,
        setChannelDisplayed,
        overlay,
        setOverlay
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobal must be used within a GlobalProvider');
  }
  return context;
};