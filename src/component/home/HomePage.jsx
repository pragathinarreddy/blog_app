import React from 'react'
import css from './Home.css'
import HeaderOne from '../header/HeaderOne'
import Posts from '../posts/Posts'
import Sidebar from '../sidebar/Sidebar'



function HomePage() {
  return (
    <div>
        <HeaderOne/>
        <div className='home'>
            <Posts/>
            <Sidebar/>
        </div>
       
    </div>
  )
}

export default HomePage