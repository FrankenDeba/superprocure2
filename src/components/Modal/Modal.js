import React, { Component } from 'react'
import styles from "./Modal.module.css"
class Modal extends Component {
    
    
    
    render() {
        return (
            <div className={this.props.status ? styles.showmodal : styles.hidemodal}>
            
                    {this.props.children}
    
            </div>
        )
    }
}

export default Modal
