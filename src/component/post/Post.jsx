import React from 'react'
import css from './Post.css'
import { Link } from 'react-router-dom'


function Post() {
  return (
    <div className='post'>
        <img className='post' src="https://tse1.mm.bing.net/th?id=OIP.6odYxVWLM0kveIaCd8cuLQHaEr&pid=Api&P=0&h=180" alt="post_img" />
        <div className="postInfo">
            <div className="postCats">
                <span className='postCat'>Music</span>
                <span className='postCat'>Life</span>
            </div>
            <span className='postTitle'>
              <Link className='link' to = '/singlepost'></Link>lorem ipsum dolor sit amet</span>
            <hr />
            <span className='postDate'>1 hour ago</span>

        </div>
        <p className='postDesc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi blanditiis quo molestias hic cumque, labore rerum voluptatum laboriosam iure aperiam amet reiciendis dolore tempora corporis asperiores tempore quas facere at!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae dolores fugit voluptas temporibus? Asperiores veniam consequatur architecto, corporis reprehenderit beatae laborum reiciendis quos tempore quas harum, fuga sapiente, voluptatibus dolore.</p>


    </div>
  )
}

export default Post