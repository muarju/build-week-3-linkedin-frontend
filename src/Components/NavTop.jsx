import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

import "../second-nav.css";

const NavTop = () => {
  const [scrolled, setScrolled] = useState(false);
  const [data, setData] = useState(null)
  let id = localStorage.getItem('id');
  let accesstoken = localStorage.getItem('accesstoken');
  const endpoint = `${process.env.REACT_APP_API_URL}/profile/${id}`

  const fetchData = async () => {
    const response = await fetch(endpoint, {
      headers: { 'authentication': `${accesstoken}` }
    })
    const data = await response.json()
    setData(data)
  }

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    fetchData()

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
              <Image src={data && data.image} className="elon ml-0 mt-0" />
              <Col>
                <h3 className="" style={{ fontSize: "16px", marginBottom: "0px" }}>{data && data.name + " " + data.surname}</h3>
                <p className="">{data && data.title}</p>
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
