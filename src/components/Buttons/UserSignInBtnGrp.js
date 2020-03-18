import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignInLinkWithRouter from '../SignInLinkWithRouter'
import SignUpLinkWithRouter from '../SignUpLinkWithRouter'
import ProfileDropdownBtn from './ProfileDropdownBtn'
import PropTypes from 'prop-types'
import ShowHideContainer from '../ShowHideContainer'


class UserSignInBtnGrp extends React.Component {
    render(){
        return(
            <span>
                {!this.props.isLoggedIn &&
                    <span>
                        <SignInLinkWithRouter className="mx-2"/>
                        <SignUpLinkWithRouter className="mr-2"/>
                    </span>
                }
                {this.props.isLoggedIn &&
                    <ShowHideContainer>
                        <ProfileDropdownBtn userLogout={this.props.userLogout}/>
                    </ShowHideContainer>
                }   
            </span>
        );
    }

}
    
UserSignInBtnGrp.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
}

export default UserSignInBtnGrp