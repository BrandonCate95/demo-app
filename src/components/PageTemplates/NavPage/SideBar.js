import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './SideBar.css'
import PropTypes from 'prop-types'

class SideBar extends React.Component {
  
  render() {
    return (
        <React.Fragment>
          <div className="sidebarOverlay"></div>

          <div className={ `gen-sidebar ${this.props.sidebarActive}` }>
            {this.props.sidebarContent}
          </div>
        </React.Fragment>
    );
  }
};

SideBar.propTypes = {
  active: PropTypes.bool.isRequired
};

SideBar.defaultProps = {
  active: false
}

export default SideBar;