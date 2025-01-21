import React from "react";
import { ImArrowUpRight2 , ImArrowDownRight2 } from "react-icons/im";

const ContractapprovalWorkflow = () => {
  return (
    <>
      <div className="container py-5">
        <h3 className="mb-5 fw-semibold">Contract Approval Workflow</h3>
        <div className="position-absulate">
        <div className="row gy-7"style={{marginTop:'190px'}}>
          {/* First Column */}
          <div className="col-md-2">
         
            <div className="workflow-card">
              <span>
                <i className="fa-solid fa-check bg-success rounded-circle p-1 text-white " />
              </span>{" "}
              <br /> Procurement review
              <br />
              <small>
                <span>
                  <i className="fa-regular fa-user me-2" />
                </span>{" "}
                Andrew Brown
              </small>
            </div>
           
          </div>
          
           
          <div className="col-md-2 " style={{top: "-28px"}}> 
         

          <i className="fa-solid fa-arrow-right text-success"></i>
          
            <div className="workflow-card">
           
              <span>
                <i className="fa-solid fa-check bg-success rounded-circle p-1 text-white " />
              </span>{" "}
              <br /> FPSA review
              <br />
              <small>
                <span>
                  <i className="fa-regular fa-user me-2" />
                </span>{" "}
                Paola Martinez
              </small>
            </div>
            </div>
           
           
           
          {/* Second Column */}
          <div className="col-md-2 position-relative " style={{top: "-160px"}}>
          
            <div className="workflow-card">
              <span>
                <i className="fa-solid fa-i bg-success rounded-circle px-2 py-1 text-white " />
              </span>{" "}
              <br /> Legal review
              <br />
              <small>
                <span>
                  <i className="fa-regular fa-user me-2" />
                </span>{" "}
                Jonathan Garwood
              </small>
            </div>
            <ImArrowUpRight2 className="text-success" />
            <div className="workflow-line">
            
              
            </div>
            <i className="fa-solid fa-arrow-right text-success"></i>
            <div className="workflow-card">
              <span>
                <i className="fa-brands fa-atlassian bg-primary rounded-circle p-2 text-white " />
              </span>{" "}
              <br /> IT review
              <br />
              <small>
                <span>
                  <i className="fa-regular fa-user me-2" />
                </span>{" "}
                Ciara Dakota
              </small>
            </div>
            <div className="workflow-line">
              <i className="fa-solid fa-arrow-down text-success"></i>
            </div>
            <div className="workflow-card">
              <span>
                <i className="fa-solid fa-lock bg-success rounded-circle px-2 py-2 text-white " />
              </span>{" "}
              <br /> Fraud & Insurance
              <br />
              <small>
                <span>
                  <i className="fa-regular fa-user me-2" />
                </span>{" "}
                Richard Roe
              </small>
            </div>
            <div className="workflow-line">
              <i className="fa-solid fa-arrow-down text-success"></i>
            </div>
            <div className="workflow-card">
              <span>
              <i className="fa-solid fa-i bg-success rounded-circle px-2 py-1 text-white " />
              </span>{" "}
              <br /> Ai & Analytics
              <br />
              <small>
                <span>
                  <i className="fa-regular fa-user me-2" />
                </span>{" "}
                 Jonathan Garwood
              </small>
            </div>
            <div className="workflow-line">
              <i className="fa-solid fa-arrow-down text-success"></i>
            </div>
            <div className="workflow-card">
              <span>
              <i className="fa-brands fa-atlassian bg-primary rounded-circle p-2 text-white " />
              </span>{" "}
              <br /> Cyber Security 
              <br />
              <small>
                <span>
                  <i className="fa-regular fa-user me-2" />
                </span>{" "}
                Clara Dakota 
              </small>
            </div>
            <div className="workflow-line">
              <i className="fa-solid fa-arrow-down text-success"></i>
            </div>
            <div className="workflow-card">
              <span>
                <i className="fa-solid fa-lock bg-success rounded-circle px-2 py-2 text-white " />
              </span>{" "}
              <br /> Data Regulatory 
              <br />
              <small>
                <span>
                  <i className="fa-regular fa-user me-2" />
                </span>{" "}
                Richard Roe
              </small>
            </div>
          </div>
          {/* Third Column */}
          <div className="col-md-2">
          <i className="fa-solid fa-arrow-right text-success"></i>

            <div className="workflow-card " style={{height:'103px'}}>
          

              <span>
                <i className="fa-solid fa-check bg-success rounded-circle p-1 text-white " />
              </span>{" "}
              <br /> Send vendor portal
            </div>
            <div className="workflow-line">
            
            </div>
         
            
          
          </div>
          {/* Fourth Column */}
          <div className="col-md-2">
          <i className="fa-solid fa-arrow-right text-success"></i>
         
          <div className="workflow-card"  style={{height:'103px'}}>
            

            <span>
              <i className="fa-solid fa-check bg-success rounded-circle p-1 text-white " />
            </span>{" "}
            <br /> Create vendor record in NetSuite
           
          </div> 
          
          </div>
         
          
          <div className="col-md-2 position-relative "style={{top:'-80px'}} >
       
            <div className="row">
            
              <div className="col-md-12">
              
              
              <div className="workflow-card" >
              
              <span>
                <i className="fa-solid fa-check bg-success rounded-circle p-1 text-white " />
              </span>{" "}
              <br /> Contract signature
              <br />
              <small>
                <span>
                  <i className="fa-regular fa-user me-2" />
                </span>{" "}
                Jimmy Zhang
              </small>
             
            </div>
            <ImArrowUpRight2 className="text-success" />
              </div>
              
              <div className="col-md-12">
              <ImArrowDownRight2 className="text-success"/>
              <div className="workflow-card"  style={{height:'103px' }}>
              <span>
                <i className="fa-solid fa-check bg-success rounded-circle p-1 text-white " />
              </span>{" "}
              <br /> Create PO in NetSuite
            </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default ContractapprovalWorkflow;
