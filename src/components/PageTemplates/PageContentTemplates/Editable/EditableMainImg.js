import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../NonEditable/MainImg.css'

const EditableMainImg = (props) => (
    <div>
        <button className="add-main-img-btn">+</button>
        <div className="post-page-img-container px-0 py-0 col-12">
            <img src={props.src} alt="post page img" className="post-page-img" /> 
        </div>
    </div>   
);

EditableMainImg.propTypes = {
    src: PropTypes.string.isRequired
}

export default EditableMainImg