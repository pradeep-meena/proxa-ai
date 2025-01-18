import React from "react";

const ContractapprovalWorkflow = () => {
  return (
    <>
      <div className="container py-5">
        <h3 className="mb-5 fw-semibold">Contract Approval Workflow</h3>
        <div className="row">
          {/* First Column */}
          <div className="col-md-3">
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
            <div className="workflow-line">
              <i className="fa-solid fa-arrow-down text-success"></i>
            </div>
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
          <div className="col-md-3 position-relative" style={{top: "-28px"}}>
            <i className="fa-solid fa-arrow-right text-success"></i>
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
            <div className="workflow-line">
              <i className="fa-solid fa-arrow-down text-success"></i>
            </div>
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
              <br /> Security review
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
          <div className="col-md-3">
            <div className="workflow-card">
              <span>
                <i className="fa-solid fa-check bg-success rounded-circle p-1 text-white " />
              </span>{" "}
              <br /> Send vendor portal
            </div>
            <div className="workflow-line">
              <i className="fa-solid fa-arrow-down text-success"></i>
            </div>
            <div className="workflow-card">
              <span>
                <i className="fa-solid fa-check bg-success rounded-circle p-1 text-white " />
              </span>{" "}
              <br /> Create vendor record in NetSuite
            </div>
          </div>
          {/* Fourth Column */}
          <div className="col-md-3">
            <div className="workflow-card">
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
            <div className="workflow-line">
              <i className="fa-solid fa-arrow-down text-success"></i>
            </div>
            <div className="workflow-card">
              <span>
                <i className="fa-solid fa-check bg-success rounded-circle p-1 text-white " />
              </span>{" "}
              <br /> Create PO in NetSuite
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContractapprovalWorkflow;
