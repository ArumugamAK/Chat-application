import {
    createContext,
    useContext,
    useReducer,
  } from "react";

  import { AuthContext } from '../context/AuthContest'
  
  export const ChatContext = createContext();
  export const ChatContextProvider = ({ children }) => {
      const { currentUser } = useContext(AuthContext);
    const INITIAL_STATE = {
      chatId: "null",
      user: {},
    };
  
    const chatReducer = (state, action) => {
      switch (action.type) {
        case "CHANGE_USER":
          return {
            user: action.payload,
            chatId:
              currentUser.uid > action.payload.uid
                ? currentUser.uid + action.payload.uid
                : action.payload.uid + currentUser.uid,
          };
          // case "group":
          //   return {
          //     ...state, // Copy the existing state
          //     user1: action.payload,
          //     chatId1: action.payload.id, // Assuming the id property exists in the action payload
          //   };

  
        default:
          return state;
      }
    };
  
    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
  
    return (
      <ChatContext.Provider value={{ data:state, dispatch }}>
        {children}
      </ChatContext.Provider>
    );
  };