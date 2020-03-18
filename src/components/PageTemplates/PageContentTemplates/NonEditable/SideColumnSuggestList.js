import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './SideColumnSuggestList.css'

const suggestData = [
    {img: "#", author: "Nameless", title: "Title", desc: "This is the search results content description"},
    {img: "https://s3-us-west-1.amazonaws.com/ttd-service-image-storage/ttd/default4.png", author: "Bobo", title: "Title", desc: "This is the search results content description"},
    {img: "https://s3.amazonaws.com/aws-website-brandoncatetestcom-dfctb/suggestionIcon_939086a0-c758-4ed4-a622-3f94cdbc6714_x3hdpi.png", author: "Nameless", title: "Title", desc: "This is the search results content description"},
    {img: "https://s3-us-west-1.amazonaws.com/ttd-service-image-storage/ttd/default.png", author: "Ns", title: "Title", desc: "This is the search results content description"},
    {img: "https://s3.amazonaws.com/aws-website-brandoncatetestcom-dfctb/suggestionIcon_939086a0-c758-4ed4-a622-3f94cdbc6714_x3hdpi.png", author: "Nameless", title: "Title", desc: "This is the search results content description"},
    {img: "https://s3-us-west-1.amazonaws.com/ttd-service-image-storage/ttd/default.png", author: "Nameless", title: "Title", desc: "This is the search results content description"},
];

const SuggestResult = (props) => (
    <div className="row mb-2">
        <div className="suggest-side-col-img-container col-5">
            <img src={props.img} alt="suggest img" />
        </div>
        <div className="d-flex flex-column col-7 pl-1">
            <Link to={`/${props.author}/${props.title}`}>
                <h5>{props.title}</h5>
            </Link>
            <div className="suggest-desc">{props.desc}</div>
        </div>
    </div>
);

SuggestResult.propTypes = {
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
}

const suggestList = suggestData.map((item) =>
    <SuggestResult key={item.title} img={item.img} title={item.title} desc={item.desc} author={item.author}/>
);

const SideColumnSuggestList = () => (
    <div>
        {suggestList}
    </div>
);

export default SideColumnSuggestList