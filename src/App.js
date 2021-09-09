import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MeSection from './Components/MeSection'
import TopNav from './Components/TopNav'
import ProfileSection from './Components/ProfileSection'
import FeedMain from './Components/feed/FeedMain'
import SignIn from './Components/SignIn'
import Logout from './Components/login/logout'

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <TopNav />
          <Route exact path="/signin" render={(routerProps) => (
            <SignIn />
          )} />
          <Route exact path="/profile/:id" render={routerProps => (
            <ProfileSection {...routerProps}/> 
          )} />
          <Route exact path="/" render={(routerProps) => <FeedMain /> } />
          <Route exact path="/home" component={<FeedMain />} />
          <Route exact path="/feed" render={(routerProps) => <FeedMain /> } />          
          <Route exact path="/me" render={(routerProps) => <MeSection {...routerProps}/> } />
          <Route exact path="/logout" component={Logout}></Route>
        </div>
      </Router>
    </>
  )
}

export default App;