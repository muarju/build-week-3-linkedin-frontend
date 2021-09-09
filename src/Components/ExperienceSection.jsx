import React, { useState, useEffect } from "react";
import { Card, Row, Button } from "react-bootstrap";
import Experience from "./experience";
import Loading from "./Loading";
import AddDataButton from "./AddDataButton";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import axios from 'axios'



export default function ExperienceSection(props) {
  const [experiences, setExperiences] = useState(null);
  const [showMore, setShowMore] = useState(false)
  const username=localStorage.getItem('username');
  const accesstoken=localStorage.getItem('accesstoken');

  useEffect(() => {
    fetchExperiences();
  }, []);

  if (experiences === null) {
    console.log("Loading!");
    return <Loading />;
  } else {
    return (
      <div>
        <Card.Body>
          <div className="profile-section-header-container">
            <h5 className="profile-body-section-title my-2">Experience</h5>

            <AddDataButton />
          </div>

          { showMore ? (experiences && <>{ experiences.map((exp) => (
            <Experience experienceData={exp} userId={props.userId} expId={exp._id}/>
         ))} </>)  : (experiences && <>{ experiences.slice(0,3).map((exp) => (
          <Experience experienceData={exp} userId={props.userId} expId={exp._id}/>
       ))} </>) }
          <Row>
            <Button className='btn-custom w-100 text-muted d-flex' onClick={() => {setShowMore(!showMore)}}>
          {showMore ? <>show less<span><MdKeyboardArrowUp className='arrow d-flex' size='1x'/></span></> : <> show more<span><MdKeyboardArrowDown className='arrow d-flex' size='1x'/></span> </>}
              
            </Button>
          </Row>
        </Card.Body>
      </div>
    );
  }

  async function fetchExperiences() {
    const userId = process.env.REACT_APP_API_USER;
    try {
      const response = await axios.get( `${process.env.REACT_APP_API_URL}/profile/${username}/experiences`,{
        headers: {
        'Content-Type': 'application/json',
        'authentication':  `${accesstoken}`
        }
      })
      if(response){
        setExperiences(response.data);
        console.log(response.data)
      }
    } catch (err) {
      console.log(err);
    }
  }
}
