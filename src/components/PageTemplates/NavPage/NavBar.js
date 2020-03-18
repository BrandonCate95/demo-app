import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavBar.css'
import SearchBar from '../../SearchBar'
import ReduxUserSignInBtnGrp from '../../../containers/ReduxUserSignInBtnGrp'

class NavBar extends React.Component {
    render(){
      return(
        <nav className="col-12 d-flex flex-row py-1 w-100 gen-navbar">
            <div className="row ml-2 mr-auto">
                <button onClick={this.props.toggleSidebar} className="mr-2">toggle sidebar</button>
                <Link to="/" className="mr-2">
                    <button>Home</button>
                </Link>
                <SearchBar />
            </div>

            <ReduxUserSignInBtnGrp />

        </nav>        
      );
    }
}

NavBar.propTypes = {
    toggleSidebar: PropTypes.func.isRequired
}

export default NavBar