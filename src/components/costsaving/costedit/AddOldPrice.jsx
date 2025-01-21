import React from 'react'

function AddOldPrice() {
  return (
    <div>
      <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Supplier Name</label>
    <input type="text" className="form-control" id="inputEmail4" placeholder='Enter The Supplier Name '/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Product/Service Name</label>
    <input type="text" className="form-control" id="inputPassword4" placeholder=" Choice The Product"/>
  </div>
  <div className="col-6">
    <label for="inputAddress" className="form-label">Old Pricing</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="Enter The Old Price "/>
  </div>
  <div className="col-6">
    <label for="inputAddress2" className="form-label">Current Quotation</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Enter The Current Quotation"/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">Saving from Honoring Old Pricing</label>
    <input type="text" className="form-control" id="inputCity" Enter The Saving/>
  </div>
  
  
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
    </div>
  )
}

export default AddOldPrice
