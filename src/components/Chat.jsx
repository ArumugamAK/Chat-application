import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState,useRef } from "react";
// import { AuthContext } from "../context/AuthContext";
import { Link } from 'react-router-dom';
import {Group} from './group'
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import { AuthContext } from '../context/AuthContest'
import { blue, green } from "@material-ui/core/colors";
export const Chat = () => {
  const [chats, setChats] = useState([]);
  const [check,setCheck]=useState(false)
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const ref = useRef();
  // const { onClickExecutedSecond,setOnClickExecutedFirst } = useCommunication();
  // const [chats, setChats] = useState([]);
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);
  const handleSelect = (u) => {
    // if (!onClickExecutedSecond) {
    dispatch({ type: "CHANGE_USER", payload: u });
    // setOnClickExecutedFirst(true);
    // }
  };
  console.log("object"+Object.entries(chats))

  return (
    <div className="chats">

    <Link to ={`/`}>
    <div >
    {Object.entries(chats)?.sort((a,b)=>b[1].date-a[1].date).map((chat) => (
      <div
        className="userChat"
        key={chat[0]}
        onClick={() => handleSelect(chat[1].userInfo)} 
      >
        <img src={chat[1].userInfo.photoURL} alt="" />
        <div className="userChatInfo" >
          <span>{chat[1].userInfo.displayName}</span>
          <p>{chat[1].lastMessage?.text}</p>
        </div>
      </div>
    ))}
    {
      <Group/>
    }
    
  </div>
  </Link>
    </div>)
}
