import React from 'react'
import { Link } from 'react-router-dom'

const Myrequest = () => {
  return (
<>
<div className="container mt-5">

{/* Header Section */}

<div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">

  <div>

    <h3 className="fw-bold">My Requests</h3>

    <p className="text-dark mb-0">

      Track the status of your submitted requests

    </p>

  </div>

 <Link to="/intakenewreq">
 <button

className="btn btn-create px-4 py-2 text-white fw-semibold mt-3 mt-md-0"

style={{ backgroundColor: "#578e7e" }}

>

<i className="fa-solid fa-book me-2" />

Create New Request

</button>
 </Link>

</div>

{/* Filters Section */}

<div className="row mb-4 mt-5 gx-3">

  <h5>Filters</h5>

  <div className="col-12 col-md-6 col-lg-4 mb-3">

    <select className="form-select p-3 text-secondary fw-semibold">

      <option selected="">Request Type</option>

      <option value={1}>Goods</option>

      <option value={2}>Services</option>

    </select>

  </div>

  <div className="col-12 col-md-6 col-lg-4">

    <select className="form-select p-3 text-secondary fw-semibold">

      <option selected="">Status</option>

      <option value={1}>Pending</option>

      <option value={2}>Approved</option>

      <option value={3}>Rejected</option>

    </select>

  </div>

</div>

{/* Table Section */}

<div className="table-responsive">

  <table className="table table-striped table-bordered text-center">

    <thead className="table-light">

      <tr>

        <th>Request ID</th>

        <th>Request Type</th>

        <th>Submission Date</th>

        <th>Status</th>

        <th>Action</th>

      </tr>

    </thead>

    <tbody>

      <tr>

        <td>001</td>

        <td>Goods</td>

        <td>2024-12-18</td>

        <td>Pending</td>

        <td className="action-icons">

          <i className="fa-regular fa-eye me-2 myrequesteye" />

          <i className="fa-regular fa-pen-to-square myrequestedit" />

        </td>

      </tr>

      <tr>

        <td>006</td>

        <td>Goods</td>

        <td>2024-12-20</td>

        <td>Approved</td>

        <td className="action-icons">

          <i className="fa-regular fa-eye me-2 myrequesteye" />

          <i className="fa-regular fa-pen-to-square myrequestedit" />

        </td>

      </tr>

      <tr>

        <td>007</td>

        <td>Services</td>

        <td>2024-12-20</td>

        <td>Pending</td>

        <td className="action-icons">

          <i className="fa-regular fa-eye me-2 myrequesteye" />

          <i className="fa-regular fa-pen-to-square myrequestedit" />

        </td>

      </tr>

      <tr>

        <td>008</td>

        <td>Goods</td>

        <td>2024-12-18</td>

        <td>Rejected</td>

        <td className="action-icons">

          <i className="fa-regular fa-eye me-2 myrequesteye" />

          <i className="fa-regular fa-pen-to-square myrequestedit" />

        </td>

      </tr>

      <tr>

        <td>009</td>

        <td>Services</td>

        <td>2024-12-20</td>

        <td>Approved</td>

        <td className="action-icons">

          <i className="fa-regular fa-eye me-2 myrequesteye" />

          <i className="fa-regular fa-pen-to-square myrequestedit" />

        </td>

      </tr>

      <tr>

        <td>010</td>

        <td>Goods</td>

        <td>2024-12-18</td>

        <td>Pending</td>

        <td className="action-icons">

          <i className="fa-regular fa-eye me-2 myrequesteye" />

          <i className="fa-regular fa-pen-to-square myrequestedit" />

        </td>

      </tr>

      <tr>

        <td>011</td>

        <td>Services</td>

        <td>2024-12-20</td>

        <td>Rejected</td>

        <td className="action-icons">

          <i className="fa-regular fa-eye me-2 myrequesteye" />

          <i className="fa-regular fa-pen-to-square myrequestedit" />

        </td>

      </tr>

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

export default Myrequest
