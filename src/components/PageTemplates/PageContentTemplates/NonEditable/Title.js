import React from 'react'
import PropTypes from 'prop-types'

const Title = (props) => (
    <h2>
        {props.children}
    </h2>
);

Title.propTypes = {
    children: PropTypes.node.isRequired
}

export default Title