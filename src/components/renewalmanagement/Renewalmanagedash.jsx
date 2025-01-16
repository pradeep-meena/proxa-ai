import React from 'react'
import { Link } from 'react-router-dom'
const Renewalmanagedash = () => {
  return (
<>
<div className="container my-5">
  <div className="renual-top">
  <h3 className="mb-4 fw-bold">Renewals Dashboard</h3>
          {/* Upload Button */}
          <div>
          <button
            className="btn btn-success d-flex align-items-center justify-content-center contrabtn"
            style={{
              borderRadius: "5px",
              width: "100%",
              maxWidth: "337px",
              height: "49px",
              border:'none',
              backgroundColor:'#578E7E',
              color:'white'
            }}
          >
            <Link to="/renewalform">Renewal Request Form</Link>
          </button>
        </div>
  </div>
  <div className="table-responsive mt-5">
    <table className="table table-bordered text-center align-middle table-striped">
      <thead className="table-light">
        <tr>
          <th>Contract ID</th>
          <th>Description</th>
          <th>Type</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>Description...</td>
          <td>Procurement</td>
          <td>2024-12-18</td>
          <td>2024-12-20</td>
          <td>Pending Renewal</td>
          <td>
            <i
              className="fa-regular fa-eye approvalicon "
              style={{ color: "#0d99ff" }}
            />
            <i className="fa-solid fa-download mx-2 renewaldownload" />
            <button className="btn btn-renewal">Renew</button>
          </td>
        </tr>
        <tr>
          <td>006</td>
          <td>Description...</td>
          <td>Vendor</td>
          <td>2024-12-20</td>
          <td>2024-12-18</td>
          <td>Renewed</td>
          <td>
            <i
              className="fa-regular fa-eye approvalicon"
              style={{ color: "#0d99ff" }}
            />
            <i className="fa-solid fa-download mx-2 renewaldownload" />
          </td>
        </tr>
        <tr>
          <td>007</td>
          <td>Description...</td>
          <td>Procurement</td>
          <td>2024-12-20</td>
          <td>2024-12-20</td>
          <td>Pending Renewal</td>
          <td>
            <i
              className="fa-regular fa-eye approvalicon"
              style={{ color: "#0d99ff" }}
            />
            <i className="fa-solid fa-download mx-2 renewaldownload" />
            <button className="btn btn-renewal">Renew</button>
          </td>
        </tr>
        <tr>
          <td>008</td>
          <td>Description...</td>
          <td>Procurement</td>
          <td>2024-12-18</td>
          <td>2024-12-18</td>
          <td>Renewed</td>
          <td>
            <i
              className="fa-regular fa-eye approvalicon"
              style={{ color: "#0d99ff" }}
            />
            <i className="fa-solid fa-download mx-2 renewaldownload" />
          </td>
        </tr>
        <tr>
          <td>009</td>
          <td>Description...</td>
          <td>Vendor</td>
          <td>2024-12-20</td>
          <td>2024-12-20</td>
          <td>Renewed</td>
          <td>
            <i
              className="fa-regular fa-eye approvalicon"
              style={{ color: "#0d99ff" }}
            />
            <i className="fa-solid fa-download mx-2 renewaldownload" />
          </td>
        </tr>
        <tr>
          <td>010</td>
          <td>Description...</td>
          <td>Procurement</td>
          <td>2024-12-18</td>
          <td>2024-12-18</td>
          <td>Pending Renewal</td>
          <td>
            <i
              className="fa-regular fa-eye approvalicon"
              style={{ color: "#0d99ff" }}
            />
            <i className="fa-solid fa-download mx-2 renewaldownload" />
            <button className="btn btn-renewal">Renew</button>
          </td>
        </tr>
        <tr>
          <td>011</td>
          <td>Description...</td>
          <td>Vendor</td>
          <td>2024-12-20</td>
          <td>2024-12-20</td>
          <td>Renewed</td>
          <td>
            <i
              className="fa-regular fa-eye approvalicon"
              style={{ color: "#0d99ff" }}
            />
            <i className="fa-solid fa-download mx-2 renewaldownload" />
          </td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
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
</div>
</>
  )
}

export default Renewalmanagedash
