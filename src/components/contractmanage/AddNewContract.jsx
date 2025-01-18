import React from 'react';
import { Link } from 'react-router-dom';

const AddNewContract = () => {
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
            <select className="form-select p-3">
              <option>Contract Type*</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4 mb-3">
            <select className="form-select p-3">
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

        {/* Financial Details */}
        <h5 style={{ borderBottom: '1px solid black', textAlign: 'start', marginBottom: '15px' }}>Financial Details</h5>
        <div className="row mb-3">
          <div className="col-md-4 mb-3">
            <input type="text" placeholder="Budget *" className="form-control p-3" />
          </div>
          <div className="col-md-4 mb-3">
            <select id="category" className="form-select p-3">
              <option>Currency*</option>
            </select>
          </div>
          <div className="col-md-4">
            <select id="subcategory" className="form-select p-3">
              <option>Payment Term *</option>
            </select>
          </div>
        </div>

        {/* Request Details */}
        <h5 style={{ borderBottom: '1px solid black', textAlign: 'start', marginBottom: '15px' }}>Request Details</h5>
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
          <div className="col-md-4 mb-3">
            <button
              className="text-secondary text-start"
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
            <select className="form-select p-3">
              <option>Approvers</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <select className="form-select p-3">
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
    </div>
  );
};

export default AddNewContract;
