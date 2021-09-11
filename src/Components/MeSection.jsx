import { Container, Col, Row, Card, ListGroup, Button } from "react-bootstrap";
import { SiTesla, SiSpacex } from "react-icons/si";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ProfileEdit from "./ProfileEdit";
import ExperienceSection from './ExperienceSection'
import cover from "../assets/cover.jpg";
import ProfileImage from './ProfileImage'
import NavTop from './NavTop'
import Footer from './Footer'
import MeActivity from './MeActivity'
import faker from "faker";


const MainSection = (props) => {

  const [profileData, setProfileData] = useState("");
  const [experience, setExperience] = useState(null)
  const id = localStorage.getItem('id');
  const accesstoken = localStorage.getItem('accesstoken');


  const fetchData = async () => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_API_URL}/profile/${id}`,
        {
          headers: {
            authentication: `${accesstoken}`
          },
        }
      );
      if (response.ok) {
        let resp = await response.json();
        setProfileData(resp);
        const fetchExp = await fetch(`${process.env.REACT_APP_API_URL}/profile/${resp.username}/experiences`, {
          headers: {
            authentication: `${accesstoken}`
          },
        })
        const data = await fetchExp.json()
        setExperience(data)
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      <NavTop />
      <Container className="main-body-container">
        <Row className="justify-content-center">
          <Col sm={8} className="user-info mt-2">
            <Card>
              <div className="cover-image">
                <Card.Img className="cover-img" variant="top" src={cover} />
              </div>
              {<ProfileImage profileData={profileData} fetch={fetchData} />}

              <Card.Body className="user-info-body">
                <Row className="justify-content-end">
                  {profileData && <ProfileEdit profileData={profileData} fetch={fetchData} params={props} />}
                </Row>
                <Row className="justify-content-space-between rows-col-md-6 rows-col-sm-12 rows-col-sx-12 ">
                  <Col>
                    <div className="d-flex mt-3">
                      <h2 className="member-name">
                        {profileData.name} {profileData.surname}{" "}
                        <span>• 1st</span>
                      </h2>
                    </div>
                    <div>
                      <h6 className="member-position">{profileData.title}</h6>
                    </div>
                    <div className="d-flex">
                      <p className="text-muted">
                        {profileData.area} ·
                        <a
                          href=".sample"
                          alt="#"
                          className="profile-contact-info"
                        >
                          {""} Contact Info
                        </a>
                      </p>
                    </div>
                  </Col>

                  <Col className="col d-flex profile-company-images justify-content-center">
                    <ListGroup variant="flush" className="mt-3">
                      <ListGroup.Item className='list-border '>
                        <img src={experience && experience[0].image} alt="icon" className="profileIcon" />
                        {experience && experience[0].company}
                      </ListGroup.Item>
                      <ListGroup.Item className="list-border">
                        <img src={experience && experience[1].image} alt="icon" className="profileIcon" />
                         {experience && experience[1].company}
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>

                <div>

                  <a
                    href="./sample"
                    className='profile-connections'
                  >
                    500+ Connections
                  </a>
                </div>
                <div className="profile-button-margin">
                  <Button className="btn text-light rounded-pill mb-2 open-to">
                    Open To
                  </Button>
                  <button className="btn btn-outline-secondary rounded-pill mb-2">
                    Add section
                  </button>
                  <a href={`${process.env.REACT_APP_API_URL}/profile/${id}/cv`} className="btn btn-outline-secondary rounded-pill mb-2">
                    Donwload Resume
                  </a>
                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>

                <h5 className="profile-body-section-header" >About</h5>
                <p>
                  {profileData.bio}
                </p>

              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <h5>Activity</h5>
                <div>
                  <span className="activity-followers">1,844 followers</span>
                </div>
                <Row>
                  <Col>
                    <MeActivity randomimage={faker.image.image()} />
                    <MeActivity randomimage={faker.image.business()} />
                  </Col>
                  <Col>
                    <MeActivity randomimage={faker.image.animals()} />
                    <MeActivity randomimage={faker.image.food()} />
                  </Col>
                </Row>

              </Card.Body>
              <a href="sample">
                <Card.Footer className="text-center card-footer text-muted text-decoration-none font-weight-bold">
                  See all activity
                </Card.Footer>
              </a>
            </Card>

            <Card>
              {profileData && <ExperienceSection userId={profileData._id} fetch={fetchData} />}
              {console.log('me section debug', profileData._id)}
            </Card>

          </Col>

          <Col sm={4}>
            <Sidebar />
          </Col>

        </Row>
        <Row className="justify-content-center"></Row>
      </Container>
      <Footer />
    </>
  );
};

export default MainSection;
