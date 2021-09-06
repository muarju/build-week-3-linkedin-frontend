import React from 'react'
import { Button } from 'react-bootstrap'
import faker from 'faker'

export default function ProfileFragment(props) {
	return (
    <div>
  		<a href="#deets" className="user-profile-fragment-container">
        
        <div className="user-icon-container">
  			  <img 
            src={props.userProfileImage} 
            alt="Profile Image" 
            className="user-icon"
            />
        </div>
        
        <div className="user-fragment-info">
          <h6 className="user-fragment-title">
            {faker.name.firstName()} {faker.name.lastName()} 
            <span className="user-fragment-relatedness"> • {relatedness()}</span>
          </h6>
          <p className="user-fragment-description">
            {faker.name.jobDescriptor() + " " + faker.name.jobTitle()}
          </p>
        </div>
        
  		</a>
    </div>
	)
}

function relatedness() {
  let relatedness = Math.floor(Math.random()*3) +1
  
  if (relatedness === 1) return (relatedness + "st")
  if (relatedness === 2) return (relatedness + "nd")
  if (relatedness === 3) return (relatedness + "rd")
  if (relatedness === 4) return (relatedness + "th")
}


{/* <div className="user-fragment-info">
        <h6 className="user-fragment-title">
          {faker.name.firstName()} {faker.name.lastName()} 
          <span className="user-fragment-relatedness">• {relatedness()}</span>
        </h6>
        <p className="user-fragment-description">
          {faker.name.jobDescriptor() + " " + faker.name.jobTitle()} as;ldkfja;sldkfja;sldkfja;sldfkjas;ldfkjas;dlfkjdl;k
        </p>
        
      </div> */}