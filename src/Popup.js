import React, { useState } from 'react';
import './Popup.css';
import ReactBootstrap, {ButtonToolbar, Modal, Button} from 'react-bootstrap';

function Popup() {
  const [lgShow, setLgShow] = useState(false);

  return (
  	//<a href="javascript:void(0)" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">view our e-catalog</a>
  	//<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">view our e-catalog</button>

    <div className="modal fade" tabIndex="-1" role="dialog">
	  <div className="modal-dialog" role="document">
	    <div className="modal-content">
	      <div className="modal-header">
	        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 className="modal-title">Modal title</h4>
	      </div>
	      <div className="modal-body">
	        <p>One fine body&hellip;</p>
	      </div>
	      <div className="modal-footer">
	        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
	        <button type="button" className="btn btn-primary">Save changes</button>
	      </div>
	    </div>
	  </div>
	</div>
  );
}

/*render(<Popup />);*/

export default Popup;