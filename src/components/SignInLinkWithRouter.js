import React from 'react';
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom';

class SignInLink extends React.Component{
    render(){
      const { location } = this.props
      let locObj = {
        pathname: '/signin',
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
          <Link to={locObj} className={className}>Sign In</Link>
        </span>
      )
    }
  }

SignInLink.propTypes = {
  className: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    state: PropTypes.shape({
      from: PropTypes.string.isRequired,
      fromSearch: PropTypes.string,
    })
  })
}

const SignInLinkWithRouter = withRouter(SignInLink)

export default SignInLinkWithRouter;