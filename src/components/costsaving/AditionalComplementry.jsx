import React from 'react'
import { Link } from 'react-router-dom'

const Aditionaldata = [
  {
    Vendor:"Supplier A",
    Supplier:"jons",
    Current:"Data Analytics Software",
    Recommeded:"Training for Staff",
    Cost:"$0",
    Savings:"$3,000",
    Status:"Proposed",
    Action:"",
  },
  {
    Vendor:"Supplier A",
    Supplier:"jons",
    Current:"Data Analytics Software",
    Recommeded:"Training for Staff",
    Cost:"$0",
    Savings:"$3,000",
    Status:"Proposed",
    Action:"",
  },
  {
    Vendor:"Supplier A",
    Supplier:"jons",
    Current:"Data Analytics Software",
    Recommeded:"Training for Staff",
    Cost:"$0",
    Savings:"$3,000",
    Status:"Proposed",
    Action:"",
  },
  
]

const AditionalComplementry = () => {
  return (
    <>
    <div className="container">
  <div className="top d-flex flex-wrap justify-content-between align-items-center">
    <div className="heading">
      <h3 className="mb-3 fw-bold">Additional/Complementary Services</h3>
    </div>
   
   <div className="mt-3 mt-md-0">
   <Link to="/additionaledit"> 
      <button
        type="button"
        className="btn ms-3 px-4 py-1 rounded-3 fw-semibold text-white "
        style={{ backgroundColor: "#578e7e" }}
      >
        <span>
          <i className="fa-solid fa-book me-2" />
        </span>{" "}
        Vendor Profiles
      </button>
      </Link>
    </div>
  </div>
  {/* Summary Cards */}
  <div className="row text-center mb-4 mt-4">
    {/* Card 1 */}
    <div className="col-12 col-sm-6 col-lg-3 mb-3">
      <div
        className="card sowcard text-white fw-semibold h-100 d-flex justify-content-center"
        style={{ backgroundColor: "#ff6567" }}
      >
        <div className="content d-flex justify-content-start align-items-center p-3">
          <div className="icon">
            <i
              className="fa-regular fa-user rounded-circle p-3"
              style={{ backgroundColor: "#fdabab" }}
            />
          </div>
          <div className="text ms-4 text-start fw-semibold">
            <h2 className="card-title mb-0 fw-bold">7</h2>
            <p>Number of Bundles Created</p>
          </div>
        </div>
      </div>
    </div>
    {/* Card 2 */}
    <div className="col-12 col-sm-6 col-lg-3 mb-3">
      <div
        className="card sowcard text-white fw-semibold h-100 d-flex justify-content-center"
        style={{ backgroundColor: "#ff9318" }}
      >
        <div className="content d-flex justify-content-start align-items-center p-3">
          <div className="icon">
            <i
              className="fa-regular fa-user rounded-circle p-3"
              style={{ backgroundColor: "#fcc586" }}
            />
          </div>
          <div className="text ms-4 text-start">
            <h2 className="card-title mb-0 fw-bold">40</h2>
            <p>Top Services for Bundling</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="selection">
    <h5>
      <u className="fw-bold">Opportunities</u>
    </h5>
  </div>
  <div className="table-responsive mt-3">
    <table className="table table-striped table-bordered text-center">
      <thead>
        <tr>
          <th>Vendor Name</th>
          <th>Supplier Name</th>
          <th>
            Current Service/ <br /> Product Purchased
          </th>
          <th>
            Recommeded Additional/ <br /> Complementary Service
          </th>
          <th>Cost</th>
          <th>Savings/Value-Added Estimate</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
            {Aditionaldata.map((item, index) => (
              <tr key={index}>
                <td>{item.Vendor}</td>
                <td>{item.Supplier}</td>
                <td>{item. Current}</td>
                <td>{item.Recommeded}</td>
                <td>{item.Cost}</td>
                <td>{item.Savings}</td>
                <td>{item.Status}</td>
                <td>
                  <i
                    className="fa-regular fa-eye text-primary mx-2"
                    style={{ cursor: "pointer" }}
                    title="View"
                    onClick={() => handleVolumeAction("View", item)}
                  />
                  <i
                    className="fa-solid fa-circle-check text-success mx-2"
                    style={{ cursor: "pointer" }}
                    title="Confirm"
                    onClick={() => handleVolumeAction("Confirm", item)}
                  />
                  <i
                    className="fa-solid fa-xmark text-danger mx-2"
                    style={{ cursor: "pointer" }}
                    title="Delete"
                    onClick={() => handleVolumeAction("Delete", item)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
    </table>
  </div>
  {/* Pagination */}
  <nav aria-label="Page navigation" className="mt-4">
    <ul className="pagination justify-content-center">
      <li className="page-item">
        <a
          className="page-link text-secondary"
          href="#"
          style={{ border: "none" }}
        >
          Previous
        </a>
      </li>
      <li className="page-item active mx-3">
        <a
          className="page-link rounded text-white fw-semibold"
          href="#"
          style={{ backgroundColor: "#0096d4" }}
        >
          1
        </a>
      </li>
      <li className="page-item">
        <a
          className="page-link rounded text-dark fw-semibold"
          href="#"
          style={{ backgroundColor: "rgb(212, 212, 212)" }}
        >
          2
        </a>
      </li>
      <li className="page-item mx-3">
        <a
          className="page-link rounded text-dark fw-semibold"
          href="#"
          style={{ backgroundColor: "rgb(212, 212, 212)" }}
        >
          3
        </a>
      </li>
      <li className="page-item">
        <a
          className="page-link text-secondary"
          href="#"
          style={{ border: "none" }}
        >
          Next
        </a>
      </li>
    </ul>
  </nav>
</div>
    </>
  )
}

export default AditionalComplementry