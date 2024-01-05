import React from 'react'
import Navbar from './Navbar'
import Search from './Search'

import { Chat } from './Chat'

export const Sidebar = () => {
  return (
    <div className='sidebar' >
      <div className="scroll-flow">
        <Navbar/>
        <Search/>
      </div>
        <Chat/>
    </div>
  )
}
