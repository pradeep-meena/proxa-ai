import React from 'react'

const AllContractWearehouse = () => {
  return (
    <>
    <div className="container my-5">
  <div className="top d-flex flex-wrap justify-content-between align-items-center">
    <div className="heading">
      <h2 className="mb-3 fw-bold">All Contract warehouse</h2>
    </div>
  </div>
  <div className="totalheading mt-4">
    <h5>
      <u className='fw-bold'>Total Contract</u>
    </h5>
  </div>
          <div className="table-responsive mt-3">
    <table className="table table-striped table-bordered text-center">
      <thead>
        <tr>
          <th>Contract department</th>
          <th>
            Start Date
          </th>
          <th>End Date</th>
          <th>Description</th>
          <th>Budget</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Office Supplies</td>
          <td>10,000 units</td>
          <td>12,000 units (10%)</td>
          <td>$2,000</td>
          <td>Supplier A</td>
          <td>New Opportunity</td>
        </tr>
        <tr>
          <td>Laptop Computers</td>
          <td>200 units</td>
          <td>250 units (8%)</td>
          <td>$2,000</td>
          <td>Supplier A</td>
          <td>New Opportunity</td>
        </tr>
        <tr>
          <td>Cloud Storage</td>
          <td>500 TB</td>
          <td>600 TB (15%)</td>
          <td>$2,000</td>
          <td>Supplier B</td>
          <td>Under Review</td>
        </tr>
        <tr>
          <td>Office Supplies</td>
          <td>10,000 units</td>
          <td>12,000 units (10%)</td>
          <td>$2,000</td>
          <td>Supplier A</td>
          <td>Approved</td>
        </tr>
        <tr>
          <td>Office Supplies</td>
          <td>10,000 units</td>
          <td>12,000 units (10%)</td>
          <td>$2,000</td>
          <td>Supplier C</td>
          <td>New Opportunity</td>
        </tr>
        <tr>
          <td>Cloud Storage</td>
          <td>500 TB</td>
          <td>600 TB (15%)</td>
          <td>$2,000</td>
          <td>Supplier B</td>
          <td>Approved</td>
        </tr>
        <tr>
          <td>Laptop Computers</td>
          <td>200 units</td>
          <td>250 units (8%)</td>
          <td>$2,000</td>
          <td>Supplier A</td>
          <td>Under Review</td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
    </>
  )
}

export default AllContractWearehouse