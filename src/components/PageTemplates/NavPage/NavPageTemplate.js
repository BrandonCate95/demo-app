import React from 'react'
import PropTypes from 'prop-types'
import NavBar from './NavBar'
import SideBar from './SideBar'
import PageContent from './PageContent'

class NavPageTemplate extends React.Component {
    state = {
        sideBarOpen: this.props.sideBarOpen || false,
        sideBarActive: this.props.sideBarOpen ? "active" : ""
    };

    toggleSidebar = () => {
        this.setState({ sideBarOpen: this.state.sideBarOpen ? false : true });
        this.setState({ sideBarActive: this.state.sideBarOpen ? "" : "active" });
    }   

    render(){
        return(
            <div>

                <NavBar toggleSidebar={this.toggleSidebar.bind(this)}/>

                <div className="d-flex flex-row margin-none">
                    <SideBar sidebarActive={this.state.sideBarActive} sidebarContent={this.props.sidebarContent}/>
                    <PageContent sidebarActive={this.state.sideBarActive} pageContent={this.props.pageContent}/>
                </div>

            </div>
        );
    }
}

NavPageTemplate.propTypes = {
    sideBarOpen: PropTypes.bool,
    sidebarContent: PropTypes.element.isRequired,
    pageContent: PropTypes.element.isRequired,
}

export default NavPageTemplate;