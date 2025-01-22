import React from "react";

function AditionalEditPage() {
  return (
    <>
      <div className="priceeditcompr-section my-5">
        <div className="container">
          <h3> Additional Complementary Edit Page</h3>
          <form className="row g-3 mt-5">
            <div className="col-md-6">
              <label className="form-label">Vendor Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter The Name"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Product Parchased</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enetr The Products"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Complementary Service</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enetr The Service"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Cost</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enetr The Cost"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Saving / Value - Added</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enetr The Saving"
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

export default AditionalEditPage;
