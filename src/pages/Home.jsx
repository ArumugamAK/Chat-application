import React from 'react'
import { Sidebar } from '../components/Sidebar'
// import { Chat } from '../components/Chat'
// import {Mainchat} from '../components/Mainchat'
// import A from '../components/Mainhat';
import Mainhat from '../components/Mainhat';
// import { Chats } from '../components/Chats'

export const Home = () => {
  return (
    <div className="home">
        <div className="container">
            <Sidebar/>
            <Mainhat/>

        </div>
    </div>
  )
}
