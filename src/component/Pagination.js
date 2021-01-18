import React from 'react';
// import Button from 'react-bootstrap/Button';
import { Button } from 'react-bootstrap';
import '../dist/css/bootstrap.min.css';
import './pagination.css';
export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    
    <div className='buttonpage'>
      {gotoPrevPage && <Button onClick={gotoPrevPage} color="Secondary" className='previousbtn'>Previous</Button>}
      {gotoNextPage && <Button onClick={gotoNextPage} color="primary">Next</Button>}
    </div>
  )
}
