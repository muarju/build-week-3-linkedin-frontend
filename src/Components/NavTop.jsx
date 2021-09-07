import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

import "../second-nav.css";

const NavTop = () => {
  const [scrolled,setScrolled]=useState(false);
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
      <Container fluid className={`bg-white contains border  ${scrolled ? 'd-block scrolled' : 'd-none'}`}
      >
        <Container className="bg-white">
          <Row
            className="  justify-content-start flex-nowrap bg-white"
            style={{ height: "50px" }}
          >
            <Col href="#home" className="d-flex mr-5 mt-2">
              <Image src="https://bit.ly/3zegycw" className="elon ml-0 mt-0" />
              <Col>
                <h3 className="" style={{fontSize:"16px", marginBottom:"0px"}}>Elon Musk</h3>
                <p className="">CEO of Tesla Motors</p>
              </Col>
            </Col>

            <Button variant="outline-secondary" className="btn rounded-pill mb-2 mt-2 ml-1">
              More
            </Button>

            <Button variant="outline-secondary" className="btn rounded-pill mb-2 mt-2 ml-1">
              Add Section
            </Button>

            <Button className="btn text-light rounded-pill mb-2 mt-2 open-to ml-1">
              Open to
            </Button>
          </Row>
        </Container>
      </Container>
    </>
  );
};
export default NavTop;
