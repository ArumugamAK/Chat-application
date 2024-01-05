import React, { useContext, useEffect, useRef } from "react";
// import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from '../context/AuthContest';
import NameContext from "./NameContext";
export const Message1 = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  // const { data } = useContext(ChatContext);
  // const { name, id } = useContext(NameContext);
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.name === currentUser.displayName && "owner"}`}
      // className="message"
    >
      <div className="messageInfo">
        <span>{message.name}</span>
        <span>just now</span>
      </div>
      <div className="messageContent">
        {message.message && <p>{message.message}</p>}
        {/* {message.message} */}
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};


