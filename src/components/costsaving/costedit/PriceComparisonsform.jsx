import React from "react";

function PriceComparisonsform() {
  return (
    <>
      <div className="priceeditcompr-section my-5">
        <div className="container">
          <form className="row g-3">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Product Service
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Select The Product"
              />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Deratment{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="Enetr The department"
              />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">
                Select Comparisons
              </label>
              <select id="inputState" className="form-select">
                <option>Select 1</option>
                <option>Supplier A</option>
                <option>Supplier B</option>
              </select>
            </div>
            <div className="col-md-4">
              <select id="inputState" className="form-select">
                <option>Select 2</option>
                <option>Supplier X</option>
                <option>Supplier Y</option>
              </select>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PriceComparisonsform;
