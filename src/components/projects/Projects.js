import React from "react";
import Title from "../layouts/Title";
import {
  projectFour,
  projectTwo,
  projectThree,
  projectone,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="IHMTC Registration Portal"
          des="Official Registration and Accommodation Portal of the 5th International Heat and Mass Transfer Conference (14th - 17th December 2023) attracting 400+ participants worldwide."
          src={projectone}
          github="https://github.com/erajatt/IHMTC_Reg_and_Acc_Portal"
          livesite="https://ihmtc2023.co.in/"
        />
        <ProjectsCard
          title="NJATH (Online Treasure-hunt game)"
          des="An online treasure-hunt website developed as a part of IIT Patna's Tech-fest Celesta. Leaded a team of 3 members and handled a huge traffic of 1000+ users for continous three days."
          src={projectTwo}
          github="https://github.com/erajatt/NJATH"
          livesite="https://njath-2023.vercel.app/"
        />
        <ProjectsCard
          title="3D T-shirt Customization app"
          des="A t-shirt design application where users can use their creativity to design t-shirts from scratch with custom colors and logos of their choice. Integrated a 3D t-shirt model using Three.js"
          src={projectThree}
          github="https://github.com/erajatt/3DTShirtApp"
          livesite="https://3d-t-shirt-app.vercel.app/"
        />
        <ProjectsCard
          title="NHPR Clone"
          des="Developed a clone for the National Healthcare Providers Registry website. Included both email verification and OTP-based mobile verification."
          src={projectFour}
          github="https://github.com/erajatt/NHPR_Registration"
          livesite="https://nhpr-registration.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
