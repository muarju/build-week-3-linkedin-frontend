import React, { Component } from 'react'
import { Form, Button} from 'react-bootstrap'

export default class SignIn extends Component {
	state = {
    name: null,
    API: null,
    userData: null
  }
  
  render() {
    {console.log("this.state", this.state)}
    {console.log("this.props", this.props)}
		return (
			<div className="sign-in-screen">
        <div className="sign-in-form">
        <img 
          src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" 
          alt="LinkedIn"
          className="sign-in-logo" />
          <h4 className="sign-in-text">Welcome to your professional community.</h4>
          <Form onSubmit={(e) => { this.props.fetchUser(e, this.state) }}>
            <Form.Group>
              <Form.Label>Name:</Form.Label>
              <Form.Control 
                type="name" 
                placeholder="LinkedIn Profile Name" 
                onChange={(e) => this.setState({ name: e.target.value })}/>
            </Form.Group>
            
            <Form.Group>
              <Form.Label>API Key (Password): </Form.Label >
              <Form.Control 
                type="password" 
                placeholder="API key here"
                onChange={(e) => this.setState({ API: e.target.value })} />
            </Form.Group>
            
            <Button variant="primary" type="submit" className="sign-in-button default-blue-bg">
              Sign in
            </Button>
          </Form>
        </div>
			</div>
		)
	}
}
