import React, { Component,useState } from 'react'
import { Form, Button} from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const SignIn =() => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const history = useHistory();
  const onSubmit = async e => {
    e.preventDefault();
    const response= await axios.post(`${process.env.REACT_APP_API_URL}/profile/login/`,user);
    const data=response.data
    if(data==="authentication failed"){
      console.log(data)
    }else{
      console.log(data)
      localStorage.setItem('accesstoken', data.accesstoken);
      localStorage.setItem('username', data.data.username);
      localStorage.setItem('id', data.data._id);
      history.push("/")
    }
  }

   
		return (
			<div className="sign-in-screen">
        <div className="sign-in-form">
        <img 
          src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" 
          alt="LinkedIn"
          className="sign-in-logo" />
          <h4 className="sign-in-text">Welcome to your professional community.</h4>
          <Form onSubmit={e => onSubmit(e)}>
            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control name="email"
                type="email" 
                placeholder="Email" 
                onChange={e => onInputChange(e)} />
            </Form.Group>
            
            <Form.Group>
              <Form.Label>Password: </Form.Label >
              <Form.Control name="password"
                type="password" 
                placeholder="Password"
                onChange={e => onInputChange(e)}  />
            </Form.Group>
            
            <Button variant="primary" type="submit" className="sign-in-button default-blue-bg">
              Sign in
            </Button>
          </Form>
        </div>
			</div>
		)
	}

export default SignIn