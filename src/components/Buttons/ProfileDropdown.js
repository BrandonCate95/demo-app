import React from 'react'
import PropTypes from 'prop-types'
import './ProfileDropdown.css'
import Modal from '../Modals/Modal'
import ProfileDropdownBtn from './ProfileDropdownBtn'

class ProfileDropdown extends React.Component {

    state = { active: '' }; //empty for not active

    handleWindowClick = (e) => {
        const el = document.getElementsByClassName('profile-react-modal')[0]
        if (e.target === el) {
            this.setState({ active: this.state.active === '' ? 'active' : '' })
        }
    }

    componentDidMount(){
        window.addEventListener('click', this.handleWindowClick)
    }

    componentWillUnmount(){
        window.removeEventListener('click', this.handleWindowClick)
    }

    handleBtnClick = () => {
        this.setState({ active: this.state.active === '' ? 'active' : '' })
    }

    render(){
        return(
            <div>
                <ProfileDropdownBtn handleBtnClick={this.handleBtnClick} active={this.state.active} userLogout={this.props.userLogout}/>
                <Modal className={`profile-react-modal ${this.state.active}`}>
                    
                </Modal>
            </div>            
        );
    }
}

ProfileDropdown.propTypes = {
    userLogout: PropTypes.func.isRequired
}

export default ProfileDropdown