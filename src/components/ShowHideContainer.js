import React from 'react'
import PropTypes from 'prop-types'

class ShowHideContainer extends React.Component {

    state = {
        active: false
    }

    myRef = React.createRef();

    handleBtnClick = () => {
        this.setState({ active: true })
    }

    handleWindowClick = (e) => {
        this.setState({ active: this.myRef.current.contains(e.target) ? true : false }) 
    }

    componentDidMount(){
        window.addEventListener('click', this.handleWindowClick)
    }

    componentWillUnmount(){
        window.removeEventListener('click', this.handleWindowClick)
    }

    render(){
        return(
            <span ref={this.myRef}>
                {React.cloneElement(this.props.children, { active: this.state.active, handleBtnClick: this.handleBtnClick.bind(this) })}
            </span>
        );
    }
}

ShowHideContainer.propTypes = {
    children: PropTypes.element.isRequired
}

export default ShowHideContainer