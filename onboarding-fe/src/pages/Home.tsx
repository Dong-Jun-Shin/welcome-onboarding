import React from "react";
import { gsap } from "gsap";
import About from "./About";
import Clients from "./Clients";
import Contact from "./Contact";
import Services from "./Services";
import Team from "./Team";
import PortfolioGrid from "../components/base/PortfolioGrid";
import PortfolioItem from "../components/base/PortfolioItem";
import Layout from "../components/layouts/Index";

export default function HomeLayout() {
  const headings = ["Threads", "Explore", "Finish", "Lines", "Southwest", "Window"];
  const subHeadings = ["Illustration", "Graphic Design", "Identity", "Branding", "Website Design", "Photography"];
  const indexes = [0, 1, 2, 3, 4, 5];

  const onEnter = (event: any) => {
    gsap.to(event.currentTarget, { backgroundColor: "#e77614", scale: 1.2 });
  };

  const onLeave = (event: any) => {
    gsap.to(event.currentTarget, { backgroundColor: "#28a92b", scale: 1 });
  };

  return (
    <>
      <div className="box" onMouseEnter={onEnter} onMouseLeave={onLeave}>
        Hover Me
      </div>
      <Layout>
        <Services />
        <PortfolioGrid>
          {indexes.map((idx) => (
            <PortfolioItem key={`portfolio-item-${idx}`} heading={headings[idx]} subHeading={subHeadings[idx]} index={idx + 1} />
          ))}
        </PortfolioGrid>
        <About />
        <Team />
        <Clients />
        <Contact />
      </Layout>
    </>
  );
}
