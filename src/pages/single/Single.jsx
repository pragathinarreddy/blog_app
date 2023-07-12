import React from 'react'
import  css from '../single/Single.css'
import Post from '../../component/post/Post'
import Sidebar from '../../component/sidebar/Sidebar'
import SinglePost from '../../component/singlePost/SinglePost'

function Single() {
  return (
    <div className='single'>
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}

export default Single