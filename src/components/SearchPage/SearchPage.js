import React from 'react'
import PropTypes from 'prop-types'
import SearchPageContent from './SearchPageContent'
import SearchSideBarContent from './SearchSideBarContent'
import NavPageTemplate from '../PageTemplates/NavPage/NavPageTemplate'

class SearchPage extends React.Component {

    render(){
        return(
            <div>
                <NavPageTemplate 
                    sidebarContent={<SearchSideBarContent search={this.props.location.search}/>}
                    sideBarOpen={true}
                    pageContent={<SearchPageContent search={this.props.location.search}/>}
                />
            </div>
        );
    }
}

SearchPage.propTypes = {
    location: PropTypes.shape({
        search: PropTypes.string.isRequired,
    })
}

export default SearchPage;