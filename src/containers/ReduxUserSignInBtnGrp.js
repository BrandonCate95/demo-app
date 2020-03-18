import { connect } from 'react-redux'
import UserSignInBtnGrp from '../components/Buttons/UserSignInBtnGrp'
import { userLogout } from '../actions/actions'

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => ({
    userLogout: () => {
        dispatch(userLogout())
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserSignInBtnGrp)