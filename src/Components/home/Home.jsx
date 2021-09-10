import "../../index.css"
import { Button, Container, Row } from "react-bootstrap"

const WelcomeForm = () => (
  <Container id="welcome-form">
    <Row className="row-cols-1 row-cols-lg-2">
      <h1 className="welcome_h1 p-2 d-none d-md-block display-4 text-left font-weight-light">
        Welcome to your professional community
      </h1>
      <h1 className="welcome_h1 d-sm-block d-md-none p-2 d-flex d-inline-flex text-left font-weight-light">
        Welcome to your professional community
      </h1>

      <img
        id="welcome-ilustration-desktop"
        className="d-none d-lg-block"
        alt="Welcome
                    to your professional community"
        src="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
      />
    </Row>
    <Row className="row-cols-1 row-cols-lg-3">
      <div className="d-grid gap-6 btn-group-vertical">
        <Button
          className="welcome-btns mt-4 py-3 rounded-lg border border-black-50 bg-white text-left"
          variant="outline-secondary"
          size="lg"
        >
          <a
            href="http://"
            className="text-body d-flex justify-content-between"
          >
            Search for a job
            <icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  d="M14 12L8 3.06 9.55 2l6.19 9.15a1.5 1.5 0 010 1.69L9.55 22 8 20.94z"
                  fill="rgba(0, 0, 0, 0.6)"
                ></path>
              </svg>
            </icon>
          </a>
        </Button>
        <Button
          className="welcome-btns mt-3 py-3 rounded-lg border border-black-50 bg-white text-left"
          variant="outline-secondary"
          size="lg"
        >
          <a
            href="http://"
            className="text-body d-flex justify-content-between"
          >
            Find a person you know
            <icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  d="M14 12L8 3.06 9.55 2l6.19 9.15a1.5 1.5 0 010 1.69L9.55 22 8 20.94z"
                  fill="rgba(0, 0, 0, 0.6)"
                ></path>
              </svg>
            </icon>
          </a>
        </Button>
        <Button
          className="welcome-btns mt-3 py-3 rounded-lg border borblack-50 bg-white text-left"
          variant="outline-secondary"
          size="lg"
        >
          <a
            href="http://"
            className="text-body d-flex justify-content-between"
          >
            Learn a new skill
            <icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  d="M14 12L8 3.06 9.55 2l6.19 9.15a1.5 1.5 0 010 1.69L9.55 22 8 20.94z"
                  fill="rgba(0, 0, 0, 0.6)"
                ></path>
              </svg>
            </icon>
          </a>
        </Button>
      </div>
      <img
        className="welcome-ilustration-mobile d-block d-lg-none"
        alt="Welcome to your professional community"
        src="https://static-exp1.licdn.com/sc/h/d58zfe6h3ycgq5l1ccjpkrtdn"
      ></img>
    </Row>
  </Container>
)
export default WelcomeForm
