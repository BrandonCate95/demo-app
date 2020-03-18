import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'
import './MainContent.css'

const MainContent = (props) => (
    <div className="post-page-content mt-4">
        {props.children}
    </div>    
);

MainContent.propTypes = {
    children: PropTypes.node.isRequired
}

export default MainContent