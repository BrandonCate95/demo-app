import React from 'react'
import PropTypes from 'prop-types'
import NavPageTemplate from '../PageTemplates/NavPage/NavPageTemplate'
import PostSideBarContent from './PostSideBarContent'
import GenPageContent from '../PageTemplates/PageContentTemplates/NonEditable/GenPageContent'

class PostPage extends React.Component {
    urlParse = () => {
        const urlPageParams = this.props.match.params;
        return urlPageParams; 
    };

    render(){
        return(
            <div>
                <NavPageTemplate 
                    sidebarContent={<PostSideBarContent />}
                    sidebarOpen={false}
                    pageContent={<GenPageContent />}
                />               
            </div>
        );
    }
}

PostPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            user: PropTypes.string.isRequired,
            page: PropTypes.string.isRequired,
        })
    })
}

export default PostPage