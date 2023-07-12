import React from 'react'
import css from '../write/Write.css'

function Write() {
  return (
    <div className='write'>
        <img className='writeImg' src="https://tse1.mm.bing.net/th?id=OIP.6odYxVWLM0kveIaCd8cuLQHaEr&pid=Api&P=0&h=180" alt="image" />
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className=" writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id='fileInpur' style={{display:"none"}} />
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
            </div>
            <div className='writeFormGroup'>
            <textarea type="text" placeholder='Tell your story...' className='writeInput writeText'></textarea>

            </div>
            <button className='writeSubmit'>publish</button>
        </form>
    </div>
  )
}

export default Write