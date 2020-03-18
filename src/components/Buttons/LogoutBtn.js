import React from 'react'
import PropTypes from 'prop-types'

class LogoutBtn extends React.Component {

    logoutUser = () => {
        this.props.userLogout()
    }

    render(){
        return(
            <span>
                <button onClick={this.logoutUser}>Logout</button>
            </span>
        );
    }
}

LogoutBtn.propTypes = {
    userLogout: PropTypes.func.isRequired
}

export default LogoutBtn