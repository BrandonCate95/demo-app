import React from 'react';
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { userLogin } from '../../actions/actions'

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };

class Login extends React.Component {
    state = {
      redirectToReferrer: false
    };
  
    login = () => {
      fakeAuth.authenticate(() => {
        this.props.dispatch(userLogin());
        this.setState({ redirectToReferrer: true });
      });
    };
    render() {
      const { from } = { from: { pathname: this.props.to.state.from, search: this.props.to.state.fromSearch } } || { from: { pathname: "/" } };
      const { redirectToReferrer } = this.state;
  
      if (redirectToReferrer) {
        return <Redirect to={from} />;
      }
  
      return (
        <div>
          <button onClick={this.login}>Log in</button>
        </div>
      );
    }
  }

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  to: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.string.isRequired,
      fromSearch: PropTypes.string
    })
  })
}

export default connect()(Login);