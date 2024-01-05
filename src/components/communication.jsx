import { createContext, useContext, useState } from 'react';

const ComponentCommunicationContext = createContext();

export const useCommunication = () => useContext(ComponentCommunicationContext);

export const CommunicationProvider = ({ children }) => {
  const [onClickExecutedFirst, setOnClickExecutedFirst] = useState(false);
  const [onClickExecutedSecond, setOnClickExecutedSecond] = useState(false);

  return (
    <ComponentCommunicationContext.Provider
      value={{ onClickExecutedFirst, setOnClickExecutedFirst, onClickExecutedSecond, setOnClickExecutedSecond }}
    >
      {children}
    </ComponentCommunicationContext.Provider>
  );
};