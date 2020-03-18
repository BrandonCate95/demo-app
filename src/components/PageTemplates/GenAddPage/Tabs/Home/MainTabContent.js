import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../TabContent.css'
import TextBtnGrp from './TextBtnGrp';

const MainTabContent = () => (
    <React.Fragment>

        <TextBtnGrp />

        <div className="btn-group">
            <button>
                <i className="fa fa-check"></i>
                Commit Post
            </button>
        </div>

    </React.Fragment>
);

export default MainTabContent