import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const modalRoot = document.getElementById('modal-root')

class Modal extends React.Component {
    constructor(props){
        super(props)
        this.el = document.createElement('div')
        this.el.className = this.props.className || ''
    }   

    componentDidMount() {
        // Append the element into the DOM on mount. We'll render
        // into the modal container element (see the HTML tab).
        modalRoot.appendChild(this.el);
    }
    
    componentWillUnmount() {
        // Remove the element from the DOM when we unmount
        modalRoot.removeChild(this.el);
    }

    render(){
        this.el.className = this.props.className || ''
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        );
    }
}

Modal.propTypes = {
    className: PropTypes.string.isRequired,
}

export default Modal