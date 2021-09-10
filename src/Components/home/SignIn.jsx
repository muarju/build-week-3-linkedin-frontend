import "../../index.css"
import { Button, Container, Form, Row, Navbar } from "react-bootstrap"
import LnCopyright from './LgCopyright'

const LnSignIn = () => (
  <>
    <Navbar bg="transparent" className="px-2 pt-2 pb-3">
      <Navbar.Brand href="#home">
        <img
          alt="LinkedIn logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
          height="28rem"
          className="pl-5 mt-3"
        />
      </Navbar.Brand>
    </Navbar>
    <Container>
      <Container>
        <Row className="flex-column align-items-center">
          <Form
            id="signin-form"
            
            className="rounded-lg p-3 text-left mt-5"
          >
            <h1>Sign In</h1>
            <h6>Stay updated on your professional world</h6>
            <Form.Group
              controlId="formBasicEmail"
              className="text-left text-muted mt-3"
            >
              <Form.Control
                type="email"
                className="border border-secondary"
                placeholder="Email or Phone"
              />
            </Form.Group>
            <Form.Group
              controlId="formBasicPassword"
              className="text-left text-muted"
            >
              <Form.Control
                type="password"
                className="border border-secondary"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Text className="text-muted">
              <span>
                <a
                  target="_blank"
                  class="font-weight-bold"
                  href="https://www.linkedin.com/legal/user-agreement?trk=registration-frontend_join-form-user-agreement"
                >
                  Forgot password?{" "}
                </a>
              </span>
            </Form.Text>
            <Form.Group controlId="formBasicCheckbox"></Form.Group>
            <Button
              id="joinow-btn-agree"
              variant="primary"
              type="submit"
              size="lg"
              block
            >
              Agree & Join
            </Button>
          </Form>
          <div id="signin-new2ln" class="mt-4">
            New to LinkedIn? <a href="/signup">Join now</a>
          </div>
        </Row>
      </Container>
    </Container>

    <LnCopyright />
  </>
)
export default LnSignIn
