import React from 'react'
import PropTypes from 'prop-types'
import SignUpLinkWithRouter from '../SignUpLinkWithRouter'
import Login from '../Buttons/Login'

class SignInPage extends React.Component {
    render(){
      console.log(this)
      return(

        <div>

          <div className="d-flex justify-content-center">
            <div className="d-flex flex-column">
              Username or email:
              <input type="text" />
              Password:
              <input type="text" className="mb-2"/>
              <Login to={{state: this.props.location.state}}/>
              <hr/>
              <SignUpLinkWithRouter />
              
            </div>
          </div>
        </div>

      );
    }
  }

SignInPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object.isRequired,
  })
}

export default SignInPage;