import React, { useState } from 'react';
import ReactBootstrap, {ButtonToolbar, Modal, Button} from 'react-bootstrap';

function Popup() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <ButtonToolbar>
      <Button onClick={() => setLgShow(true)}>view our e-catalog</Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg">

        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body>...</Modal.Body>
      </Modal>
    </ButtonToolbar>
  );
}

/*render(<Popup />);*/

export default Popup;