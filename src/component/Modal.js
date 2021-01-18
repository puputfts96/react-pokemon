import React from "react";
import { Button } from 'react-bootstrap';
import '../dist/css/bootstrap.min.css';


const Modal = ({ handleClose, show, handleName, handleSave }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";
  console.log('show '+show)
  return (
    <div className={showHideClassName}>
      <div className="modal-container">
        {/* <h2>Hello Modal</h2> */}
          <div className="form-group">
            <label>Enter Name:</label>
            <input
              type="text"
              className="form-control"
              onChange={handleName}
            />
            
          </div>
          <div className="form-group">
            <Button variant='info' className='modal-close' onClick={handleSave}>
              Save
            </Button>
          </div>
          <Button className='modal-close' variant='danger' onClick={handleClose}>Close</Button>
        {/* <a href="javascript:;" className="modal-close" onClick={handleClose}>
          close
        </a> */}
      </div>
    </div>
  );
};

export default Modal;