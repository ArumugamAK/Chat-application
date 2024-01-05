import React from 'react'
import { Sidebar } from '../components/Sidebar'
import Anothercom from '../components/Anothercom';
// import { Chat } from '../components/Chat'
// import {Mainchat} from '../components/Mainchat'
// import A from '../components/Mainhat';
// import Mainhat from '../components/Mainhat';
// import { Chats } from '../components/Chats'
export const Home2 = () => {
  return (
    <div className="home">
        <div className="container">
            <Sidebar/>
            <Anothercom/>
        </div>
    </div>
  )
}
