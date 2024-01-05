import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContest';
import { ChatContextProvider } from './context/ChatContext';
import { NameProvider } from './components/NameContext';
// import { CommunicationProvider } from './components/communication';
// import { ChatContextProvider } from './context/ChatContext';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    {/* <ChatContext.Provider> */}
    <ChatContextProvider>

      <React.StrictMode>
      <NameProvider> {/* Wrap your App with the NameProvider */}
      <App />
    </NameProvider>
    
        </React.StrictMode>
    </ChatContextProvider>
    {/* </ChatContext.Provider> */}
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
