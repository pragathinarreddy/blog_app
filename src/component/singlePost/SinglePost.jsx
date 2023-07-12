import React from 'react'
import css from '../singlePost/SinglePost.css'

function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src="https://tse1.mm.bing.net/th?id=OIP.6odYxVWLM0kveIaCd8cuLQHaEr&pid=Api&P=0&h=180" alt="single_post_img" className="singlePostImg" />
        <h1 className='singlePostTitle'>
            Lorem ipsum dolor sit amet
            <div className="singlePostEdit">
            <i className=" singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className=" singlePostIcon fa-solid fa-trash-can"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className='singlePostAuthor'>Author : <b>Narreddy Pragathi</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className='singlePostDes'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut laudantium, numquam quam eius illo necessitatibus voluptate. Natus debitis obcaecati fugiat veniam quod tenetur vel quis aspernatur, sint odio eum minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloribus consequuntur ratione voluptate delectus asperiores pariatur exercitationem hic veniam minima. Commodi sequi itaque vitae nulla dolore! Excepturi fugiat atque dicta. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio vero eaque sit iste. Minus alias possimus ea iusto incidunt quis aperiam dolor deserunt cumque officia dolore quo, suscipit quaerat quidem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius rem pariatur molestias consequatur, ad quam qui necessitatibus beatae sed earum eum cumque alias fuga id praesentium, possimus, quibusdam quis est!</p>
      </div>
    </div>
  )
}

export default SinglePost