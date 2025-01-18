import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddNewContract = () => {

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault(); // Prevent default behavior
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSaveChanges = () => {
    alert('Changes saved successfully!'); // Perform save action
    setShowModal(false); // Close the modal after saving
  };
  
  return (
    <div className="container mt-4">
      <div style={{ display: 'flex', justifyContent: 'space-between',paddingTop:"20px" }}>
        <div>
          <h2 style={{ textAlign: 'start' }}>Add New Contract</h2>
        </div>
        <div>
          <Link to="/contractmanage">
          <button
            style={{
              width: '120px',
              height: '49px',
              border: 'none',
              backgroundColor: '#578E7E',
              color: 'white',
              borderRadius: '5px',
            }}
          >
            <i className="fa-solid fa-arrow-left"></i> Back
          </button>
          </Link>
        </div>
      </div>

      <form>
        {/* Contract Information */}
        <div className="row mb-3 mt-5">
          <div className="col-md-4 mb-3">
            <input type="text" placeholder="Contract Name*" className="form-control p-3" />
          </div>
          <div className="col-md-4 mb-3">
            <input type="text" placeholder="Description" className="form-control p-3" />
          </div>
          <div className="col-md-4 mb-3">
            <select className="form-select p-3" style={{fontSize:'16px',fontFamily:'inherit', color:'gray'}}>
              <option>Contract Type*</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4 mb-3">
            <select className="form-select p-3" style={{fontSize:'16px',fontFamily:'inherit', color:'gray'}}>
              <option>Department*</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <input type="text" placeholder="Start Date" className="form-control p-3" />
          </div>
          <div className="col-md-4 mb-3">
            <input type="text" placeholder="End Date" className="form-control p-3" />
          </div>
        </div>

        <div className="row mb-3 ">
          <div className="col-md-4 mb-3">
            <input type="text" placeholder="Sourcing Lead Name" className="form-control p-3" />
          </div>
          <div className="col-md-4 mb-3">
            <input type="text" placeholder="Sourcing Director Name" className="form-control p-3" />
          </div>
          <div className="col-md-4 mb-3">
          <input type="text" placeholder="Business Stackholder NAme" className="form-control p-3" />
            
          </div>
        </div>

        {/* Financial Details */}
        <h5 style={{ borderBottom: '1px solid black', textAlign: 'start', marginBottom: '15px' }}>Financial Details</h5>
        <div className="row mb-3">
          <div className="col-md-4 mb-3">
            <input type="text" placeholder="Budget *" className="form-control p-3" />
          </div>
          <div className="col-md-4 mb-3">
            <select id="category" className="form-select p-3"style={{fontSize:'16px',fontFamily:'inherit', color:'gray'}}>
              <option>Currency*</option>
            </select>
          </div>
          <div className="col-md-4">
            <select id="subcategory" className="form-select p-3"style={{fontSize:'16px',fontFamily:'inherit', color:'gray'}}>
              <option>Payment Term *</option>
            </select>
          </div>
        </div>

        {/* Request Details */}
        <h5 style={{ borderBottom: '1px solid black', textAlign: 'start', marginBottom: '15px' }}>Milestones</h5>
        <div className="row align-items-center">
  <div className="col-md-3 mb-3">
    <input type="text" placeholder="Milestone Name" className="form-control p-3" />
  </div>
  <div className="col-md-3 mb-3">
    <input type="text" placeholder="Due Date" className="form-control p-3" />
  </div>
  <div className="col-md-3 mb-3">
    <input type="text" placeholder="Responsible Party" className="form-control p-3" />
  </div>
  <div className="col-md-3 mb-3">
        <button
          className="btn"
          style={{
            backgroundColor: '#0096D4',
            color: 'white',
            width: '100%',
            height: '56px',
            borderRadius: '5px',
          }}
          onClick={handleOpenModal} 
        >
          + Add
        </button>
      </div>
</div>

        <div className="row align-items-center">
          <div className="col-md-3 mb-3">
            <input type="text" placeholder="Milestone Name" className="form-control p-3" />
          </div>
          <div className="col-md-3 mb-3">
            <input type="text" placeholder="Due Date" className="form-control p-3" />
          </div>
          <div className="col-md-3 mb-3">
            <input type="text" placeholder="Responsible Party" className="form-control p-3" />
          </div>
          <div className="col-md-3 mb-3">
    <button
      className="btn"
      style={{
        backgroundColor: 'red',
        color: 'white',
        width: '100%',
        height: '56px',
        borderRadius: '5px',
      }}
    >
      -
    </button>
  </div>
        </div>

        {/* Attachments */}
        <h5 style={{ borderBottom: '1px solid black', textAlign: 'start', marginBottom: '15px' }}>Attachments</h5>
        <div className="row mb-3">
          <div className="col-md-4 mb-3 ">
            <button
              className="text-secondary text-start w-100 p-3"
              style={{
                backgroundColor: 'white',
                borderRadius: '5px',
                border: 'none',
                padding: '10px 20px',
                color: 'black',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',

                gap: '8px',
              }}
            >
              <i className="fa-solid fa-file-circle-plus"></i>
              Click to Upload
              <input type="file" style={{ display: 'none' }} />
            </button>
          </div>
        </div>

        {/* Additional Information
        <h5 style={{ borderBottom: '1px solid black', textAlign: 'start', marginBottom: '15px' }}>Some More Information</h5>
        <div className="row mb-3">
          <div className="col-md-4 mb-3">
            <select className="form-select p-3">
              <option>Choose Your Vendor</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <select className="form-select p-3">
              <option>Choose Your Contact</option>
            </select>
          </div>
        </div> */}

        {/* Approval Workflow */}
        <h5 style={{ borderBottom: '1px solid black', textAlign: 'start', marginBottom: '15px' }}>Approval Workflow</h5>
        <div className="row mb-3">
          <div className="col-md-4 mb-3">
            <select className="form-select p-3" style={{fontSize:'16px',fontFamily:'inherit', color:'gray'}}>
              <option>Approvers</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <select className="form-select p-3" style={{fontSize:'16px',fontFamily:'inherit', color:'gray'}}>
              <option>Approval Levels</option>
            </select>
          </div>
          <div className="col-md-4">
            <input type="text" placeholder="Threshold Rules" className="form-control p-3" />
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn me-3"
            style={{
              backgroundColor: 'white',
              border: '1px solid #578e7e',
              color: '#578e7e',
              padding: '10px',
              width: '150px',
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn"
            style={{
              backgroundColor: '#578E7E',
              color: 'white',
              padding: '10px',
              width: '150px',
            }}
          >
            Save
          </button>
        </div>
      </form>

       {/* Modal */}
       {showModal && (
        <div
          className="modal show"
          tabIndex="-1"
          role="dialog"
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Detail</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseModal} // Close modal on click
                ></button>
              </div>
              <div className="modal-body">
                <input type='text' placeholder='Milestone Name' style={{width:'100%',marginTop:'10px',padding:'10px',borderRadius:'5px'}}/>
                <input type='text' placeholder='Due Date'style={{width:'100%',marginTop:'10px',padding:'10px',borderRadius:'5px'}}/>
                <input type='text' placeholder='Responsible Party' style={{width:'100%',marginTop:'10px',padding:'10px',borderRadius:'5px'}}/>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal} // Close modal on click
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNewContract;
