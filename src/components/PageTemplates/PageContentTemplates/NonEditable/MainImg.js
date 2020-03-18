import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'
import './MainImg.css'

const MainImg = (props) => (
    <div className="post-page-img-container px-0 py-0 col-12">
        <img src={props.src} alt="post page img" className="post-page-img" /> 
    </div>   
);

MainImg.propTypes = {
    src: PropTypes.string.isRequired
}

export default MainImg