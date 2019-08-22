//import React, { useState } from 'react';
import React from 'react';
import './Popup.css';
import {ButtonToolbar, Modal, Button} from 'react-bootstrap';
import RouterLinks from './Router';


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
        <RouterLinks />
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