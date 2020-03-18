import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-tabs/style/react-tabs.css';
import './ReactTabsOverload.css'
import 'font-awesome/css/font-awesome.min.css'
import SearchBarPullOut from './SearchBarPullOut'
import ShowHideContainer from '../../ShowHideContainer'
import ReduxUserSignInBtnGrp from '../../../containers/ReduxUserSignInBtnGrp'

const NavMasterRow = () => (
    <div className="d-flex flex-row">
        <Link to="/" className="mr-2">
            <button>Home</button>
        </Link>

        <button className="my-auto mr-2">
            <i className="fa fa-floppy-o"></i>
        </button>

        <button className="my-auto mr-2">
            <i className="fa fa-undo"></i>
        </button>

        <button className="my-auto mr-2">
            <i className="fa fa-repeat"></i>
        </button>

        <ShowHideContainer>
            <SearchBarPullOut />
        </ShowHideContainer>

        <div className="ml-auto">
            <ReduxUserSignInBtnGrp />
        </div>
        
    </div>
)

export default NavMasterRow