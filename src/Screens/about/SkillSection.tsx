import React from "react";
import SkillCard from "../../Components/SkillCard";
import {
  FaAngular,
  FaCss3,
  FaGit,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  TbBrandDocker,
  TbBrandMongodb,
  TbBrandNextjs,
  TbBrandReactNative,
  TbBrandRedux,
  TbBrandTypescript,
} from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiDjango, DiNginx } from "react-icons/di";

type Props = {};

export default function SkillSection({}: Props) {
  return (
    <div>
      <p className="sub_title mb-4">My Skills</p>
      <div className="grid gap-8 grid-cols-4 w-fit pb-6 scroll-auto">
        <SkillCard icon={FaHtml5} title="HTML" />
        <SkillCard icon={FaCss3} title="CSS" />
        <SkillCard icon={FaJs} title="Java Script" />
        <SkillCard icon={TbBrandTypescript} title="Type Script" />

        <SkillCard icon={FaNodeJs} title="Node Js" />
        <SkillCard icon={SiExpress} title="Express Js" />
        <SkillCard icon={TbBrandMongodb} title="Mongo DB" />
        <SkillCard icon={FaReact} title="React" />

        <SkillCard icon={TbBrandReactNative} title="React Native" />
        <SkillCard icon={FaAngular} title="Angular" />
        <SkillCard icon={TbBrandNextjs} title="Next Js" />
        <SkillCard icon={TbBrandRedux} title="Redux" />
        <SkillCard icon={RiTailwindCssFill} title="Tailwind" />
        <SkillCard icon={TbBrandDocker} title="Docker" />
        <SkillCard icon={DiNginx} title="Nginx" />

        <SkillCard icon={FaGit} title="Git" />
        <SkillCard icon={FaJava} title="Java" />
        <SkillCard icon={FaPython} title="Python" />
      </div>
    </div>
  );
}
