import React from 'react';
import { Link } from 'react-router-dom';
import SignInLinkWithRouter from '../SignInLinkWithRouter';

const SignUpPage = ({ match }) => (
    <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><SignInLinkWithRouter /></li>
        </ul>
      <h3>Sign Up</h3>
    </div>
  )

export default SignUpPage;