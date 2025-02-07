import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


function SupplierConsolidation () {
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
  

  const Supplierdata = [
    {
      category: "Office Furniture",
      supplier: "Supplier A",
      Current: "Supplier X, Supplier Y",
      Spend: "$50,000, $40,000",
      Recommended: "Supplier X",
      Potential: "$10,000",
      status: "New Opportunity",
      action: "",
    },
    {
      category: "Office Furniture",
      supplier: "Supplier A",
      Current: "Supplier X, Supplier Y",
      Spend: "$50,000, $40,000",
      Recommended: "Supplier X",
      Potential: "$10,000",
      status: "New Opportunity",
      action: "",
    },
    {
      category: "Office Furniture",
      supplier: "Supplier A",
      Current: "Supplier X, Supplier Y",
      Spend: "$50,000, $40,000",
      Recommended: "Supplier X",
      Potential: "$10,000",
      status: "New Opportunity",
      action: "",
    },
    {
      category: "Office Furniture",
      supplier: "Supplier A",
      Current: "Supplier X, Supplier Y",
      Spend: "$50,000, $40,000",
      Recommended: "Supplier X",
      Potential: "$10,000",
      status: "New Opportunity",
      action: "",
    },
  ];
  
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
 
  return (
    <div className="container">
      {/* Header Section */}
      <div className="mb-4 text-start">
        <div className="d-flex justify-content-between">
        <h3 className="fw-bold"
          style={{
            lineHeight: "42px",
          }}
        >
          Supplier Consolidation
        </h3>
        <Link to="/supplieredit">
        <button className="p-2 rounded "style={{backgroundColor:'#578e7e',color:'white',border:'none', width:'120px'}}>Add Supplier</button>
        </Link>
        </div>
        <h5 className="mt-5"
          style={{
            lineHeight: "24px",
          }}
        >
          <u  className="fw-bold">Total Suppliers Identified For Consolidation</u>
        </h5>
      </div>

      {/* Table Section */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered text-center">
          <thead className="table-light">
            <tr>
              <th>Category Name</th>
              <th>Supplier Name</th>
              <th>Current Suppliers</th>
              <th>Spend with Each Supplier</th>
              <th>Recommended Supplier</th>
              <th>Potential Savings</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Supplierdata.map((item, index) => (
              <tr key={index}>
                <td>{item.category}</td>
                <td>{item.supplier}</td>
                <td>{item.Current}</td>
                <td>{item.Spend}</td>
                <td>{item. Recommended}</td>
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
      <div className="d-flex justify-content-center my-3">
        <nav aria-label="Page navigation" className="mt-4">
          <ul className="pagination justify-content-center">
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

      {/* Chart Section */}
      <div className="mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <Bar
              data={{
                labels: ["2017", "2018", "2019", "2020"],
                datasets: [
                  {
                    data: [46000, 37000, 36000, 40000],
                    backgroundColor: "#518bbb",
                    label: "Spend with Supplier X",
                  },
                  {
                    data: [27000, 23000, 25000, 18000],
                    backgroundColor: "#c47088",
                    label: "Spend with Supplier Y",
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "top",
                  },
                  title: {
                    display: true,
                    text: "Supplier Spend Over Time",
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 60000,
                    ticks: {
                      stepSize: 10000,
                      callback: (value) =>
                        `$${new Intl.NumberFormat("en-US", {
                          notation: "compact",
                          compactDisplay: "short",
                        }).format(value)}`,
                    },
                  },
                },
              }}
            />
          </div>
        </div>
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
    </div>
  );
}

export default SupplierConsolidation;
