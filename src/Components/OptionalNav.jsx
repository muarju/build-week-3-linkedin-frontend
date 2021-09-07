import {
  Container,
  Row,
  Col,
  Badge,
  Form,
  FormControl,
  Image,
  Dropdown,
  Card,
} from "react-bootstrap";
import { SiLinkedin } from "react-icons/si";
import { ImSearch } from "react-icons/im";
import { TiHome, TiMessageTyping } from "react-icons/ti";
import { BsFillPeopleFill, BsThreeDots } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { IoNotificationsSharp } from "react-icons/io5";
import { RiDashboardFill } from "react-icons/ri";

import "../second-nav.css";

const OptionalNav = () => {
  return (
    <>
      <Container fluid className="bg-white contain">
        <Container className="bg-white">
          <Row className="  justify-content-start flex-nowrap bg-white">
            <Col href="#home" className="d-flex mr-4 mt-2">
              <SiLinkedin className="in" />
              <ImSearch className="d-block d-md-none ml-4 icons mt-0" />
              <Form inline className="d-none d-md-block ml-lg-2">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="d-none d-md-block imput search"
                />
              </Form>
            </Col>
            <Col className="d-flex">
              <Col href="#home" className="icon-box mt-1">
                <TiHome className="nav-icon hm iconz" />
                <br />
                <span>home</span>
              </Col>

              <Col href="#features" className="icon-box mt-1">
                <BsFillPeopleFill className="nav-icon iconz" />
                <br />
                <span>My Network</span>
              </Col>

              <Col href="#pricing" className="icon-box mt-1">
                <MdWork className="nav-icon iconz" />
                <br />
                <span>Jobs</span>
              </Col>

              <Col href="#pricing" className="icon-box mt-1">
                <TiMessageTyping className="nav-icon iconz" />
                <br />
                <span>Messaging</span>
              </Col>

              <Col href="#pricing" className="icon-box mt-1">
                <IoNotificationsSharp className="nav-icon iconz" />
                <br />
                <span>Notification</span>
              </Col>

              <Col href="#pricing" className="icon-box mt-1 d-none musk">
                <Image
                  src="https://bit.ly/3zegycw"
                  className="elon ml-3 mt-0"
                />
                <Col className="d-flex mr-1">
                  <span className="mt-0 mr-3">me</span>
                  <Dropdown className="mt-n2 ml-n4">
                    <Dropdown.Toggle
                      variant
                      id="dropdown-basic"
                    ></Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        <Card style={{ width: "13rem" }}>
                          <Card.Body>
                            <Card.Title className="d-flex">
                              <Image
                                src="https://bit.ly/3zegycw"
                                className="elon mr-3 mt-0"
                              />
                              <Card.Text className="d-flex flex-column">
                                <h5>Marcello</h5>
                                <p>Job Title</p>
                              </Card.Text>
                            </Card.Title>
                            <span
                              class="badge badge-pill badge-secondary"
                              style={{ width: "10rem" }}
                            >
                              Secondary
                            </span>
                            <Card.Text>
                              <h5>Marcello</h5>
                              <p>Job Title</p>
                              <p>Job Title</p>
                              <p>Job Title</p>
                              <h5>Marcello</h5>
                              <p>Job Title</p>
                              <p>Job Title</p>
                              <p>Job Title</p>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Col>
              <Col href="#pricing" className=" d-none icon-box mt-1 dots">
                <BsThreeDots />
              </Col>
              <div className="vl ml-1 d-none"></div>
              <Col href="#pricing" className="icon-box mt-1 d-none square">
                <RiDashboardFill className="nav-icon iconz " />
                <br />
                <span>Work</span>
              </Col>
              <Col className="premium d-none icon-box mt-1">
                Try Premium <br /> Free For 1 Month
              </Col>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
export default OptionalNav;
