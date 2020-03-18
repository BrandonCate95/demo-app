import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../NonEditable/MainContent.css'

const EditableMainContent = (props) => (
    <div className="post-page-content mt-4" contentEditable={true}>
        {props.children}
    </div>    
);

EditableMainContent.propTypes = {
    children: PropTypes.node.isRequired
}

export default EditableMainContent