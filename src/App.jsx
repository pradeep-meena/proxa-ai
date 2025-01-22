import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import { useState } from "react";
import Myrequest from "./components/intakemnagement/Myrequest";
import ContractTemplateSelection from "./components/contracttemplate/ContractTemplateSelection";
import PathSelection from "./components/contracttemplate/PathSelection";
import ValuDiscount from "./components/costsaving/ValuDiscount";
import SupplierConsolidation from "./components/costsaving/SupplierConsolidation";
import Servicesow from "./components/costsaving/Servicesow";
import HonoringOldPricing from "./components/costsaving/HonoringOldPricing";
import PriceComparisons from "./components/costsaving/PriceComparisons";
import Aprovalwork from "./components/approvalworkflo/Aprovalwork";
import EditRenewal from "./components/renawalnotif/EditRenewal";
import Renewalmanagedash from "./components/renewalmanagement/renewalmanagedash";
import Contractmanage from "./components/contractmanage/Contractmanage";
import VendorPerformanceManagement from "./components/vendorperfo/VendorPerformanceManagement";
import SpendAnalytics from "./components/spendanalytics/SpendAnalytics";
import Dashboard from "./components/dashbord/Dashbord";
import IntakeManagement from "./components/intakemnagement/IntakeManagement";
import CreateNewRequest from "./components/intakemnagement/CreateNewRequest";
import Login from "./authtication/Login";
import AditionalComplementry from "./components/costsaving/AditionalComplementry";
import SpendDetail from "./components/spendanalytics/SpendDetail";
import MultiYearContracting from "./components/costsaving/MultiYearContracting";
import AddNewContract from "./components/contractmanage/AddNewContract";
import ContractapprovalWorkflow from "./components/approvalworkflo/ContractapprovalWorkflow";
import AllContractWearehouse from "./components/contractmanage/AllContractWearehouse";
import NotificationPreferences from "./components/renawalnotif/NotificationPreferences";
import ContractDetails from "./components/contractmanage/ContractDetails";
import RenewalRequestForm from "./components/renewalmanagement/RenewalRequestForm";
import RenewalWebform from "./components/renewalmanagement/RenewalWebform";
import DocumentPriview from "./components/contracttemplate/DocumentPriview";
import SupplierEditPage from "./components/costsaving/costedit/SupplierEditPage";
import SowEditPage from "./components/costsaving/costedit/SowEditPage";
import AddOldPrice from "./components/costsaving/costedit/AddOldPrice";
import PriceComparisonsform from "./components/costsaving/costedit/PriceComparisonsform";
import MultiYearEdit from "./components/costsaving/costedit/MultiYearEdit";
import AditionalEditPage from "./components/costsaving/costedit/AditionalEditPage";
import AddDepartmenet from "./components/Add Category/Sub Category/AddDepartmenet";
import AddTransaction from "./components/Add Category/Sub Category/AddTransaction";
import CategoryEditPage from "./components/intakemnagement/addcate/CategoryEditPage";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState (false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  const location = useLocation();

  const hideLayout = location.pathname === "/";
  return (
    <>

    {/* navbar */}
    {!hideLayout && <Navbar toggleSidebar={toggleSidebar} />}
    {/* navbar end */}
    {/* sidebar start */}
      <div className={`main-content  ${hideLayout ? "" : ""}`}>
      {!hideLayout && <Sidebar collapsed={isSidebarCollapsed} />}
    {/* sidebar end */}
    {/* right side  */}
      <div className={`right-side-content ${isSidebarCollapsed ? "collapsed " : ""  }`} >
          <Routes>
            {/* login signup */}
            <Route path="/" element={<Login/>}/>
            {/* login signup */}
            {/* dashbord */}
            <Route path="/dashboard" element={<Dashboard/>}/>
            {/* dashbord */}
            {/* intakemanagement */}
            <Route path="/intakemanagement" element={<IntakeManagement/>}/>
            <Route path="/intakenewreq" element={<CreateNewRequest/>}/>
            <Route path="/intakemyrequ" element={<Myrequest/>}/>
            <Route path="/intakecateedit" element={<CategoryEditPage/>}/>
            {/* intakemanagement */}
            <Route path="/contracttemplate" element={<ContractTemplateSelection/>}/>
            <Route path="/costumeagent" element={<PathSelection/>}/>
            <Route path="/volumedisc" element={<ValuDiscount/>}/>
            <Route path="/suppliercons" element={<SupplierConsolidation/>}/>
            <Route path="/serviceswo" element={<Servicesow/>}/>
            <Route path="/honoring" element={<HonoringOldPricing/>}/>
            <Route path="/addoldpricehonering" element={<AddOldPrice/>}/>
            <Route path="/pricecomp" element={<PriceComparisons/>}/>
            <Route path="/approvalworkflow" element={<Aprovalwork/>}/>
            <Route path="/editrenewalnoti" element={<EditRenewal/>}/>
            <Route path="/renewalmanage" element={<Renewalmanagedash/>}/>
            <Route path="/contractmanage" element={<Contractmanage/>}/>
            <Route path="/addnewcontact" element={<AddNewContract/>}/>
            <Route path="/vendorper" element={<VendorPerformanceManagement/>}/>
            <Route path="/spendanalyt" element={<SpendAnalytics/>}/>
            <Route path="/spenddetail" element={<SpendDetail/>}/>
            <Route path="/multiyear" element={<MultiYearContracting/>}/>
            <Route path="/multiyearedit" element={<MultiYearEdit/>}/>
            <Route path="/additionalcomp" element={<AditionalComplementry/>}/>
            <Route path="/contractapproval" element={<ContractapprovalWorkflow/>}/>
            <Route path="/contractwearhouse" element={<AllContractWearehouse/>}/>
            <Route path="/renewalnotifi" element={<NotificationPreferences/>}/>
            <Route path="/contractdetail" element={<ContractDetails/>}/>
            <Route path="/renewalform" element={<RenewalRequestForm/>}/>
            <Route path="/renewaldocument" element={<RenewalWebform/>}/>
            <Route path="/documentpre" element={<DocumentPriview/>}/>
            <Route path="/supplieredit" element={<SupplierEditPage
            />}/>
            <Route path="/pricecomparisonsprice" element={<PriceComparisonsform
            />}/>
            <Route path="/sowedit" element={<SowEditPage
            />}/> 
            <Route path="/additionaledit" element={<AditionalEditPage/>}/>
            <Route path="/adddepartment" element={<AddDepartmenet/>}/>
             <Route path="/addtransaction" element={<AddTransaction/>}/>
            
            
          </Routes>
        </div>
        {/* right end  */}
      </div>
    </>
  );
}
export default App;


