import React from 'react'
import css from './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sideBarItem">
            <span className="sideBarTitle">ABOUT ME</span>
            <img src="https://tse1.mm.bing.net/th?id=OIP.gRTtLqqwtgKMd26a2AbV7gHaE7&pid=Api&P=0&h=180" alt="about_me" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Beatae, numquam mollitia quam ducimus officia ab alias ipsa itaque</p>
        </div>
        <div className='sideBarItem'>
            <span className='sideBarTitle'>CATEGORIES</span>
            <ul className="sideBarList">
                <li className="sideBarListItem">Life</li>
                <li className="sideBarListItem">Music</li>
                <li className="sideBarListItem">Style</li>
                <li className="sideBarListItem">Sport</li>
                <li className="sideBarListItem">Tech</li>
                <li className="sideBarListItem">Cinema</li>

            </ul>
        </div>
        <div className='sideBarItem'>
            <span className="sideBarTitle">FOLLOW US</span>
            <div className="sideBarSocial">
            <i className=" sideBarIcon fa-brands fa-square-facebook"></i>
            <i className=" sideBarIcon fa-brands fa-square-instagram"></i>
            <i className=" sideBarIcon fa-brands fa-square-twitter"></i>
            <i className=" sideBarIcon fa-brands fa-linkedin"></i>


            </div>
        </div>
    </div>
  )
}

export default Sidebar