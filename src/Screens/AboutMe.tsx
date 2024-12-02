import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import AboutBtn from "../Components/AboutBtn";
import Experience from "../Components/Experience";
import "../styles/about.css";

type Props = {};

function AboutMe({}: Props) {
  const [subMenu, setSubMenu] = useState("Experience");
  return (
    <div className="flex resume">
      <div className="max-w-[260px]">
        <p className="sub_title">Why Hire Me?</p>
        <div>
          <TypeAnimation
            sequence={[
              "Eager to learn",
              1000,
              "Handle entire project alone",
              1000,
              "Working with both fontend and backend",
              1000,
              "Develop Web and Mobile applications",
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block", height: 50 }}
            repeat={Infinity}
          />
        </div>

        <div className="mt-4">
          <AboutBtn
            title="Experience"
            active={subMenu == "Experience"}
            onClick={setSubMenu}
          />
          <AboutBtn
            title="Education"
            active={subMenu == "Education"}
            onClick={setSubMenu}
          />
          <AboutBtn
            title="Skills"
            active={subMenu == "Skills"}
            onClick={setSubMenu}
          />
        </div>
      </div>

      <div className="flex-1 content">
        <Experience />
      </div>
    </div>
  );
}

export default AboutMe;
