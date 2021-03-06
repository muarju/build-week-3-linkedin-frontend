import { Container, Row, Col,Image,Nav,Navbar,Form,FormControl, Dropdown} from "react-bootstrap";
  import { SiLinkedin } from "react-icons/si";
  import { TiHome, TiMessageTyping } from "react-icons/ti";
  import { BsFillPeopleFill, BsThreeDots } from "react-icons/bs";
  import {FaSearch} from 'react-icons/fa'
  import { IoNotificationsSharp } from "react-icons/io5";
  import { RiDashboardFill } from "react-icons/ri";
  import { MdWork } from "react-icons/md";
  import "../nav.css";
  import { useEffect, useState } from "react";
  import { useHistory } from "react-router";
  
  const TopNav = () => {
    const history=useHistory()
    const avatar= localStorage.getItem('avatar');
    const token= localStorage.getItem('accesstoken');
    const [scrolled,setScrolled]=useState(false);

    if(token){

    }else{
      history.push("/signin");
    }
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 200 ){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
      }
    
      useEffect(() => {
        window.addEventListener('scroll',handleScroll)
      })

    return (
      <>
        <Container fluid className={`bg-white ${scrolled ? 'scrolled' : ''}`}>
          <Row>
            <Col>
              <Container className="mt-n2 d-flex">
                <Navbar className={`nav-contain`} >
                  <Navbar.Brand href="/feed" className="d-sm-fill pt-3">
                    <SiLinkedin className="in" />
                  </Navbar.Brand>
                  
                  <Form inline className="d-none d-sm-block pt-2">
                    <FormControl
                      type="text"
                      placeholder="Search"
                      className="ml-sm-n2 imput search"
                    />
                  </Form>
                  <Nav className="">
                    <Nav.Link href="/feed" className="d-block d-sm-none">
                    <FaSearch className="nav-icon hm"/>
                    </Nav.Link>
                    <Nav.Link href="/feed">
                      <TiHome className="nav-icon hm" />
                      <span>Home</span>
                    </Nav.Link>
                    <Nav.Link href="#features">
                      <BsFillPeopleFill className="nav-icon" />
                      <br />
                      <span className='span-width'>My Network</span>
                    </Nav.Link>
                    <Nav.Link href="#pricing">
                      <MdWork className="nav-icon" />
                      <br />
                      <span>Jobs</span>
                    </Nav.Link>
                    <Nav.Link href="#pricing">
                      <TiMessageTyping className="nav-icon" />
                      <br />
                      <span>Messaging</span>
                    </Nav.Link>
                    <Nav.Link href="#pricing">
                      <IoNotificationsSharp className="nav-icon" />
                      <br />
                      <span>Notification</span>
                    </Nav.Link>
                    <Nav.Link href="#pricing" className="d-block d-sm-none" style={{paddingTop: "25px"}}>
                      <BsThreeDots />
                      <span>more</span>
                    </Nav.Link>
                    <Dropdown style={{marginTop:"15px"}}>
                    <Dropdown.Toggle variant="" style={{background:"none", border:"none", fontSize: "12px"}} id="dropdown-basic">
                    <Image src={avatar} style={{height: "25px", width:"25px"}} className="rounded-circle d-none d-sm-block"/>
                      Me
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="/me">View Profile</Dropdown.Item>
                      <Dropdown.Item href="logout">Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  </Nav>
                  <div className="vl ml-1 d-none d-lg-block"></div>
                  <Nav.Link href="#pricing" className="d-none d-lg-block" style={{ color: "gray" }}>
                    <RiDashboardFill className="nav-icon" />
                    <br />
                    <span>Work</span>
                  </Nav.Link>
                  <p className="premium d-none d-lg-block">
                    Try Premium Free
                  </p>
                </Navbar>
              </Container>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  
  export default TopNav;