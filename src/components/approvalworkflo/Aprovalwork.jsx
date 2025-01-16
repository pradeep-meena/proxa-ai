import React from 'react'
import { Link } from 'react-router-dom'
const Aprovalwork = () => {
  return (
  <>
        <div className="container my-5">
  <h3 className="mb-4 fw-bold">Approval Requests</h3>
  <div className="table-responsive">
    <table className="table table-bordered text-center align-middle table-striped">
      <thead className="table-light">
        <tr>
          <th>Request ID</th>
          <th>Requester Name</th>
          <th>Department</th>
          <th>Category</th>
          <th>Request Date</th>
          <th>Status</th>
          <th>Urgency</th>
          <th>Approver(s)</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>John Doe</td>
          <td>IT</td>
          <td>Software Purchase</td>
          <td>2024-12-20</td>
          <td>Pending</td>
          <td>High</td>
          <td>Jane Smith, Mark Brown</td>
          <td className="approvalicon">
            <Link to="/contractapproval"><i className="fa-regular fa-eye" style={{ color: "#0d99ff" }} /></Link>
            <i className="fa-solid fa-check text-success mx-2" />
            <i className="fa-solid fa-xmark text-danger" />
          </td>
        </tr>
        <tr>
          <td>002</td>
          <td>Sarah Lee</td>
          <td>Marketing</td>
          <td>Vendor Service</td>
          <td>2024-12-18</td>
          <td>Approved</td>
          <td>Medium</td>
          <td>Emily White</td>
          <td className="approvalicon">
            <Link to="/contractapproval"><i className="fa-regular fa-eye" style={{ color: "#0d99ff" }} /></Link>
            <i className="fa-solid fa-check text-success mx-2" />
            <i className="fa-solid fa-xmark text-danger" />
          </td>
        </tr>
        <tr>
          <td>003</td>
          <td>John Deo</td>
          <td>HR</td>
          <td>Software Purchase</td>
          <td>2024-12-20</td>
          <td>Rejected</td>
          <td>Low</td>
          <td>James Green</td>
          <td className="approvalicon">
            <Link to="/contractapproval"><i className="fa-regular fa-eye" style={{ color: "#0d99ff" }} /></Link>
          </td>
        </tr>
        <tr>
          <td>004</td>
          <td>Sarah Lee</td>
          <td>Marketing</td>
          <td>Venodr Service</td>
          <td>2024-12-18</td>
          <td>Approved</td>
          <td>Medium</td>
          <td>William Clark</td>
          <td className="approvalicon">
            <Link to="/contractapproval"><i className="fa-regular fa-eye" style={{ color: "#0d99ff" }} /></Link>
          </td>
        </tr>
        <tr>
          <td>005</td>
          <td>John Deo</td>
          <td>IT</td>
          <td>Software Purchase</td>
          <td>2024-12-20</td>
          <td>Rejected</td>
          <td>Low</td>
          <td>Lisa Taylor</td>
          <td className="approvalicon">
            <Link to="/contractapproval"><i className="fa-regular fa-eye" style={{ color: "#0d99ff" }} /></Link>
          </td>
        </tr>
        <tr>
          <td>006</td>
          <td>Sarah Lee</td>
          <td>Finance</td>
          <td>Vendor Service</td>
          <td>2024-12-18</td>
          <td>Approved</td>
          <td>Medium</td>
          <td>Emily White</td>
          <td className="approvalicon">
            <Link to="/contractapproval"><i className="fa-regular fa-eye" style={{ color: "#0d99ff" }} /></Link>
          </td>
        </tr>
        <tr>
          <td>007</td>
          <td>John Doe</td>
          <td>HR</td>
          <td>Software Purchase</td>
          <td>2024-12-20</td>
          <td>Pending</td>
          <td>High</td>
          <td>Jane Smith, Mark Brown</td>
          <td className="approvalicon">
            <Link to="/contractapproval"><i className="fa-regular fa-eye" style={{ color: "#0d99ff" }} /></Link>
            <i className="fa-solid fa-check text-success mx-2" />
            <i className="fa-solid fa-xmark text-danger" />
          </td>
        </tr>
        <tr>
          <td>008</td>
          <td>Sarah Lee</td>
          <td>Marketing</td>
          <td>Vendor Service</td>
          <td>2024-12-18</td>
          <td>Rejected</td>
          <td>Medium</td>
          <td>Emily White</td>
          <td className="approvalicon">
            <Link to="/contractapproval"><i className="fa-regular fa-eye" style={{ color: "#0d99ff" }} /></Link>
          </td>
        </tr>
        <tr>
          <td>009</td>
          <td>John Doe</td>
          <td>Operations</td>
          <td>Software Purchase</td>
          <td>2024-12-20</td>
          <td>Pending</td>
          <td>Low</td>
          <td>Jane Smith, Mark Brown</td>
          <td className="approvalicon">
            <Link to="/contractapproval"><i className="fa-regular fa-eye" style={{ color: "#0d99ff" }} /></Link>
            <i className="fa-solid fa-check text-success mx-2" />
            <i className="fa-solid fa-xmark text-danger" />
          </td>
        </tr>
        <tr>
          <td>010</td>
          <td>Sarah Lee</td>
          <td>Marketing</td>
          <td>Vendor Service</td>
          <td>2024-12-18</td>
          <td>Approved</td>
          <td>Medium</td>
          <td>Emily White</td>
          <td className="approvalicon">
            <Link to="/contractapproval"><i className="fa-regular fa-eye" style={{ color: "#0d99ff" }} /></Link>
          </td>
        </tr>
        {/* Add other rows as needed */}
      </tbody>
    </table>
  </div>
  {/* Pagination Section */}
  <nav aria-label="Page navigation" className="mt-4">
    <ul className="pagination justify-content-center flex-wrap">
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

export default Aprovalwork
