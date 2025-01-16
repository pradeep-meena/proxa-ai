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
          <select className="form-select">
            <option value="" disabled selected>
              Select renewal Days
            </option>
            <option value="7">7 Days</option>
            <option value="14">14 Days</option>
            <option value="30">30 Days</option>
          </select>
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