import React, { useState } from 'react';
import ChatSidebar from './components/chatsidebar'; 


const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeChange = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`flex h-screen ${isDarkTheme ? 'bg-slate-800' : 'bg-white'}`}>
      <div className={`flex-grow transition-colors duration-300 ${isDarkTheme ? 'bg-slate-800' : 'bg-white'}`}>
        {`example page`}
      </div>
      
      <div className="flex flex-col items-end justify-end p-4">
        <button
          onClick={handleThemeChange}
          className="px-4 py-2 rounded bg-blue-500 text-white"
          
        >
          Toggle Theme
        </button>
      </div>
      <ChatSidebar></ChatSidebar>
    </div>
  );
};

export default App;
