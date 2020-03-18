import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'

const MainColumn = (props) => (
    <div className="col-8 mr-4">
        {props.children}
    </div>
);

MainColumn.propTypes = {
    children: PropTypes.node.isRequired
}

export default MainColumn
