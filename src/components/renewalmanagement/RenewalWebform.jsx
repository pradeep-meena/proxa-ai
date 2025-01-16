import React from "react";

const RenewalWebform = () => {
  return (
    <div className="container my-5">
      <h2 className="text-start mb-4">Renewal Webform with Document Preview</h2>
      <div className="row">
        {/* Left Side - Form */}
        <div className="col-md-6 mt-3">
          <h4 className=""><u>Renewal Webform</u></h4>
          <form>
            <div className="mb-3 p-2">
            
              <select className="form-select p-3" id="vendorName">
                <option value="">Vendor Name</option>
                <option value="Vendor1">Vendor 1</option>
                <option value="Vendor2">Vendor 2</option>
                <option value="Vendor3">Vendor 3</option>
              </select>
            </div>

            <div className="mb-3 p-2">
            
              <input
                type="text"
                className="form-control p-3"
                id="contractPrice"
                placeholder=" Contract Price"
              />
            </div>

            <div className="mb-3 p-2">
             
              <input
                type="date"
                className="form-control p-3"
                id="newEndDate"
                placeholder="New End Date"
              />
            </div>

            <div className="mb-3 p-2">
             
              <input
                type="text"
                className="form-control p-3"
                id="AddService"
                placeholder="Add Service"
              />
            </div>

            <div className="mb-3 p-2 ">
             
              <textarea
                className="form-control "
                id="additionalNotes"
                rows="4"
                placeholder="Additional Notes"
                style={{height:'200px'}}
              ></textarea>
            </div>

            <div 
  className="d-flex justify-content-center align-items-center flex-wrap" 
  style={{ height: "100%" }}
>
  <button 
    type="button"
    style={{
      width: "334px",
      height: "42px",
      borderRadius: "8px",
      margin: "8px 12px",
      backgroundColor: "#578E7E",
      color: "white",
      border:'none'
    }}
  >
    Generate Document
  </button>
  <button
    type="button"
    style={{
      width: "334px",
      height: "42px",
      borderRadius: "8px",
      margin: "8px 12px",
      backgroundColor: "#32E886",
      color: "white",
      border:'none'
    }}
  >
    Download Document
  </button>
  <button
    type="button"
    style={{
      width: "334px",
      height: "42px",
      borderRadius: "8px",
      margin: "8px 12px",
      backgroundColor: "#0D99FF",
      color: "white",
      border:'none'
    }}
  >
    Submit for Approval
  </button>
</div>

          </form>
        </div>

        {/* Right Side - Document Preview */}
        <div className="col-md-6 mt-3">
          <h4><u>Document Preview</u></h4>
          <div
            className="border p-3 shadow-sm"
            style={{ height: "700px", overflowY: "scroll" }}
          >
            <img
              src="https://i.ibb.co/xsRMv0P/renewalzoom.png" // Update with your correct image path
              alt="Document Preview"
              className="img-fluid"
              style={{ width: "100%"}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenewalWebform;