import React, { useContext, useEffect, useRef } from "react";
// import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from '../context/AuthContest';

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
      // className="message"
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        {message.text && <p>{message.text}</p>}
        {/* {message.message} */}
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
