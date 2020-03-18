import React from 'react'
import PropTypes from 'prop-types'
import SearchBar from '../../SearchBar'
import 'font-awesome/css/font-awesome.min.css'
import './SearchBarPullOut.css'

class SearchBarPullOut extends React.Component {
    render(){
        return(
            <div>
                <button onClick={this.props.handleBtnClick}>
                    <i className="fa fa-search"></i>
                </button>
                {this.props.active &&
                    <SearchBar className="searchbar-pullout-container"/>
                }          
            </div>
        );
    }
}

SearchBarPullOut.propTypes = {
    handleBtnClick: PropTypes.func,
    active: PropTypes.bool,
}

export default SearchBarPullOut