import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const ChatSidebar = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    const newMessage = {
      text: message,
      sender: 'user',
      timestamp: new Date().toLocaleString(),
    };

    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex flex-col h-screen w-64 bg-transparent">
      <ChatHeader />
      <ChatMessages messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatSidebar;
