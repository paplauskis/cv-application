import { useState } from 'react'
import './App.css'

export function PersonalInfo() {
  const [showMore, setShowMore] = useState('true')
  function handleShowClick() {
    setShowMore(!showMore)
  }
  return (
    <div className="personal-info">
      <h2>Personal Info</h2>
      {showMore && <div className="labels-inputs">
      <div className="input-div">
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id='firstName' name='first_name'/>
      </div>
      <div className="input-div">
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id='lastName' name='last_name'/>
      </div>
      <div className="input-div">
        <label htmlFor="title">Title:</label>
        <input type="text" id='title' name='title'/>
      </div>
      <div className="input-div">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id='phoneNumber' name='phone_number'/>
      </div>
      <div className="input-div">
        <label htmlFor="email">Email:</label>
        <input type="email" id='email' name='email'/>
      </div>
      <div className="input-div">
        <label htmlFor="about">About:</label>
        <textarea name="about" id="about" cols="30" rows="10"></textarea>
      </div>
      <button type='submit' className='submit-button submit-personal-info'>Submit</button>
      </div>}
      <button className='show-hide-button' onClick={handleShowClick}>{showMore ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export function Container() {
  return (
    <>
      <div id="forms">
        <PersonalInfo />
      </div>
      <div id="cv-preview">
        <div id="cv-header"></div>
      </div>
    </>
  )
}
