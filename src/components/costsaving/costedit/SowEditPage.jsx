import React from "react";

function SowEditPage() {
  return (
    <div>
      <div className="sowedit-section my-5">
        <div className="container">
          <h3>Service And Sow Edit Page </h3>
          <form className="row g-3 mt-4">
            <div className="col-md-6">
              <label className="form-label">Create New Sow</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter The Create New Sow "
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Type Of Service</label>
              <input
                type="text"
                className="form-control"
                placeholder=" Choice The Type"
              />
            </div>
            <div className="col-6">
              <label className="form-label">Requester Team</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter The Requester Team "
              />
            </div>
            <div className="col-6">
              <label className="form-label">Requester Service</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter The Current Service"
              />
            </div>

            <div className="col-12">
              <button
                type="submit"
                className="btn "
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
