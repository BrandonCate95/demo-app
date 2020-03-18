import React from 'react'
import PropTypes from 'prop-types'
import SearchSideBarCatagoryList from '../SideBarCatagoryList';
import { Link } from 'react-router-dom'

const SearchSideBarContent = (props) => (
  <div className="searchSideBar">
    {props.search}
    <h2>Catagories</h2>
    <SearchSideBarCatagoryList />
    <hr />
    <Link to="/AddPage">Add Post</Link>
  </div>
);

SearchSideBarContent.propTypes = {
  search: PropTypes.string.isRequired,
}

export default SearchSideBarContent