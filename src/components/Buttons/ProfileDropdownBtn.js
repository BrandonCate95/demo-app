import React from 'react'
import './ProfileDropdownBtn.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import LogoutBtn from './LogoutBtn'

const ProfileDropdownBtn = (props) => (
    <div className={`profile-dropdown ${ props.active ? "active" : "" }`}>
        <button className={`profile-dropbtn ${props.active ? "active" : "" }`} onClick={props.handleBtnClick}>User</button>
        <div className={`profile-dropdown-content ${props.active ? "active" : ""}`}>
            <Link to="/">Home</Link>
            <LogoutBtn userLogout={props.userLogout}/>
        </div>
    </div>
);

ProfileDropdownBtn.propTypes = {
    active: PropTypes.bool,
    handleBtnClick: PropTypes.func,
    userLogout: PropTypes.func.isRequired,
}

export default ProfileDropdownBtn