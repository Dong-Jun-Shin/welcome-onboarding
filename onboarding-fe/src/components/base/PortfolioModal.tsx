import React from "react";

export default function PortfolioModal(props: { children: React.ReactNode; index: number }) {
  return (
    <div className="portfolio-modal modal fade" id={`portfolioModal${props.index}`} tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-bs-dismiss="modal">
            <img src="./src/assets/img/close-icon.svg" alt="Close modal" />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">{props.children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
