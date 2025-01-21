import React, { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  LineElement,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Link } from "react-router-dom";

Chart.register(
  LineController,
  LineElement,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);
const SpendAnalytics = () => {

    const spendTrendsRef = useRef(null);
     const topSpendingVendorsRef = useRef(null);
     const spendTrendsChartRef = useRef(null); // Reference for Spend Trends Chart instance
     const topSpendingVendorsChartRef = useRef(null); // Reference for Top Spending Vendors Chart instance
   
     useEffect(() => {
       // Create Spend Trends Chart
       if (spendTrendsRef.current) {
         const ctx1 = spendTrendsRef.current.getContext("2d");
         if (spendTrendsChartRef.current) {
           spendTrendsChartRef.current.destroy(); // Destroy existing chart instance
         }
         spendTrendsChartRef.current = new Chart(ctx1, {
           type: "line",
           data: {
             labels: ["May", "June", "July", "August", "September"],
             datasets: [
               {
                 label: "Category 1",
                 data: [5, 15, 10, 12, 8],
                 borderColor: "blue",
                 borderWidth: 2,
                 pointStyle: "circle",
                 pointRadius: 4,
                 pointBackgroundColor: "blue",
                 fill: false,
                 tension: 0,
               },
               {
                 label: "Category 2",
                 data: [10, 18, 12, 15, 13],
                 borderColor: "red",
                 borderWidth: 2,
                 pointStyle: "circle",
                 pointRadius: 4,
                 pointBackgroundColor: "red",
                 fill: false,
                 tension: 0,
               },
               {
                 label: "Category 3",
                 data: [7, 12, 14, 18, 20],
                 borderColor: "orange",
                 borderWidth: 2,
                 pointStyle: "circle",
                 pointRadius: 4,
                 pointBackgroundColor: "orange",
                 fill: false,
                 tension: 0,
               },
             ],
           },
           options: {
             responsive: true,
             plugins: {
               legend: {
                 display: false,
               },
               title: {
                 display: false,
               },
             },
             scales: {
               y: {
                 beginAtZero: true,
                 ticks: {
                   stepSize: 5,
                   font: {
                     size: 12,
                   },
                 },
                 grid: {
                   color: "rgba(0, 0, 0, 0.1)",
                 },
               },
               x: {
                 ticks: {
                   font: {
                     size: 12,
                   },
                 },
                 grid: {
                   display: false,
                 },
               },
             },
           },
         });
       }
   
       // Create Top Spending Vendors Chart
       if (topSpendingVendorsRef.current) {
         const ctx2 = topSpendingVendorsRef.current.getContext("2d");
         if (topSpendingVendorsChartRef.current) {
           topSpendingVendorsChartRef.current.destroy(); // Destroy existing chart instance
         }
         topSpendingVendorsChartRef.current = new Chart(ctx2, {
           type: "bar",
           data: {
             labels: ["Dresses", "Sneakers", "Blouses", "Rompers", "Bottoms"],
             datasets: [
               {
                 label: "Amount ($)",
                 data: [498.33, 304.62, 290.93, 280.35, 275.8],
                 backgroundColor: Array(5).fill("rgba(115, 169, 174, 1)"),
                 borderColor: Array(5).fill("rgba(179, 179, 179, 1)"),
                 borderWidth: 1,
               },
             ],
           },
           options: {
             indexAxis: "y",
             responsive: true,
             scales: {
               x: {
                 beginAtZero: true,
               },
             },
             plugins: {
               legend: {
                 display: false,
               },
             },
           },
         });
       }
   
       // Cleanup function to destroy charts
       return () => {
         if (spendTrendsChartRef.current) {
           spendTrendsChartRef.current.destroy();
         }
         if (topSpendingVendorsChartRef.current) {
           topSpendingVendorsChartRef.current.destroy();
         }
       };
     }, []);

  return (
<>
<div className="container my-5">
  <div className="top d-flex flex-wrap justify-content-between align-items-center">
    <div className="heading">
      <h3 className="mb-3 fw-bold">Spend Overview Dashboard</h3>
    </div>
    <div className="mt-3 mt-md-0">
      <button
        type="button"
        className="btn ms-3 px-4 py-1 rounded-3 fw-semibold text-white "
        style={{ backgroundColor: "#578e7e" }}
      >
        <Link className="text-white" to="/spenddetail">Spend Details</Link>
      </button>
    </div>
  </div>
  {/* Summary Cards */}
  <div className="row text-center mb-4 mt-4">
    {/* Card 1 */}
    <div className="col-12 col-sm-6 col-lg-3 mb-3">
      <div
        className="card spendcard text-white fw-semibold h-100 d-flex justify-content-center"
        style={{ backgroundColor: "#ff6567" }}
      >
        <div className="content d-flex justify-content-start align-items-center p-2">
          <div className="icon">
            <i
              className="fa-regular fa-user rounded-circle p-3"
              style={{ backgroundColor: "#fdabab" }}
            />
          </div>
          <div className="text ms-4 text-start">
            <h2 className="card-title mb-0 fw-bold">7</h2>
            <p>Total Spend</p>
          </div>
        </div>
      </div>
    </div>
    {/* Card 2 */}
    <div className="col-12 col-sm-6 col-lg-3 mb-3">
      <div
        className="card spendcard text-white fw-semibold h-100 d-flex justify-content-center"
        style={{ backgroundColor: "#ff9318" }}
      >
        <div className="content d-flex justify-content-start align-items-center p-2">
          <div className="icon">
            <i
              className="fa-regular fa-user rounded-circle p-3"
              style={{ backgroundColor: "#fcc586" }}
            />
          </div>
          <div className="text ms-4 text-start">
            <h2 className="card-title mb-0 fw-bold">40</h2>
            <p>Spend by Category</p>
          </div>
        </div>
      </div>
    </div>
    {/* Card 3 */}
    <div className="col-12 col-sm-6 col-lg-3 mb-3">
      <div
        className="card spendcard text-white fw-semibold h-100 d-flex justify-content-center"
        style={{ backgroundColor: "#39bf1b" }}
      >
        <div className="content d-flex justify-content-start align-items-center p-2">
          <div className="icon">
            <i
              className="fa-regular fa-user rounded-circle p-3"
              style={{ backgroundColor: "#74d25f" }}
            />
          </div>
          <div className="text ms-4 text-start">
            <h2 className="card-title mb-0 fw-bold">16</h2>
            <p>Spend by Vendor</p>
          </div>
        </div>
      </div>
    </div>
    {/* Btn */}
    <div className="col-12 col-sm-6 col-lg-3 mb-3 d-flex align-items-end">
      <div className="content w-100">
        <select className="form-select p-3" aria-label="Default select example">
          <option selected="">Filter</option>
          <option value={1}>Dresses</option>
          <option value={2}>Sneakers</option>
          <option value={3}>Blouses</option>
          <option value={4}>Rompers</option>
          <option value={5}>Bottoms</option>
        </select>
      </div>
    </div>
  </div>
  {/* Charts Section */}
  <div className="row g-4 mt-5">
        <div className="col-md-6">
          <h5>
            <u className="fw-bold">Spend Trends Over Time</u>
          </h5>
          <div className="shadow-sm p-3 mt-3">
            <canvas ref={spendTrendsRef} id="spendTrendsChart" />
          </div>
        </div>
        <div className="col-md-6">
          <h5>
            <u  className="fw-bold">Top Spending Vendors</u>
          </h5>
          <div className="shadow-sm p-3 mt-3">
            <canvas ref={topSpendingVendorsRef} id="topSpendingVendorsChart" />
          </div>
        </div>
      </div>
</div>
</>
  )
}

export default SpendAnalytics
