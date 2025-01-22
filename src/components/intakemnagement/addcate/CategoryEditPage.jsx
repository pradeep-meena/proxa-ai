import React from 'react'

function CategoryEditPage() {
  return (
    <div>
      <form className="row g-3">
  <div className="col-md-6">
    <label  className="form-label">Category Name </label>
    <input type="text" className="form-control" id="inputEmail4" placeholder='Enter The Category Name '/>
  </div>
  <div className="col-md-6">
    <label  className="form-label">Category Description</label>
    <input type="password" className="form-control" id="inputPassword4" placeholder='Enter The Category Description '/>
  </div>
  <div className="col-6">
    <label  className="form-label">Category Type</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="Category type"/>
  </div>
</form>
    </div>
  )
}

export default CategoryEditPage

