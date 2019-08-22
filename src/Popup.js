//import React, { useState } from 'react';
import React from 'react';
import './Popup.css';
import {ButtonToolbar, Modal, Button} from 'react-bootstrap';


// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import ModalHeader from 'react-bootstrap/ModalHeader';
// import ModalTitle from 'react-bootstrap/ModalTitle';
// import ModalBody from 'react-bootstrap/ModalBody';
// import ModalFooter from 'react-bootstrap/ModalFooter';

function MyVerticallyCenteredModal(props) {
    return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered={true}
      animation={false}
      autoFocus={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Our E-Catalog
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="">
	    	<div className=""><a href="/products/stylam"><span className="">Stylam HPL</span></a></div>
	        <div className=""><a href="/products/violam"><span className="">Violam HPL</span></a></div>
	        <div className=""><a href="/products/viotouch"><span className="">Viotouch HPL</span></a></div>
	        <div className=""><a href="/products/leader"><span className="">Leader HPL</span></a></div>
	    </div>
	    <hr />
	    <div className="">
	    	<div className=""><a href="/products/handpicked-vol-1"><span className=""><span>Handpicked Assortment Vol 1</span></span></a></div>
	        <div className=""><a href="/products/handpicked-vol-2"><span className="">Handpicked Assortment Vol 2</span></a></div>
	        <div className=""><a href="/products/elite-vol-1"><span className="">Elite Assortment</span></a></div>
	        <div className=""><a href="/products/solid-colours"><span className="">Colours Therapy</span></a></div>
	        <div className=""><a href="/products/texture-vol-1"><span className="">Texture Vol 1</span></a></div>
	        <div className=""><a href="/products/texture-vol-2"><span className="">Texture Vol 2</span></a></div>
	        <div className=""><a href="/products/elegant-vol-1"><span className="">Elegant Assortment 1</span></a></div>
	        <div className=""><a href="/products/elegant-vol-2"><span className="">Elegant Assortment 2</span></a></div>
	    </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Popup() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        View Our E-Catalog
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}
export default Popup;