import React from "react";

function MultiYearEdit() {
  return (
    <>
      <div className="multiyear-edit-section my-5">
        <div className="container">
          <h3>Multi Year Edit Page</h3>
          <form className="row g-3 mt-4">
            <div className="col-md-6">
              <label className="form-label">Vendor Name </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter The Name"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Current Contract Duration </label>
              <input
                type="text"
                className="form-control"
                placeholder="Entar The Duration"
              />
            </div>
            <div className="col-6">
              <label className="form-label">Multi Year </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter The Year"
              />
            </div>
            <div className="col-6">
              <label className="form-label">Current Year</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter The Current Year"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Saving</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter The Saving"
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
    </>
  );
}

export default MultiYearEdit;
