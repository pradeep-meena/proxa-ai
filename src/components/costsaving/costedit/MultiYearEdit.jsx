import React from 'react'

function MultiYearEdit() {
  return (
    <div>
      <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Vendor Name </label>
    <input type="text" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Current Contract Duration </label>
    <input type="text" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-6">
    <label for="inputAddress" className="form-label">Multi Year </label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-6">
    <label for="inputAddress2" className="form-label">Current Year</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">Saving</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  
  
 
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
    </div>
  )
}

export default MultiYearEdit
