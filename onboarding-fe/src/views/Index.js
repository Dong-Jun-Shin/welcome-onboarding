/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Container, Row } from "reactstrap";

// reactstrap components

// core components

// index page sections
import Alerts from "./IndexSections/Alerts.js";
import Buttons from "./IndexSections/Buttons.js";
import Carousel from "./IndexSections/Carousel.js";
import CustomControls from "./IndexSections/CustomControls.js";
import Datepicker from "./IndexSections/Datepicker.js";
import Download from "./IndexSections/Download.js";
import Hero from "./IndexSections/Hero.js";
import Icons from "./IndexSections/Icons.js";
import Inputs from "./IndexSections/Inputs.js";
import Labels from "./IndexSections/Labels.js";
import Login from "./IndexSections/Login.js";
import Menus from "./IndexSections/Menus.js";
import Modals from "./IndexSections/Modals.js";
import Navbars from "./IndexSections/Navbars.js";
import Pagination from "./IndexSections/Pagination.js";
import Pills from "./IndexSections/Pills.js";
import Progress from "./IndexSections/Progress.js";
import Tabs from "./IndexSections/Tabs.js";
import TooltipPopover from "./IndexSections/TooltipPopover.js";
import Typography from "./IndexSections/Typography.js";
import CardsFooter from "../components/Footers/CardsFooter.js";
import DemoNavbar from "../components/Navbars/DemoNavbar.js";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <Hero />
          <Buttons />
          <Inputs />
          <section className="section">
            <Container>
              <CustomControls />
              <Menus />
            </Container>
          </section>
          <Navbars />
          <section className="section section-components">
            <Container>
              <Tabs />
              <Row className="row-grid justify-content-between align-items-center mt-lg">
                <Progress />
                <Pagination />
              </Row>
              <Row className="row-grid justify-content-between">
                <Pills />
                <Labels />
              </Row>
              <Alerts />
              <Typography />
              <Modals />
              <Datepicker />
              <TooltipPopover />
            </Container>
          </section>
          <Carousel />
          <Icons />
          <Login />
          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Index;
