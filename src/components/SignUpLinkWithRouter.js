import React from 'react';
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom';

class SignUpLink extends React.Component{

    render(){
      const { location } = this.props
      let locObj = {
        pathname: '/signup',
        state: { from: ''}
      }
      const className = this.props.className;
  
      if(location.pathname !== '/signup' && location.pathname !== '/signin'){
        locObj.state = { from: location.pathname, fromSearch: location.search };
      }else{
        locObj.state = { from: this.props.location.state.from, fromSearch: this.props.location.state.fromSearch };
      }
    
      return (
        <span>
          <Link to={locObj} className={className}>Sign Up</Link>
        </span>
      )
    }
  }

SignUpLink.propTypes = {
  className: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    state: PropTypes.shape({
      from: PropTypes.string.isRequired,
      fromSearch: PropTypes.string,
    })
  })
}

const SignUpLinkWithRouter = withRouter(SignUpLink)

export default SignUpLinkWithRouter;