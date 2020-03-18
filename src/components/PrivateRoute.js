import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn
    }    
}

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route {...rest} render={(props) => (
      isLoggedIn === true
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/signin',
            state: { from: props.location.pathname }
          }} />
    )} />
  ) 

  PrivateRoute.propTypes = {
      component: PropTypes.any.isRequired,
      isLoggedIn: PropTypes.bool.isRequired
  }


  export default connect(mapStateToProps)(PrivateRoute)