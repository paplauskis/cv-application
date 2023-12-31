import { useState } from 'react'
import './App.css'

export function PersonalInfo(props) {
  const [showMore, setShowMore] = useState('true')

  function handleShowClick() {
    setShowMore(!showMore)
  }

  return (
    <div className="personal-info info-inputs">
      <h2>Personal Info</h2>
      {showMore && (
        <div className="labels-inputs">
          <input
            type="text"
            id="firstName"
            name="first_name"
            placeholder="First Name"
            onChange={(e) => props.setFirstName(e.target.value)}
          />
          <input
            type="text"
            id="lastName"
            name="last_name"
            placeholder="Last Name"
            onChange={(e) => props.setLastName(e.target.value)}
          />
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            onChange={(e) => props.setTitle(e.target.value)}
          />
          <input
            type="tel"
            id="phoneNumber"
            name="phone_number"
            placeholder="Phone Number"
            onChange={(e) => props.setPhoneNumber(e.target.value)}
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={(e) => props.setEmail(e.target.value)}
          />
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            placeholder="About"
            onChange={(e) => props.setAbout(e.target.value)}
          ></textarea>
          <button type="submit" className="submit-button submit-personal-info">
            Submit
          </button>
        </div>
      )}
      <button className="show-hide-button" onClick={handleShowClick}>
        {showMore ? 'Hide' : 'Show'}
      </button>
    </div>
  )
}

function EducationInputs(props, index) {
  return (
    <>
      <input
        type="text"
        id="schoolName"
        name="school_name"
        placeholder="School Name"
        onChange={(e) => props.setSchool(e.target.value)}
      />
      <input
        type="text"
        id="studyTitle"
        name="study_title"
        placeholder="Title of Study (e.g. Finance)"
        onChange={(e) => props.setStudy(e.target.value)}
      />
      <input
        type="num"
        id="studyStartDate"
        name="study_start_date"
        placeholder="Start Date"
        onChange={(e) => props.setStartDate(e.target.value)}
      />
      <input
        type="num"
        id="graduationDate"
        name="graduation_date"
        placeholder="Graduation Date"
        onChange={(e) => props.setGraduationDate(e.target.value)}
      />
      <div className="button-div">
        <button type="submit" className="submit-button submit-experience-info">
          Submit
        </button>
      </div>
    </>
  )
}

export function EducationInfo({
  setSchool,
  setStudy,
  setStartDate,
  setGraduationDate,
}) {
  const [showMore, setShowMore] = useState('false')
  const [inputCount, setInputCount] = useState(1)

  function addMoreInputs() {
    setInputCount(inputCount + 1)
  }

  function handleShowClick() {
    setShowMore(!showMore)
  }

  return (
    <div className="education-info info-inputs">
      <h2>Education Info</h2>
      {!showMore && (
        <div className="input-div">
          {Array.from({ length: inputCount }, (_, index) => (
            <EducationInputs
              key={index}
              setSchool={setSchool}
              setStudy={setStudy}
              setStartDate={setStartDate}
              setGraduationDate={setGraduationDate}
              index
            />
          ))}
          <button
            className="add-button"
            onClick={() =>
              addMoreInputs({
                setSchool,
                setStudy,
                setStartDate,
                setGraduationDate,
              })
            }
          >
            Add
          </button>
        </div>
      )}
      <button className="show-hide-button" onClick={handleShowClick}>
        {!showMore ? 'Hide' : 'Show'}
      </button>
    </div>
  )
}

export function ExperienceInfo(props) {
  const [showMore, setShowMore] = useState('false')

  function handleShowClick() {
    setShowMore(!showMore)
  }

  return (
    <div className="experience-info info-inputs">
      <h2>Experience</h2>
      {!showMore && (
        <div className="labels-inputs">
          <input
            type="text"
            id="companyName"
            name="company_name"
            placeholder="Company Name"
            onChange={(e) => props.setCompany(e.target.value)}
          />
          <input
            type="text"
            id="positionTitle"
            name="position_title"
            placeholder="Position Title"
            onChange={(e) => props.setPosition(e.target.value)}
          />
          <textarea
            name="responsibilities"
            id="responsibilities"
            cols="30"
            rows="10"
            placeholder="Main Responsibilities"
            onChange={(e) => props.setResponsibilities(e.target.value)}
          ></textarea>
          <input
            type="num"
            id="startDate"
            name="start_date"
            placeholder="Started Working"
            onChange={(e) => props.setWorkStart(e.target.value)}
          />
          <input
            type="num"
            id="endDate"
            name="end_date"
            placeholder="Stopped Working"
            onChange={(e) => props.setWorkEnd(e.target.value)}
          />
          <div className="button-div">
            <button
              type="submit"
              className="submit-button submit-experience-info"
            >
              Submit
            </button>
            <button className="add-button">Add</button>
          </div>
        </div>
      )}
      <button className="show-hide-button" onClick={handleShowClick}>
        {!showMore ? 'Hide' : 'Show'}
      </button>
    </div>
  )
}

