import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../PageTemplates/NavPage/NavBar';
import SignInLinkWithRouter from '../SignInLinkWithRouter';
import SignUpLinkWithRouter from '../SignUpLinkWithRouter';

class About extends React.Component{
    render(){
      return(
        <div>
          
          <NavBar />
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><SignInLinkWithRouter /></li>
              <li><SignUpLinkWithRouter /></li>
            </ul>    
          <h2>About</h2>
        </div>
      );
    }
  }

export default About;