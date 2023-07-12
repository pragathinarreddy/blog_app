import React from 'react'
import css from './Topbar.css'
import { Link } from 'react-router-dom'


function Topbar() {
    const user = false
    return (
            <div className='top'> 
            <div className='topBarLeft'>
            <i className=" topIcon fa-brands fa-square-facebook"></i>
            <i className=" topIcon fa-brands fa-square-instagram"></i>
            <i className=" topIcon fa-brands fa-square-twitter"></i>
            <i className=" topIcon fa-brands fa-linkedin"></i>
            </div>
            <div className='topBarCentre'>
                <div className="topCentre">
                  <Link className='link' to="/">HOME</Link>  
                 </div>
                <div className="topCentre">
                    <Link className='link' to = '/'>ABOUT</Link>
               </div>
                <div className="topCentre">
                <Link className='link' to = '/'>CONTACT</Link>
                </div>
                <div className="topCentre">
                <Link className='link' to = '/write'>WRITE</Link> 
                </div>
                <div className="topCentre">
                <Link className='link' to = '/write'>{user && "LOGOUT"}</Link> 
                </div>
            </div>
            <div className='topBarRight'>
                {
                    user ? 
                    <img className='topProfileImg' src="https://tse3.mm.bing.net/th?id=OIP.QVMM2UDR8RNepSaTM1a8fQHaIa&pid=Api&P=0&h=180" alt="smily_img" />
                    :
                    <>
                    <li className='log'><Link className='link ' to="/login">LOGIN</Link> </li>
                    
                    <Link className='link' to="/register">REGISTER</Link>  

                   

                    </>
 


                }
                <i className=" searchIcon fa-solid fa-magnifying-glass"></i>
            </div>

            </div>
            
       



    
  )
}

export default Topbar