export function Container() {
  const [firstName, setFirstName] = useState('Kostas')
  const [lastName, setLastName] = useState('Paplauskas')
  const [title, setTitle] = useState('Software Engineer')
  const [email, setEmail] = useState('paplauskaskostas@gmail.com')
  const [phoneNumber, setPhoneNumber] = useState('+37064616915')
  const [about, setAbout] = useState(
    'I like fishing, playing football, volleyball, also enjoy coding'
  )
  const [school, setSchool] = useState('Plunges "Saules" Gimnazija')
  const [study, setStudy] = useState('Vidurinis Issilavinimas')
  const [startDate, setStartDate] = useState('September 2020')
  const [graduationDate, setGraduationDate] = useState('July 2022')
  const [company, setCompany] = useState('Ignitis')
  const [position, setPosition] = useState('Frontend Developer')
  const [responsibilities, setResponsibilities] = useState(
    'Adding features to website, making sure there are no bugs'
  )
  const [workStart, setWorkStart] = useState('yesterday')
  const [workEnd, setWorkEnd] = useState('today')
  return (
    <>
      <div id="forms">
        <PersonalInfo
          setFirstName={setFirstName}
          setLastName={setLastName}
          setTitle={setTitle}
          setEmail={setEmail}
          setPhoneNumber={setPhoneNumber}
          setAbout={setAbout}
        />
        <EducationInfo
          setSchool={setSchool}
          setStudy={setStudy}
          setStartDate={setStartDate}
          setGraduationDate={setGraduationDate}
        />
        <ExperienceInfo
          setCompany={setCompany}
          setPosition={setPosition}
          setResponsibilities={setResponsibilities}
          setWorkStart={setWorkStart}
          setWorkEnd={setWorkEnd}
        />
      </div>
      <div id="cv-preview">
        <CvHeader
          firstName={firstName}
          lastName={lastName}
          title={title}
          email={email}
          phoneNumber={phoneNumber}
        />
        <div className="cv-content">
          <CvAbout about={about} />
          <h3>Education</h3>
          <CvEducation
            school={school}
            study={study}
            startDate={startDate}
            graduationDate={graduationDate}
          />
          <h3>Experience</h3>
          <CvExperience
            company={company}
            position={position}
            responsibilities={responsibilities}
            workStart={workStart}
            workEnd={workEnd}
          />
        </div>
      </div>
    </>
  )
}

function CvHeader(props) {
  return (
    <div id="cv-header">
      <div className="name-title-wrapper">
        <h2 className="full-name">{props.firstName + ' ' + props.lastName}</h2>
        <h2 className="title">
          <em>{props.title}</em>
        </h2>
      </div>
      <div className="contact-wrapper">
        <p>
          <img src="../public/mail.png" alt="email icon" />
          {props.email}
        </p>
        <p>
          <img src="../public/telephone.png" alt="phone icon" />
          {props.phoneNumber}
        </p>
      </div>
    </div>
  )
}

function CvAbout({ about }) {
  return (
    <>
      <h3>About</h3>
      <p>{about}</p>
    </>
  )
}

function CvEducation(props) {
  return (
    <>
      <p>
        <strong>School Name:</strong>
        {' ' + props.school}
      </p>
      <p>
        <strong>Title of Study:</strong>
        {' ' + props.study}
      </p>
      <p>
        <strong>Start Date:</strong>
        {' ' + props.startDate}
      </p>
      <p>
        <strong>Graduation Date:</strong>
        {' ' + props.graduationDate}
      </p>
    </>
  )
}

function CvExperience(props) {
  return (
    <>
      <p>
        <strong>Company Name:</strong>
        {' ' + props.company}
      </p>
      <p>
        <strong>Position:</strong>
        {' ' + props.position}
      </p>
      <p>
        <strong>Main Responsibilities:</strong>
        {' ' + props.responsibilities}
      </p>
      <p>
        <strong>Started Working:</strong>
        {' ' + props.workStart}
      </p>
      <p>
        <strong>Stopped Working:</strong>
        {' ' + props.workEnd}
      </p>
    </>
  )
}
