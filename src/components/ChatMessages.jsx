import React from 'react';

const ChatMessages = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`p-2 mb-2 rounded-lg ${
            message.sender === 'user' ? 'bg-blue-200' : 'bg-gray-200'
          }`}
        >
          <p className="text-sm">{message.text}</p>
          <span className="text-xs text-gray-500">{message.timestamp}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
