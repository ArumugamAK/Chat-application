import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import { db1 } from "../firebase";
import { Message1 } from "./Message1";
// import NameContext from './NameContext';
import NameContext from './NameContext';
const Anothermes = () => {
  // const [messages, setMessages] = useState([]);
  const [group, setgroup] = useState([]);
  // const { data } = useContext(ChatContext);
  const {  id } = useContext(NameContext);

//   useEffect(() => {
//     const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
//       doc.exists() && setMessages(doc.data().messages);
//     });

//     return () => {
//       unSub();
//     };
//   }, [data.chatId]);
  useEffect(()=>{
    if(id){
      console.log("ID    "+id)
        db1.collection("rooms")
        .doc(id).collection('messages')
        .orderBy('timestamp','asc')
        .onSnapshot(snapshot=>setgroup(snapshot.docs.map((doc)=>doc.data())));
    }
},[id])


  console.log("group  "+group)

  return (
    <div className="messages">
      {group.map((m) => (
        <Message1 message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Anothermes;