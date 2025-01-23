import React from "react";

function CategoryEditPage() {
  return (
    <>
      <div className="cateedit-section my-5">
        <div className="container">
          <h3>Add Category</h3>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Category Name </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Enter The Category Name "
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Category Description</label>
              <input
                type="text"
                className="form-control"
                
                placeholder="Enter The Category Description "
              />
            </div>
            <div className="col-6">
              <label className="form-label">Category Type</label>
              <input
                type="text"
                className="form-control"
                
                placeholder="Category type"
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

export default CategoryEditPage;
