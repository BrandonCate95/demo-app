import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './SearchPageContent.css'
import '../../App.css'

const searchData = [
    {img: "#", title: "Title", author: "Nameless", desc: "This is the search results content description"},
    {img: "https://s3-us-west-1.amazonaws.com/ttd-service-image-storage/ttd/default4.png", author: "Bobo", title: "Title", desc: "This is the search results content description"},
    {img: "https://s3.amazonaws.com/aws-website-brandoncatetestcom-dfctb/suggestionIcon_939086a0-c758-4ed4-a622-3f94cdbc6714_x3hdpi.png", author: "Bobo", title: "Title", desc: "This is the search results content description"},
    {img: "https://s3-us-west-1.amazonaws.com/ttd-service-image-storage/ttd/default.png", author: "Bobo", title: "Title", desc: "This is the search results content description"},
    {img: "https://s3.amazonaws.com/aws-website-brandoncatetestcom-dfctb/suggestionIcon_939086a0-c758-4ed4-a622-3f94cdbc6714_x3hdpi.png", author: "Bobo", title: "Title", desc: "This is the search results content description"},
    {img: "https://s3-us-west-1.amazonaws.com/ttd-service-image-storage/ttd/default4.png", author: "Bobo", title: "Title", desc: "This is the search results content description"},
    {img: "https://s3.amazonaws.com/aws-website-brandoncatetestcom-dfctb/suggestionIcon_939086a0-c758-4ed4-a622-3f94cdbc6714_x3hdpi.png", author: "Bobo", title: "Title", desc: "This is the search results content description"},
    {img: "https://s3-us-west-1.amazonaws.com/ttd-service-image-storage/ttd/default.png", author: "Bobo", title: "Title", desc: "This is the search results content description"},
    {img: "https://s3.amazonaws.com/aws-website-brandoncatetestcom-dfctb/suggestionIcon_939086a0-c758-4ed4-a622-3f94cdbc6714_x3hdpi.png", author: "Bobo", title: "Title", desc: "This is the search results content description"},
    {img: "https://s3-us-west-1.amazonaws.com/ttd-service-image-storage/ttd/default4.png", author: "Bobo", title: "Title", desc: "This is the search results content description"},
    {img: "https://s3.amazonaws.com/aws-website-brandoncatetestcom-dfctb/suggestionIcon_939086a0-c758-4ed4-a622-3f94cdbc6714_x3hdpi.png", author: "Bobo", title: "Title", desc: "This is the search results content description"},
    {img: "https://s3-us-west-1.amazonaws.com/ttd-service-image-storage/ttd/default.png", author: "Bobo", title: "Title", desc: "This is the search results content description"},
    {img: "https://s3.amazonaws.com/aws-website-brandoncatetestcom-dfctb/suggestionIcon_939086a0-c758-4ed4-a622-3f94cdbc6714_x3hdpi.png", author: "Bobo", title: "Title", desc: "This is the search results content description"},
    {img: "https://s3-us-west-1.amazonaws.com/ttd-service-image-storage/ttd/default4.png", author: "Bobo", title: "Title", desc: "This is the search results content description"},
    {img: "https://s3.amazonaws.com/aws-website-brandoncatetestcom-dfctb/suggestionIcon_939086a0-c758-4ed4-a622-3f94cdbc6714_x3hdpi.png", author: "Bobo", title: "Title", desc: "This is the search results content description"},
    {img: "https://s3-us-west-1.amazonaws.com/ttd-service-image-storage/ttd/default.png", author: "Bobo", title: "Title", desc: "This is the search results content description"},
    {img: "https://s3.amazonaws.com/aws-website-brandoncatetestcom-dfctb/suggestionIcon_939086a0-c758-4ed4-a622-3f94cdbc6714_x3hdpi.png", author: "Bobo", title: "Title", desc: "This is the search results content description"},
    {img: "https://s3-us-west-1.amazonaws.com/ttd-service-image-storage/ttd/default4.png", author: "Bobo", title: "Title", desc: "This is the search results content description"},
    {img: "https://s3.amazonaws.com/aws-website-brandoncatetestcom-dfctb/suggestionIcon_939086a0-c758-4ed4-a622-3f94cdbc6714_x3hdpi.png", author: "Bobo", title: "Title", desc: "This is the search results content description"},
    {img: "https://s3-us-west-1.amazonaws.com/ttd-service-image-storage/ttd/default.png", author: "Bobo", title: "Title", desc: "This is the search results content description"},
];

const SearchResult = (props) => (
    <div className="row col-12 mx-0 my-2 padding-none">
        <div className="search-page-img-container padding-none col-3">
            <img src={props.img} alt="" className="search-page-img"/>
        </div>
        <div className="d-flex flex-column col-9">
            <Link to={{ pathname: `/${props.author}/${props.title}`, state: { prevSearch: props.prevSearch } }}>
                <h3>{props.title}</h3>
            </Link>
            <div>{props.desc}</div>
        </div>        
    </div>
);

SearchResult.propTypes = {
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    prevSearch: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
}

class SearchPageContent extends React.Component {
    render(){
        const searchList = searchData.map((item) => 
            <SearchResult key={item.title} img={item.img} title={item.title} desc={item.desc} author={item.author} prevSearch={this.props.search}/>
        );

        return(
            <div className="d-flex flex-column col-10 ml-4">
                {this.props.search}
                {searchList}
            </div>           
        );
    }
}

SearchPageContent.propTypes = {
    search: PropTypes.string.isRequired
}

export default SearchPageContent