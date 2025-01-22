import React from "react";

function SupplierEditPage() {
  return (
    <div className="supplier-edit-section my-5">
      <div className="container">
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
            <label className="form-label">Contact Detail</label>
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
              placeholder="Enter The Cantact Detail"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone"
            />
          </div>
          <div className="col-md-6">
            <label for="inputCity" className="form-label">
              Email{" "}
            </label>
            <input
              type="email"
              className="form-control"
              id="inputCity"
              placeholder="Enter The Email"
            />
          </div>
          <div className="col-md-6">
            <label for="inputCity" className="form-label">
              Address{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              placeholder="Enter YOur Address"
            />
          </div>

          <div className="col-md-6">
            <label for="inputState" className="form-label">
              Department
            </label>
            <select id="inputState" className="form-select">
              <option>Supplier X</option>
              <option>Supplier Y</option>
              <option>Supplier A</option>
              <option>Supplier B</option>
            </select>
          </div>
          <div className="col-6">
            <label className="form-label">Sub Category </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Enter Your Sub Category "
            />
          </div>
          <div className="col-md-6">
            <label for="inputCity" className="form-label">
              Amount{" "}
            </label>
            <input type="text" className="form-control" id="inputCity" />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Edit{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SupplierEditPage;
