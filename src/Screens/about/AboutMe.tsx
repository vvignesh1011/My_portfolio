import React, { useCallback, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import AboutBtn from "../../Components/AboutBtn";
import "../../styles/about.css";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import SkillSection from "./SkillSection";

type Props = {};

function AboutMe({}: Props) {
  const [subMenu, setSubMenu] = useState<"Experience" | "Education" | "Skills">(
    "Experience"
  );

  const RenderSection = useCallback(() => {
    if (subMenu == "Experience") return <ExperienceSection />;
    if (subMenu == "Education") return <EducationSection />;
    return <SkillSection />;
  }, [subMenu]);

  return (
    <div className="flex resume flex-wrap">
      <div className="md:max-w-[260px] w-full">
        <p className="sub_title">Why Hire Me?</p>
        <div>
          <TypeAnimation
            sequence={[
              "Eager to learn",
              1000,
              "Handle entire project alone",
              1000,
              "Working with both frontend and backend",
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

      <div className="flex-1 md:ml-[50px] mx-auto">
        <RenderSection />
      </div>
    </div>
  );
}

export default AboutMe;
