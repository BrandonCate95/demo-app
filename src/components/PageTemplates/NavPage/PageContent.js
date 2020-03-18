import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'
import './PageContent.css'

class PageContent extends React.Component{
    render(){
        return(
            <div className={`gen-pageContent ${this.props.sidebarActive}`}>
                {this.props.pageContent}
            </div>
        );
    }
}

PageContent.propTypes = {
    sidebarActive: PropTypes.string,
    pageContent: PropTypes.element.isRequired
}

export default PageContent;