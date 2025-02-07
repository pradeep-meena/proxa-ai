import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
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
import { Link } from "react-router-dom";


function PriceComparisons() {
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

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  return (
    <div className="container">
      {/* Header Section */}
      <div className="mb-4 text-start">
      <div className="d-flex justify-content-between"> 
        <h1
          style={{
            fontFamily: "Urbanist",
            fontWeight: "700",
            fontSize: "35px",
            lineHeight: "42px",
          }}
        >
          Price Comparison
        </h1>
        <Link to="/pricecomparisonsprice">
        <button className="p-2 rounded "style={{backgroundColor:'#578e7e',color:'white',border:'none', width:'220px'}}>Price Comparison</button>
        </Link>
        </div>
        <h5 className="mt-5"
          style={{
            fontFamily: "Urbanist",
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "24px",
          }}
        >
          <u>Multiple Supplier Quotations</u>
        </h5>
      </div>

      {/* Table Section */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered text-center">
          <thead className="table-light">
            <tr>
              <th>Supplier Name</th>
              <th>Product/Service</th>
              <th>Price Quoted</th>
              <th>Delivery Term</th>
              <th>Additional Benefits/Features</th>
              <th>Recommended Supplier</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                "Supplier Name": "Supplier A",
                "Product/Service": "Office Chairs",
                "Price Quoted": "$200/unit",
                "Delivery Term": "2-Week",
                "Additional Benefits/Features": "3-year warranty",
                "Recommended Supplier": "Yes",
              },
              {
                "Supplier Name": "Supplier C",
                "Product/Service": "Office Chairs",
                "Price Quoted": "$200/unit",
                "Delivery Term": "2-Week",
                "Additional Benefits/Features": "3-year warranty",
                "Recommended Supplier": "",
              },
              {
                "Supplier Name": "Supplier B",
                "Product/Service": "Office Chairs",
                "Price Quoted": "$200/unit",
                "Delivery Term": "2-Week",
                "Additional Benefits/Features": "No Warranty",
                "Recommended Supplier": "",
              },
              {
                "Supplier Name": "Supplier D",
                "Product/Service": "Office Chairs",
                "Price Quoted": "$200/unit",
                "Delivery Term": "3-Week",
                "Additional Benefits/Features": "3-year warranty",
                "Recommended Supplier": "Yes",
              },
            ].map((row, index) => (
              <tr key={index}>
                <td>{row["Supplier Name"]}</td>
                <td>{row["Product/Service"]}</td>
                <td>{row["Price Quoted"]}</td>
                <td>{row["Delivery Term"]}</td>
                <td>{row["Additional Benefits/Features"]}</td>
                <td>{row["Recommended Supplier"]}</td>
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
                    label: "Spend with Supplier X",
                    data: [46000, 37000, 36000, 40000],
                    backgroundColor: "#518bbb",
                  },
                  {
                    label: "Spend with Supplier Y",
                    data: [27000, 23000, 25000, 18000],
                    backgroundColor: "#c47088",
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
                  tooltip: {
                    callbacks: {
                      label: (context) => `$${context.raw / 1000}K`,
                    },
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 60000,
                    ticks: {
                      stepSize: 10000,
                      callback: (value) => `$${value / 1000}K`,
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

export default PriceComparisons;
