import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
const ValuDiscount = () => {
  const [visible, setVisible] = useState(false);

  // Placeholder functions for accept and reject actions
  const acceptFunc = () => {
    console.log("Action accepted");
  };

  const rejectFunc = () => {
    console.log("Action rejected");
  };

  const confirm = () => {
    setVisible(true); // Show the dialog
  };

  const volumedata = [
    {
      category: "Office Supplies",
      supplier: "Supplier A",
      volume: "10,000 units",
      threshold: "12,000 units (10%)",
      savings: "$2,000",
      recommendedSupplier: "Supplier A",
      status: "New Opportunity",
    },
    {
      category: "Office Supplies",
      supplier: "Supplier A",
      volume: "10,000 units",
      threshold: "12,000 units (10%)",
      savings: "$2,000",
      recommendedSupplier: "Supplier A",
      status: "New Opportunity",
    },
    {
      category: "Office Supplies",
      supplier: "Supplier A",
      volume: "10,000 units",
      threshold: "12,000 units (10%)",
      savings: "$2,000",
      recommendedSupplier: "Supplier A",
      status: "New Opportunity",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="top d-flex flex-wrap justify-content-between align-items-center">
          <div className=" heading">
            <h2 className="mb-3 fw-bold">Volume Discounts</h2>
          </div>
        </div>
        <div className="totalheading mt-4">
          <h5>
            <u className="fw-bold">Total Estimated Savings</u>
          </h5>
        </div>
        <div className="table-responsive mt-3">
          <table className="table table-striped table-bordered text-center">
            <thead>
              <tr>
                <th>Category Name</th>
                <th>Supplier Name</th>
                <th>Historical Volume Purchased (last 12 months)</th>
                <th>Discount Threshold</th>
                <th>Estimated Savings</th>
                <th>Recommended Supplier</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {volumedata.map((item, index) => (
                <tr key={index}>
                  <td>{item.category}</td>
                  <td>{item.supplier}</td>
                  <td>{item.volume}</td>
                  <td>{item.threshold}</td>
                  <td>{item.savings}</td>
                  <td>{item.recommendedSupplier}</td>
                  <td>{item.status}</td>
                  <td>
                    <i
                      className="fa-regular fa-eye text-primary mx-2"
                      style={{ cursor: "pointer" }}
                      title="View"
                    />
                    <i
                      className="fa-solid fa-circle-check text-success mx-2"
                      onClick={confirm}
                      style={{ cursor: "pointer" }}
                      title="Confirm"
                    />
                    <i
                      className="fa-solid fa-xmark text-danger mx-2"
                      onClick={() => setVisible(true)} // Show dialog for reject action
                      style={{ cursor: "pointer" }}
                      title="Delete"
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
                style={{ border: "none" }}>
                Previous
              </a>
            </li>
            <li className="page-item active mx-3">
              <a
                className="page-link rounded text-white fw-semibold"
                href="#"
                style={{ backgroundColor: "#0096d4" }}>
                1
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link rounded text-dark fw-semibold"
                href="#"
                style={{ backgroundColor: "rgb(212, 212, 212)" }}>
                2
              </a>
            </li>
            <li className="page-item mx-3">
              <a
                className="page-link rounded text-dark fw-semibold"
                href="#"
                style={{ backgroundColor: "rgb(212, 212, 212)" }}>
                3
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link text-secondary"
                href="#"
                style={{ border: "none" }}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Confirmation Dialog */}
      <ConfirmDialog
        visible={visible}
        onHide={() => setVisible(false)}
        message="Are you sure you want to proceed?"
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        accept={acceptFunc}
        reject={rejectFunc}
        acceptLabel="Yes"
        rejectLabel="No"
        breakpoints={{ "960px": "75vw", "640px": "100vw" }}
        style={{
          maxWidth: "90%",
          width: "20vw",
        }}
      />
    </>
  );
};

export default ValuDiscount;
