import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const NotificationPreferences = () => {
  const [leaseAgreement, setLeaseAgreement] = useState(true);
  const [serviceContract, setServiceContract] = useState(false);
  const [maintenanceAgreement, setMaintenanceAgreement] = useState(false);

  const handleReset = () => {
    setLeaseAgreement(true);
    setServiceContract(false);
    setMaintenanceAgreement(false);
  };

  const handleSave = () => {
    alert('Preferences Saved!');
  };

  return (
    <div className="notification-container">
      <div className="header">
        <div className="noti-main-head">
        <h1 className="title">Set Your Notification Preferences</h1>
        <p className="subtitle">
          Customize when and how you want to receive renewal reminders
        </p>
        </div>
        <Link to="/editrenewalnoti"> <button className="email-template-btn">Email Template →</button></Link>
      </div>

      <div className="form">
        <div className="form-group">
          <label className="form-label">Remind me before renewal</label>
          <select className="form-select ">
            <option value=" disabled selected">
              Select renewal Days
            </option>
            <option value="7">180 Days</option>
            <option value="14">120 Days</option>
            <option value="30">60 Days</option>
            <option><button data-bs-toggle="modal" data-bs-target="#exampleModal">Custom</button></option>
          </select>
        </div>


    


<div
  class="modal fade"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">This is the modal content.</div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>




        <div className="form-group">
          <label className="form-label">Enable/Disable Reminders by Contract Type</label>
          <div className="toggle-group">
          <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" checked id="flexSwitchCheckDefault" />
                <label class="form-check-label" for="flexSwitchCheckDefault">Lease Agreements</label>
          </div>
          <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
               <label class="form-check-label" for="flexSwitchCheckDefault">Service Contracts</label>
          </div>
          <div class="form-check form-switch">
             <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
             <label class="form-check-label" for="flexSwitchCheckDefault">Maintenance Agreements</label>
         </div>
          </div>
        </div>

        <div className="notifi-button-group">
          <button className="reset-button" onClick={handleReset}>
            RESET
          </button>
          <button className="save-button" onClick={handleSave}>
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationPreferences;