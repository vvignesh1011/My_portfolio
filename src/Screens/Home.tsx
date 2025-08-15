import React, { useRef } from "react";
import "../styles/Home.css";
import { motion } from "framer-motion";
import { IoCodeDownload } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedinIn, FaPhone, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type Props = {};

function Home({}: Props) {
  const resumeRef = useRef<HTMLAnchorElement>(null);
  const downloadResume = () => resumeRef.current?.click();

  return (
    <div className="flex justify-between items-center  home-container flex-wrap-reverse">
      <div className="flex-1 p-4">
        <a
          href="/vignesh's_resume.pdf"
          className="hidden"
          ref={resumeRef}
          download
        ></a>
        <p>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Full Stack Web Developer (MERN)",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Full Stack App Developer (RN)",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </p>
        <div className="home_heading">
          <p>Hello I'am</p>
          <p style={{ color: "var(--primary)" }}>Vignesh</p>
        </div>
        <p>
          I excel at crafting elegant digital experiences and i am proficient in
          various programming languages and technologies
        </p>

        {/* cv and social media links */}
        <div className="home_btn_container">
          <div className="btn flex items-center " onClick={downloadResume}>
            Download CV
            <IoCodeDownload className="ml-4 " size={24} />
          </div>

          <div className="flex items-center">
            <div
              className="btn-round"
              onClick={() =>
                window.open("https://github.com/vvignesh1011", "_blank")
              }
            >
              <FaGithub />
            </div>
            <div
              className="btn-round"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/vignesh-v-28b31b244",
                  "_blank"
                )
              }
            >
              <FaLinkedinIn />
            </div>
            <div
              className="btn-round"
              onClick={() =>
                window.open("mailto:vvignesh1011@gmail.com", "_blank")
              }
            >
              <MdEmail />
            </div>
            <div
              className="btn-round"
              onClick={() => window.open("tel:+917708783714", "_blank")}
            >
              <FaPhoneAlt />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <div className=" relative flex w-fit ml-auto">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="profile_img"
            className="w-[300px] xl:w-[400px] h-[300px] xl:h-[400px] self-center "
            style={{ borderRadius: "50%", padding: 10 }}
          />
          <motion.svg
            className={"w-[300px] xl:w-[400px] h-[300px] xl:h-[400px] absolute"}
            fill={"transparent"}
            viewBox={"0 0 506 506"}
            xmlns={"http://www.w3.org/2000/svg"}
          >
            <motion.circle
              cx={"253"}
              cy={"253"}
              r={"250"}
              stroke={"var(--primary)"}
              strokeWidth={4}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>
        </div>
      </div>
    </div>
  );
}

export default Home;
