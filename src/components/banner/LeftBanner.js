import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
import { FiDownload } from "react-icons/fi";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Tech Enthusiast.",
      "Competitive Programmer.",
      "Full Stack Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const resumeLink = "https://drive.google.com/file/d/1iXvcAmvkITVn-xUaXS3HuTgFJjuAtO7q/view?usp=sharing"; // Update with your Drive link

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal"></h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Rajat Kumar</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a pre-final year undergraduate at Indian Institute of Technology,
          Patna. I have been doing competitive programming and full-stack web
          development for the past two years. I have developed multiple
          production websites using MERN stack.
        </p>
      </div>
      {/* Media */}
      <Media />
      <a
        href={resumeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-auto font-semibold h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300"
      >
        <span>R E S U M E</span>
        <FiDownload className="ml-4" />
      </a>
    </div>
  );
};

export default LeftBanner;
