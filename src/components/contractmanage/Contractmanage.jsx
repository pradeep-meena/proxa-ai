import React from 'react'
import { Link } from 'react-router-dom'

const Contractmanage = () => {
  return (
<>
<div className="container mt-5">
  <div className="top d-flex flex-wrap justify-content-between align-items-center">
    <div className="heading">
      <h3 className="mb-3 fw-bold">Contract Dashboard</h3>
    </div>
    <div className="dropdown mt-3 mt-md-0">
      <form className="d-flex">
        <input
          className="form-control me-2 p-2 text-secondary  border-secondary"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </div>
  </div>
  {/* Summary Cards */}
  <div className="row text-center mb-4 mt-4">
    {/* Card 1 */}
    <div className="col-12 col-sm-6 col-lg-3 mb-3">
      <div
        className="card portalcard text-white fw-semibold h-100 d-flex justify-content-center"
        style={{ backgroundColor: "#ff6567" }}
      >
        <div className="content d-flex justify-content-start align-items-center p-3">
          <div className="icon">
            <i
              className="fa-regular fa-user rounded-circle p-3"
              style={{ backgroundColor: "#fdabab" }}
            />
          </div>
          <div className="text ms-4 text-start">
            <h2 className="card-title mb-0 fw-bold">7</h2>
            <p>Total Contracts</p>
          </div>
        </div>
      </div>
    </div>
    {/* Card 2 */}
    <div className="col-12 col-sm-6 col-lg-3 mb-3">
      <div
        className="card portalcard text-white fw-semibold h-100 d-flex justify-content-center"
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
            <p>Contracts Expiring Soon</p>
          </div>
        </div>
      </div>
    </div>
    {/* Card 3 */}
    <div className="col-12 col-sm-6 col-lg-3 mb-3">
      <div
        className="card portalcard text-white fw-semibold h-100 d-flex justify-content-center"
        style={{ backgroundColor: "#39bf1b" }}
      >
        <div className="content d-flex justify-content-start align-items-center p-3">
          <div className="icon">
            <i
              className="fa-regular fa-user rounded-circle p-3"
              style={{ backgroundColor: "#74d25f" }}
            />
          </div>
          <div className="text ms-4 text-start">
            <h2 className="card-title mb-0 fw-bold">16</h2>
            <p>Pending Approvals</p>
          </div>
        </div>
      </div>
    </div>
    {/* Btn */}
    <div className="col-12 col-sm-6 col-lg-3 mb-3 d-flex align-items-end">
      <div className="content">
        <button
          type="button"
          className="btn ms-3 px-4 py-2 rounded-3 fw-semibold text-white "
          style={{ backgroundColor: "#578e7e" }}
        >
        
          <div class="dropdown d-flex">
  <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:'#578E7E',color:'white'}}>
    Add New Contarct
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
  <li><Link to="/addnewcontact" class="dropdown-item">Add New Contract</Link></li>
    <li><Link to="/contractdetail" class="dropdown-item" href="#">Contract Detail</Link></li>
    <li><Link to="/contracttemplate" class="dropdown-item">Contract Template Selection</Link></li>
    <li><Link to="" class="dropdown-item">Path Selection</Link></li>
    
  </ul>
