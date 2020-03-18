import React from 'react'
import PropTypes from 'prop-types'

const SideColumn = (props) => (
    <div className="col-4">
        {props.children}
    </div>
); 

SideColumn.propTypes = {
    children: PropTypes.node.isRequired
}

export default SideColumn