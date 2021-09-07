import { Container, Row, Col, Dropdown } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <footer>
        <Row className="footer-logo">
          <img
            className="img-fluid"
            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
            alt="linkedin-logo"
            style={{ height: "30px" }}
          />
        </Row>
        <Row className="footer-body">
          <Col md={2}>
            <p>About</p>
            <p>Community Guidelines</p>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Privacy & Terms
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Privacy Policy</Dropdown.Item>
                <Dropdown.Item href="#">User Agreement</Dropdown.Item>
                <Dropdown.Item href="#">Cookie Policy</Dropdown.Item>
                <Dropdown.Item href="#">Copyright Policy</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <p>Sales Solutions</p>
            <p>Safety Center</p>

            <span className="copyright">LinkedIn Corporation © 2021</span>
          </Col>

          <Col md={2}>
            <p>Accessibility</p>
            <p>Careers</p>
            <p>Ad Choices</p>
            <p>Mobile</p>
          </Col>

          <Col md={2}>
            <p>Talent Solutions</p>
            <p>Marketing Solutions</p>
            <p>Advertising</p>
            <p>Small Business</p>
          </Col>

          <Col md={3}>
            <Row className="questions">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-question-circle-fill"
                viewBox="0 0 24 24"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
              </svg>
              <div className="questions-body">
                <h6>Questions?</h6>
                <span>Visit our Help Center.</span>
              </div>
            </Row>
            <Row className="settings mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-gear-fill"
                viewBox="0 0 24 24"
              >
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
              </svg>
              <div className="settings-body">
                <h6>Manage your account and privacy</h6>
                <span>Go to your Settings.</span>
              </div>
            </Row>
          </Col>

          <Col md={3}>
            <label>Select Language</label>
            <div className="select-lang">
              <select>
                <option>English (English)</option>
                <option>Español (Spanish)</option>
                <option>Italiano (Italian)</option>
                <option>Deutsch (German)</option>
              </select>
            </div>
          </Col>
        </Row>
      </footer>
    </Container>
  );
};

export default Footer;
