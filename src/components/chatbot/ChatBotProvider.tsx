
import React from 'react';
import ChatBot from './ChatBot';

interface ChatBotProviderProps {
  children: React.ReactNode;
}

const ChatBotProvider: React.FC<ChatBotProviderProps> = ({ children }) => {
  return (
    <>
      {children}
      <ChatBot />
    </>
  );
};

export default ChatBotProvider;
