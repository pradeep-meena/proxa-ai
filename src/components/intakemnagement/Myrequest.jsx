import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Myrequest = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleOpenModal = (request) => {
    setSelectedRequest(request);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRequest(null);
  };

  // Sample request data
  const requests = [
    { id: "001", type: "Goods", date: "2024-12-18", status: "Pending" },
    { id: "006", type: "Goods", date: "2024-12-20", status: "Approved" },
    { id: "007", type: "Services", date: "2024-12-20", status: "Pending" },
    { id: "008", type: "Goods", date: "2024-12-18", status: "Rejected" },
    { id: "009", type: "Services", date: "2024-12-20", status: "Approved" },
    { id: "010", type: "Goods", date: "2024-12-18", status: "Pending" },
    { id: "011", type: "Services", date: "2024-12-20", status: "Rejected" },
  ];

  return (
    <>
      <div className="container mt-5">
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
          <div>
            <h3 className="fw-bold">My Requests</h3>
            <p className="text-dark mb-0">Track the status of your submitted requests</p>
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
          <div className="col-12 col-md-6 col-lg-6 mb-3">
            <select className="form-select p-3 text-secondary fw-semibold">
              <option defaultValue>Request Type</option>
              <option value="1">Goods</option>
              <option value="2">Services</option>
            </select>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <select className="form-select p-3 text-secondary fw-semibold">
              <option defaultValue>Status</option>
              <option value="1">Pending</option>
              <option value="2">Approved</option>
              <option value="3">Rejected</option>
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
              {requests.map((request) => (
                <tr key={request.id}>
                  <td>{request.id}</td>
                  <td>{request.type}</td>
                  <td>{request.date}</td>
                  <td>{request.status}</td>
                  <td className="action-icons">
                    <i
                      className="fa-regular fa-eye me-2 myrequesteye"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleOpenModal(request)}
                    />
                    <i className="fa-regular fa-pen-to-square myrequestedit" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal Section */}
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Request Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedRequest ? (
              <>
                <h5>Details for Request ID: {selectedRequest.id}</h5>
                <ul>
                  <li>
                    <strong>Request Type:</strong> {selectedRequest.type}
                  </li>
                  <li>
                    <strong>Submission Date:</strong> {selectedRequest.date}
                  </li>
                  <li>
                    <strong>Status:</strong> {selectedRequest.status}
                  </li>
                </ul>
              </>
            ) : (
              <p>No request selected</p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Pagination Section */}
        <nav aria-label="Page navigation" className="mt-4">
          <ul className="pagination justify-content-center flex-wrap">
            <li className="page-item">
              <a className="page-link text-secondary" href="#" style={{ border: "none" }}>
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
              <a className="page-link text-secondary" href="#" style={{ border: "none" }}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Myrequest;
