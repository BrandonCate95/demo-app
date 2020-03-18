import React from 'react'
import PropTypes from 'prop-types'

const EditableTitle = (props) => (
    <h2 contentEditable={true}>
        {props.children}
    </h2>
);

EditableTitle.propTypes = {
    children: PropTypes.node.isRequired
}

export default EditableTitle