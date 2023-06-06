import React from "react";

export default function PortfolioGrid(props: { children: React.ReactNode }) {
  return (
    <>
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row">{props.children}</div>
        </div>
      </section>
    </>
  );
}
