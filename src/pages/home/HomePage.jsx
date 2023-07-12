import React from 'react'
import css from './Home.css'
import HeaderOne from '../header/HeaderOne'
import Sidebar from '../sidebar/Sidebar'
import Posts from '../../posts/Posts'

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