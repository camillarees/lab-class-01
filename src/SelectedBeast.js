import React from 'react';
import './App.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

class SelectedBeast extends React.Component {
    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                        <Image src={this.props.beastObj.image_url} className="responsiveImage" alt={this.props.beastObj.title} />
                        <p>{this.props.beastObj.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.handleClose}>Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default SelectedBeast;