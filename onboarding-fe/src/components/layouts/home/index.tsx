import React from "react";
import { gsap } from "gsap";
import logo from "../../../logo.svg";

export default function HomeLayout() {
  const onEnter = (event: any) => {
    gsap.to(event.currentTarget, { backgroundColor: "#e77614", scale: 1.2 });
  };

  const onLeave = (event: any) => {
    gsap.to(event.currentTarget, { backgroundColor: "#28a92b", scale: 1 });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>home</div>
        <div>abababab</div>
        <div className="box" onMouseEnter={onEnter} onMouseLeave={onLeave}>Hover Me</div>
      </header>
    </div>
  );
}
