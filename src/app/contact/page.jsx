import React from 'react'

const Contact = () => {
  return (
    <div className='container contact'>
        <h2 className='contact__title'>Account</h2>
        <div className="contact__inputs">
          <input type="text" placeholder='Name'/>
          <input type="text" placeholder='LastName'/>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
          <input type="password" placeholder='Confirm password'/>
          <button>Save</button>
        </div>

    </div>
  )
}

export default Contact