</div>
        </button>
      </div>
    </div>
  </div>
  <div className="table-responsive mt-5 contracttable">
    <table className="table table-striped table-bordered text-center">
      <thead>
        <tr>
          <th>Contract ID</th>
          <th>Type Of Contract</th>
          <th>Department</th>
          <th>Last Upadate</th>
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>Procurement</td>
          <td>It</td>
          <td>2024-12-20</td>
          <td>Description....</td>
          <td>
            <span className="badge rounded-pill px-5 py-1 activebadge">
              Active

            </span>
          </td>
          <td>
            <i className="fa-regular fa-eye me-2 myrequesteye" />
            <i class="fa-regular fa-comment" style={{color:'#518bbb'}}></i>
          </td>
        </tr>
        <tr>
          <td>006</td>
          <td>Vendor</td>
          <td>Marketing</td>
          <td>2024-12-18</td>
          <td>Description....</td>
          <td>
            <span className="badge rounded-pill  px-5 py-1 expiredbadge">
              Expired
            </span>
          </td>
          <td>
            <i className="fa-regular fa-eye me-2 myrequesteye" />
            <i class="fa-regular fa-comment" style={{color:'#518bbb'}}></i>
          </td>
        </tr>
        <tr>
          <td>007</td>
          <td>Procurement</td>
          <td>It Network</td>
          <td>2024-12-20</td>
          <td>Description....</td>
          <td>
            <span className="badge rounded-pill  px-4 py-1 renewalbadge">
              Under Renewal
            </span>
          </td>
          <td>
            <i className="fa-regular fa-eye me-2 myrequesteye" />
            <i class="fa-regular fa-comment" style={{color:'#518bbb'}}></i>
          </td>
        </tr>
        <tr>
          <td>008</td>
          <td>Procurement</td>
          <td>It</td>
          <td>2024-12-18</td>
          <td>Description....</td>
          <td>
            <span className="badge rounded-pill  px-5 py-1 expiredbadge">
              Expired
            </span>
          </td>
          <td>
            <i className="fa-regular fa-eye me-2 myrequesteye" />
            <i class="fa-regular fa-comment" style={{color:'#518bbb'}}></i>
          </td>
        </tr>
        <tr>
          <td>009</td>
          <td>Vendor</td>
          <td>Marketing</td>
          <td>2024-12-20</td>
          <td>Description....</td>
          <td>
            <span className="badge rounded-pill  px-5 py-1 activebadge">
              Active
            </span>
          </td>
          <td>
            <i className="fa-regular fa-eye me-2 myrequesteye" />
            <i class="fa-regular fa-comment" style={{color:'#518bbb'}}></i>
          </td>
        </tr>
        <tr>
          <td>010</td>
          <td>Procurement</td>
          <td>It Network</td>
          <td>2024-12-18</td>
          <td>Description....</td>
          <td>
            <span className="badge rounded-pill  px-5 py-1 activebadge">
              Active
            </span>
          </td>
          <td>
            <i className="fa-regular fa-eye me-2 myrequesteye" />
            <i class="fa-regular fa-comment" style={{color:'#518bbb'}}></i>
          </td>
        </tr>
        <tr>
          <td>011</td>
          <td>Vendor</td>
          <td>It</td>
          <td>2024-12-20</td>
          <td>Description....</td>
          <td>
            <span className="badge rounded-pill  px-4 py-1 renewalbadge">
              Under Renewal
            </span>
          </td>
          <td>
            <i className="fa-regular fa-eye me-2 myrequesteye" />
            <i class="fa-regular fa-comment" style={{color:'#518bbb'}}></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  {/* Pagination */}
  <nav aria-label="Page navigation" className="mt-4">
    <ul className="pagination justify-content-center">
      <li className="page-item">
        <Link to=""
          className="page-link text-secondary"
          href="#"
          style={{ border: "none" }}
        >
          Previous
        </Link>
      </li>
      <li className="page-item active mx-3">
        <Link to=""
          className="page-link rounded text-white fw-semibold"
          href="#"
          style={{ backgroundColor: "#0096d4" }}
        >
          1
        </Link>
      </li>
      <li className="page-item">
        <Link to=""
          className="page-link rounded text-dark fw-semibold"
          href="#"
          style={{ backgroundColor: "rgb(212, 212, 212)" }}
        >
          2
        </Link>
      </li>
      <li className="page-item mx-3">
        <Link to=""
          className="page-link rounded text-dark fw-semibold"
          href="#"
          style={{ backgroundColor: "rgb(212, 212, 212)" }}
        >
          3
        </Link>
      </li>
      <li className="page-item">
        <Link to=""
          className="page-link text-secondary"
          href="#"
          style={{ border: "none" }}
        >
          Next
        </Link>
      </li>
    </ul>
  </nav>
</div>
</>
  )
}

export default Contractmanage