import React from 'react'
import css from '../settings/Settings.css'
import Sidebar from '../../component/sidebar/Sidebar'

function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form  className='settingsForm'>
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.6odYxVWLM0kveIaCd8cuLQHaEr&pid=Api&P=0&h=180" alt="settings_img" />
                    <label htmlFor="fileInput">
                    <i className=" settingsPPIcon fa-solid fa-user"></i>
                    <input type="file"  id="fileInput" style={{display:"none"}} />
                    </label>
                </div>
                    <label >Username</label>
                    <input type="text" placeholder='Narreddy Pragathi' />
                    <label >Email</label>
                    <input type="email" placeholder='Narreddy Pragathi' />
                    <label>password</label>
                    <input type="password"/>
                    <button className='settingsButton'>Update</button>
            </form>
        </div>
        <Sidebar/>

    </div>
  )
}

export default Settings