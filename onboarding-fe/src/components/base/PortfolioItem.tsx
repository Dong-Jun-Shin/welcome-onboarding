import React from "react";
import PortfolioModal from "./PortfolioModal";
import ProjectDetails from "../../pages/ProjectDetails";

export default function PortfolioItem(props: { heading: string; subHeading: string; index: number }) {
  const { heading, subHeading, index } = props;

  return (
    <>
      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="portfolio-item">
          <a className="portfolio-link" data-bs-toggle="modal" href={`#portfolioModal${index}`}>
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src={`./src/assets/img/portfolio/${index}.jpg`} alt="..." />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">{heading}</div>
            <div className="portfolio-caption-subheading text-muted">{subHeading}</div>
          </div>
        </div>
      </div>
      <PortfolioModal index={index}>
        <ProjectDetails index={index} />
      </PortfolioModal>
    </>
  );
}
