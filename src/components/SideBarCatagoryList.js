import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './SideBarCatagoryList.css'

const catagoryData = [
    {catagoryName: "Peace", symbolName: "heart"},
    {catagoryName: "Bars", symbolName: "beer"},
    {catagoryName: "Scams", symbolName: "bitcoin"}
];

const SearchSideBarCatagory = (props) => (
    <Link to={`/Search?q=${props.catagoryName}`}>
        <div className="d-flex flex-row">
            <i className={`fa fa-2x fa-${props.symbolName} col-4 search-sidebar-icon`}></i>
            <h4 className="col-8">{props.catagoryName}</h4>
        </div>
    </Link>
);

SearchSideBarCatagory.propTypes = {
    catagoryName: PropTypes.string.isRequired,
    symbolName: PropTypes.string.isRequired,
}

const catagoryList = catagoryData.map((catagory, index) => 
    <SearchSideBarCatagory key={index} symbolName={catagory.symbolName} catagoryName={catagory.catagoryName}/>
);

const SearchSideBarCatagoryList = () => (
    <div className="d-flex flex-column">
        {catagoryList}
    </div>
);

export default SearchSideBarCatagoryList