import React from 'react';
import { Link } from 'react-router-dom';

function EditRenewal() {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center flex-wrap">
  <div className="text-start">
    <h3 className="fw-bold">Edit Renewal Notification Template</h3>
    <p>Customize the email templates for renewal reminders</p>
  </div>
  
  <div className="text-end mt-3 mt-sm-0">
   <Link to="/renewalnotifi"> <button
      className="btn btn-success text-white d-flex align-items-center"
      style={{
        width: '120px',
        height: '49px',
        top: '101px',
        left: '1191px',
        gap: '0px',
        border: 'none', 
        opacity: '1', 
        backgroundColor: '#578E7E',
        color: 'white',
        borderRadius: '10px',
        display:'flex',
        justifyContent:'space-between'
      }}
    >
    <i className="fa-solid fa-arrow-left ms-2"></i>  Back 
    </button></Link>
  </div>
</div>


      <div className="my-4">
        <label className="fw-normal fs-6">Subject</label>
        <div className="row">
          <div className="col-md-4 col-sm-4 ">
            <input type="text" className="form-control p-3" placeholder="Subject" />
          </div>
        </div>

        <p className="fw-normal fs-6 mt-3">Body</p>
        <div className="bg-white border rounded p-3 mb-4" style={{maxWidth: '649px' }}>
        <div className="d-flex flex-wrap gap-1 mb-3 align-items-center">
        <select className="form-select border-0 d-inline-block me-2 "style={{width:'130px',fontSize:'15px'}}>
  <option>Normal text</option>
</select>
<select className="form-select border-0 d-inline-block me-2 "style={{width:'50px'}}>
  <option></option>
</select>
<select className="form-select border-0 d-inline-block me-2 " style={{width:'50px'}}>
<option></option>
  <option></option>
</select>

  <button className="btn btn-outline-secondary border-0 d-inline-block me-2"><b>B</b></button>
  <button className="btn btn-outline-secondary border-0 d-inline-block me-2"><i>I</i></button>
  <button className="btn btn-outline-secondary border-0 d-inline-block me-2"><u>U</u></button>
  <button className="btn btn-outline-secondary border-0 d-inline-block me-2"><s>S</s></button>
  <button className="btn btn-outline-secondary border-0 d-inline-block me-2">
    <i className="fa-solid fa-greater-than"></i><i className="fa-solid fa-less-than"></i>
  </button>
  <button className="btn btn-outline-secondary border-0 d-inline-block me-2">
    <i className="fa-solid fa-code"></i>
  </button>
  <button className="btn btn-outline-secondary border-0 d-inline-block me-2">
    <i className="fa-solid fa-minus"></i>
  </button>
</div>


  <p>
    Dear Recipient Name , <br />
    This is a reminder that your Contract Name is due for renewal on Renewal Date.<br />
    Please review the terms and take appropriate action.
  </p>
</div>


        <div className="mt-3 d-flex gap-2 justify-content-center">
          <button className="btn " style={{ width: '120px' ,border:'1px solid #578E7E',color:'#578E7E'}}>
            Reset
          </button>
          <button className="btn  text-white" style={{ width: '120px' ,backgroundColor:'#578E7E' }}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditRenewal;