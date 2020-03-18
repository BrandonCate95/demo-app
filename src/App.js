import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './components/HomePage/Home'
import About from './components/AboutPage/About'
import SignInPage from './components/SignInPage/SignInPage'
import SignUpPage from './components/SignUpPage/SignUpPage'
import SearchPage from './components/SearchPage/SearchPage'
import AddPage from './components/AddPostPage/AddPage'
import PostPage from './components/PostPage/PostPage'
import PrivateRoute from './components/PrivateRoute'

class BasicExample extends React.Component {  
  render(){
    return (

      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/About" component={About}/>
            <Route path="/signin" component={SignInPage}/>
            <Route path="/signup" component={SignUpPage}/>
            <Route path="/Search" component={SearchPage}/>

            <PrivateRoute path="/AddPage" component={AddPage}/>

            <Route path="/:user/:page" component={PostPage}/>
          </Switch>
        </div>
      </Router>    

    )
  }
}

export default BasicExample
