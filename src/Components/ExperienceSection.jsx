import React, { useState, useEffect } from "react";
import { Card, Row } from "react-bootstrap";
import Experience from "./experience";
import Loading from "./Loading";
import AddDataButton from "./AddDataButton";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'



export default function ExperienceSection(props) {
  const [experiences, setExperiences] = useState([]);
  const [showMore, setShowMore] = useState(false)

  const username        = localStorage.getItem('username');
  const accesstoken     = localStorage.getItem('accesstoken');
  const sliceValue      = !showMore ? experiences.slice(0, 5) : experiences
  const experienceValue = showMore  ? "Show Less" : `Show ${experiences.length - 5} more experiences`
  const iconValues      = !showMore ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />

  async function fetchExperiences() {
    try {
      const fetchExp = await fetch(`${process.env.REACT_APP_API_URL}/profile/${username}/experiences`, {
        headers: {
          'Content-Type': 'application/json',
          'authentication': `${accesstoken}`
        }
      });
      const data = await fetchExp.json();
      setExperiences(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchExperiences();
    console.log('the props I am looking for', props);
  }, []);

  if (experiences === null) {
    return <Loading />;
  } else {
    return (
      <div>
        <Card.Body>
          <div className="profile-section-header-container">
            <h5 className="profile-body-section-title my-2">Experience</h5>
            <AddDataButton />
          </div>

          {experiences && sliceValue.map(exp => <Experience onUpdate={props.onUpdate} key={exp._id} experienceData={exp} username={username}/>)}

          {
            experiences.length > 5 && <Row className='btn-custom w-100 text-muted d-flex'>
              <div onClick={() => setShowMore(!showMore)}>
                <span>{experienceValue}</span><span>{iconValues}</span>
              </div>
            </Row>
          }
        </Card.Body>
      </div>
    );
  }
}
