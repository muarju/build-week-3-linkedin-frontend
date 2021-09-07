import React, { useState, useEffect } from "react";
import { Card, Row, Button } from "react-bootstrap";
import Experience from "./experience";
import Loading from "./Loading";
import AddDataButton from "./AddDataButton";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

export default function ExperienceSection(props) {
  const [experiences, setExperiences] = useState(null);
  const [showMore, setShowMore] = useState(false)

  console.log("Should be null?", experiences);
  console.log('exp section debug', props.userId)

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
      const fetchExp = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
          },
        }
      );
      const data = await fetchExp.json();
      setExperiences(data);
    } catch (err) {
      console.log(err);
    }
  }
}
