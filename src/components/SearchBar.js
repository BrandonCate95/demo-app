import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchBar extends React.Component {
    
    state = {
        search: this.getParameterByName('q') || ""
    };

    submitSearch = (e) => {
        e.preventDefault();
        //dont use redirect as it pops off previous history state
        this.props.history.push(`/Search?q=${this.state.search}`);
    }

    handleChange = (e) => {
        this.setState({ search: e.target.value });
    }

    getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    componentWillReceiveProps(e){
        this.setState({ search: this.getParameterByName('q') || "" });
    }

    render(){
      return(
        <span className={this.props.className}>
            <form onSubmit={this.submitSearch}>
                <input type="text" value={this.state.search} onChange={this.handleChange} placeholder="Search for..."/>
            </form>
        </span>
      );
    }
}

SearchBar.propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    className: PropTypes.string,
}

export default withRouter(SearchBar);