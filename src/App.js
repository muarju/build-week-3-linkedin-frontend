import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MeSection from './Components/MeSection'
import TopNav from './Components/TopNav'
import ProfileSection from './Components/ProfileSection'
import FeedMain from './Components/feed/FeedMain'
import SignIn from './Components/SignIn'


function App() {
  let [user, setUser] = useState(null)
  
  const userSignIn = (e, userData) => {
    e.preventDefault()
    console.log("calling user sign in!")
    console.log("USER DATA APP API:", userData.API)
    
    let APIKEY = `Bearer ${userData.API}`
    console.log(APIKEY)
    
    fetch(`https://striveschool-api.herokuapp.com/api/profile/me`, {
      headers: {
        Authorization:APIKEY
      }
    })
    .then(res => res.json())
    .then(data => {
      setUser(data)
    })
  }
  
  return (
    <>
      <Router>
        <div className="App">
          <TopNav />
          <Route exact path="/signin" render={(routerProps) => (
            <SignIn fetchUser={userSignIn} {...routerProps} />
          )} />
          <Route exact path="/profile/:id" render={routerProps => (
            <ProfileSection {...routerProps} user={user}/> 
          )} />
          <Route exact path="/" render={(routerProps) => <FeedMain user={user}/> } />
          <Route exact path="/home" component={<FeedMain user={user}/>} />
          <Route exact path="/feed" render={(routerProps) => <FeedMain user={user}/> } />          
          <Route exact path="/me" render={(routerProps) => <MeSection user={user}/> } />
         
        </div>
      </Router>
    </>
  )
}

export default App;