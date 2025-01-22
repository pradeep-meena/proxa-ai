import React from "react";
import { Link } from "react-router-dom";

function AddOldPrice() {
  return (
    <>
      <div className="addoldpric-section my-5">
        <div className="container">
          <h3>Add Old Price Edit Page</h3>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Supplier Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter The Supplier Name "
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Product/Service Name</label>
              <input
                type="text"
                className="form-control"
                placeholder=" Choice The Product"
              />
            </div>
            <div className="col-6">
              <label className="form-label">Old Pricing</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter The Old Price "
              />
            </div>
            <div className="col-6">
              <label className="form-label">Current Quotation</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter The Current Quotation"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">
                Saving from Honoring Old Pricing
              </label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder=" Enter The Saving"
              />
            </div>

            <div className="col-12">
             <Link to="/honoring">
             
             <button
                type="submit"
                className="btn "
                style={{ backgroundColor: "#578e7e", color: "white" }}
              >
                Submit
              </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddOldPrice;
