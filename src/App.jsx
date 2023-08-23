import { useState } from 'react'
import './App.css'


export function PersonalInfo({ setFirstName, setLastName, setTitle }) {
  const [showMore, setShowMore] = useState('true')

  function handleShowClick() {
    setShowMore(!showMore)
  }

  function handleFirstName(e) {
    setFirstName(e.target.value)
  }

  function handleLastName(e) {
    setLastName(e.target.value)
  }
  function handleTitle(e) {
    setTitle(e.target.value)
  }

  return (
    <div className="personal-info info-inputs">
      <h2>Personal Info</h2>
      {showMore && <div className="labels-inputs">
        <input type="text" id='firstName' name='first_name' placeholder='First Name' onChange={handleFirstName}/>
        <input type="text" id='lastName' name='last_name' placeholder='Last Name' onChange={handleLastName}/>
        <input type="text" id='title' name='title' placeholder='Title' onChange={handleTitle}/>
        <input type="tel" id='phoneNumber' name='phone_number' placeholder='Phone Number'/>
        <input type="email" id='email' name='email' placeholder='Email'/>
        <textarea name="about" id="about" cols="30" rows="10" placeholder='About'></textarea>
      <button type='submit' className='submit-button submit-personal-info' >Submit</button>
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
      {!showMore && <div className="labels-inputs">
        <input type="text" id='schoolName' name='school_name' placeholder='School Name'/>
        <input type="text" id='studyTitle' name='study_title' placeholder='Title of Study (e.g. Finance)'/>
        <input type="num" id='studyStartDate' name='study_start_date' placeholder='Start Date'/>
        <input type="num" id='graduationDate' name='graduation_date' placeholder='Graduation Date'/>
        <div className="button-div">
          <button type='submit' className='submit-button submit-experience-info'>Submit</button>
          <button className="add-button">Add</button>
        </div> 
      </div>}
      <button className='show-hide-button' onClick={handleShowClick}>{!showMore ? 'Hide' : 'Show'}</button>
    </div>
  )
}

export function ExperienceInfo() {
  const [showMore, setShowMore] = useState('false')
  function handleShowClick() {
    setShowMore(!showMore)
  }
  return (
    <div className="experience-info info-inputs">
      <h2>Experience</h2>
      {!showMore && <div className="labels-inputs">
        <input type="text" id='companyName' name='company_name' placeholder='Company Name'/>
        <input type="text" id='positionTitle' name='position_title' placeholder='Position Title'/>
        <textarea name="responsibilities" id="responsibilities" cols="30" rows="10" placeholder='Main Responsibilities'></textarea>
        <input type="num" id='startDate' name='start_date' placeholder='Started Working'/>
        <input type="num" id='endDate' name='end_date' placeholder='Stopped Working'/>
        <div className="button-div">
          <button type='submit' className='submit-button submit-experience-info' >Submit</button>
          <button className="add-button">Add</button>
        </div>  
      </div>}
      <button className='show-hide-button' onClick={handleShowClick}>{!showMore ? 'Hide' : 'Show'}</button>
    </div>
  )
}

export function Container() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [title, setTitle] = useState('')
  return (
    <>
      <div id="forms">
        <PersonalInfo setFirstName={setFirstName} setLastName={setLastName} setTitle={setTitle}/>
        <EducationInfo />
        <ExperienceInfo />
      </div>
      <div id="cv-preview">
        <div id="cv-header">
          <div className="name-title-wrapper">
            <h1 className='full-name'>{firstName + ' ' + lastName}</h1>
            <h2 className='title'>{title}</h2>
          </div>
          <div className="contact-wrapper">
            <p><img src="../public/mail.png" alt="email icon" /></p>
            <p><img src="../public/telephone.png" alt="phone icon" /></p>
          </div>
        </div>
      </div>
    </>
  )
}