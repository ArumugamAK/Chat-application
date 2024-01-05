import { createContext, useState } from 'react';

const NameContext = createContext();

export const NameProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  return (
    <NameContext.Provider value={{ name, setName, id, setId }}>
      {children}
    </NameContext.Provider>
  );
};
export default NameContext;