import { useState } from 'react'
import './App.css'

export function PersonalInfo() {
  const [showMore, setShowMore] = useState('true')
  function handleShowClick() {
    setShowMore(!showMore)
  }
  return (
    <div className="personal-info info-inputs">
      <h2>Personal Info</h2>
      {showMore && <div className="labels-inputs">
        <input type="text" id='firstName' name='first_name' placeholder='First Name'/>
        <input type="text" id='lastName' name='last_name' placeholder='Last Name'/>
        <input type="text" id='title' name='title' placeholder='Title'/>
        <input type="tel" id='phoneNumber' name='phone_number' placeholder='Phone Number'/>
        <input type="email" id='email' name='email' placeholder='Email'/>
        <textarea name="about" id="about" cols="30" rows="10" placeholder='About'></textarea>
      <button type='submit' className='submit-button submit-personal-info'>Submit</button>
      </div>}
      <button className='show-hide-button' onClick={handleShowClick}>{showMore ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export function EducationInfo() {
  const [showMore, setShowMore] = useState('false')
  function handleShowClick() {
    setShowMore(!showMore)
  }
  return (
    <div className="education-info info-inputs">
      <h2>Education Info</h2>
      {showMore && <div className="labels-inputs">
        <input type="text" id='schoolName' name='school_name' placeholder='School Name'/>
        <input type="text" id='lastName' name='last_name' placeholder='Title of Study (e.g. Finance)'/>
        <input type="num" id='title' name='title' placeholder='Start Date'/>
        <input type="num" id='title' name='title' placeholder='Graduation Date'/>
      <button type='submit' className='submit-button submit-education-info'>Submit</button>
      </div>}
      <button className='show-hide-button' onClick={handleShowClick}>{showMore ? 'Hide' : 'Show'}</button>
    </div>
  )
}

export function Container() {
  return (
    <>
      <div id="forms">
        <PersonalInfo />
        <EducationInfo />
      </div>
      <div id="cv-preview">
        <div id="cv-header"></div>
      </div>
    </>
  )
}
