import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ collapsed }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null); // Tracks the open submenu
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu((prev) => (prev === menuName ? null : menuName));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar">
        <ul className="menu">
          {/* Dashboard Section */}
          <li className={`menu-item ${isActive("/dashbord") ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => navigate("/dashbord")}>
              <i className="fa-solid fa-cubes"></i>
              <span className="menu-text">Dashboard</span>
            </div>
          </li>

          {/* Intake Management Section */}
          <li
            className={`menu-item ${
              isActive("/intakemanagement") ? "active" : ""
            }`}>
            <div
              className="menu-link menu-i"
              onClick={() => navigate("/intakemanagement")}>
              <i className="fa-solid fa-list-check"></i>
              <span className="menu-text">Intake Management</span>
            </div>
          </li>

          {/* Contract Template Section */}
          <li
            className={`menu-item ${
              isActive("/contracttemplate") ? "active" : ""
            }`}>
            <div
              className="menu-link menu-i"
              onClick={() => navigate("/contracttemplate")}>
              <i class="fa-solid fa-file-contract"></i>
              <span className="menu-text">Contract Template</span>
            </div>
          </li>

          {/* Cost Saving Opportunities Section */}
          <li className="menu-item">
            <div
              className="menu-link menu-i"
              onClick={() => toggleSubmenu("costSaving")}>
              <i className="fa-solid fa-arrow-trend-up"></i>
              <span className="menu-text">Cost Saving Opportunities</span>
              <i
                className={`fa-solid fa-chevron-down submenu-arrow ${
                  openSubmenu === "costSaving" ? "rotated" : ""
                }`}></i>
            </div>
          </li>
          <ul
            className={`submenu ${
              openSubmenu === "costSaving" ? "expanded" : "collapsed"
            }`}>
            <li
              className={`submenu-item ${
                isActive("/volumedisc") ? "active" : ""
              }`}
              onClick={() => {
                navigate("/volumedisc");
                setOpenSubmenu(null);
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i> Volume Discounts
            </li>
            <li
              className={`submenu-item ${
                isActive("/suppliercons") ? "active" : ""
              }`}
              onClick={() => {
                navigate("/suppliercons");
                setOpenSubmenu(null);
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i> Supplier
              Consolidation
            </li>
            <li
              className={`submenu-item ${
                isActive("/serviceswo") ? "active" : ""
              }`}
              onClick={() => {
                navigate("/serviceswo");
                setOpenSubmenu(null);
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i> Service/SOW
              Consolidation
            </li>
            <li
              className={`submenu-item ${
                isActive("/honoring") ? "active" : ""
              }`}
              onClick={() => {
                navigate("/honoring");
                setOpenSubmenu(null);
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i> Honoring Old
              Pricing
            </li>
            <li
              className={`submenu-item ${
                isActive("/additionalcomp") ? "active" : ""
              }`}
              onClick={() => {
                navigate("/additionalcomp");
                setOpenSubmenu(null);
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i>{" "}
              Additional/Complementary Service
            </li>
            <li
              className={`submenu-item ${
                isActive("/pricecomp") ? "active" : ""
              }`}
              onClick={() => {
                navigate("/pricecomp");
                setOpenSubmenu(null);
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i> Price Comparisons
            </li>
            <li
              className={`submenu-item ${
                isActive("/multiyear") ? "active" : ""
              }`}
              onClick={() => {
                navigate("/multiyear");
                setOpenSubmenu(null);
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i> Multi-Year
              Contracting
            </li>
          </ul>

          {/* Approval Workflow Section */}
          <li
            className={`menu-item ${
              isActive("/approvalworkflow") ? "active" : ""
            }`}>
            <div
              className="menu-link menu-i"
              onClick={() => navigate("/approvalworkflow")}>
              <i className="fa-solid fa-check-circle"></i>
              <span className="menu-text">Approval Workflow</span>
            </div>
          </li>

          {/* Renewal Notifications Section */}
          <li
            className={`menu-item ${
              isActive("/renewalnotifi") ? "active" : ""
            }`}>
            <div
              className="menu-link menu-i"
              onClick={() => navigate("/renewalnotifi")}>
              <i class="fa-regular fa-comment-dots"></i>
              <span className="menu-text">Renewal Notifications</span>
            </div>
          </li>

          {/* Renewal management Section */}
          <li
            className={`menu-item ${
              isActive("/renewalmanage") ? "active" : ""
            }`}>
            <div
              className="menu-link menu-i"
              onClick={() => navigate("/renewalmanage")}>
              <i class="fa-solid fa-envelope-open-text"></i>
              <span className="menu-text">Renewal Management</span>
            </div>
          </li>

          {/* Contract Management Section */}

          <li className="menu-item">
            <div
              className="menu-link menu-i"
              onClick={() => toggleSubmenu("contractmanage")}>
              <i className="fa-solid fa-arrow-trend-up"></i>
              <span className="menu-text">Contract Management</span>
              <i
                className={`fa-solid fa-chevron-down submenu-arrow ${
                  openSubmenu === "contractmanage" ? "rotated" : ""
                }`}></i>
            </div>
          </li>
          <ul
            className={`submenu ${
              openSubmenu === "contractmanage" ? "expanded" : "collapsed"
            }`}>
            <li
              className={`submenu-item ${
                isActive("/contractmanage") ? "active" : ""
              }`}
              onClick={() => {
                navigate("/contractmanage");
                setOpenSubmenu(null);
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i> Contract Dashbord
            </li>
            <li
              className={`submenu-item ${
                isActive("/contractwearhouse") ? "active" : ""
              }`}
              onClick={() => {
                navigate("/contractwearhouse");
                setOpenSubmenu(null);
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i> All Contract /
              Contract warehouse
            </li>
            <li
              className={`submenu-item ${
                isActive("/addnewcontact") ? "active" : ""
              }`}
              onClick={() => {
                navigate("/addnewcontact");
                setOpenSubmenu(null);
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i> Add Contract
            </li>
          </ul>

          {/* Vendor Performance Section */}
          <li className={`menu-item ${isActive("/vendorper") ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => navigate("/vendorper")}>
              <i class="fa-solid fa-file-signature"></i>
              <span className="menu-text">Vendor Performance</span>
            </div>
          </li>

          {/* Spend Analytics Section */}
          <li
            className={`menu-item ${isActive("/spendanalyt") ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => navigate("/spendanalyt")}>
              <i className="fa-solid fa-chart-line"></i>
              <span className="menu-text">Spend Analytics</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
