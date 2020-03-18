import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Card = (props) => {
    return(
        <div className="col-4">
            <Link to={`/Search?q=${props.catagoryName}`}>
                <div className="d-flex align-items-center flex-column">
                    <i className={`fa fa-3x fa-${props.symbolName}`}></i>
                    <h4>{props.catagoryName}</h4>
                </div>
            </Link>
        </div>
    );    
}

Card.propTypes = {
    catagoryName: PropTypes.string.isRequired,
    symbolName: PropTypes.string.isRequired
}

class CatagoryCard extends React.Component {
    render(){
        const catagoryList = this.props.catagoryList;
        const catagoryItems = catagoryList.map((item) => 
            <Card key={item.catagoryName} catagoryName={item.catagoryName} symbolName={item.symbolName} />
         );
        return(
            <div className="row">
                {catagoryItems}
            </div>
        );
    }
}

CatagoryCard.propTypes = {
    catagoryList: PropTypes.array.isRequired,
}

export default CatagoryCard;
