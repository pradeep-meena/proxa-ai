import React, { useState } from "react";

function SowEditPage() {
  const [formData, setFormData] = useState({
    createNewSow: "",
    typeOfService: "",
    requesterTeam: "",
    requesterService: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 

    // Retrieve existing data from local storage
    const existingData = JSON.parse(localStorage.getItem("sowFormData")) || [];

    // Add new form data to the array
    const updatedData = [...existingData, formData];

    // Save the updated array back to local storage
    localStorage.setItem("sowFormData", JSON.stringify(updatedData));

    // Optional: Alert user and reset form
    alert("Data submitted and saved as an array in local storage!");
    setFormData({
      createNewSow: "",
      typeOfService: "",
      requesterTeam: "",
      requesterService: "",
    });
  };

  return (
    <div>
      <div className="sowedit-section my-5">
        <div className="container">
          <h3>Service And Sow Edit Page</h3>
          <form className="row g-3 mt-4" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label className="form-label">Create New Sow</label>
              <input
                type="text"
                name="createNewSow"
                value={formData.createNewSow}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter The Create New Sow"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Type Of Service</label>
              <input
                type="text"
                name="typeOfService"
                value={formData.typeOfService}
                onChange={handleChange}
                className="form-control"
                placeholder="Choice The Type"
              />
            </div>
            <div className="col-6">
              <label className="form-label">Requester Team</label>
              <input
                type="text"
                name="requesterTeam"
                value={formData.requesterTeam}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter The Requester Team"
              />
            </div>
            <div className="col-6">
              <label className="form-label">Requester Service</label>
              <input
                type="text"
                name="requesterService"
                value={formData.requesterService}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter The Current Service"
              />
            </div>
            <div className="col-12">
              <button
                type="submit"
                className="btn"
                style={{ backgroundColor: "#578e7e", color: "white" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SowEditPage;
