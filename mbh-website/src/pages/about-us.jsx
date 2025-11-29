import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import NavigationBar from "../components/navigation";
import Footer from "../components/footer";
import Us from "../assets/images/heart hands.png";

function AboutUs() {
  React.useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <NavigationBar />
      <div className="w-full flex flex-col pt-20">
        <div
          className="relative w-full h-[50vh] bg-cover bg-no-repeat text-white flex flex-col justify-center items-center text-center text-2xl px-10 gap-6"
          style={{ backgroundImage: `url(${Us})`, backgroundPositionY: "35%" }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <b className="relative z-10 text-4xl">About Us</b>
          <div className="relative z-10 text-white text-2xl">Find out our goals and the impact we aim to have</div>
        </div>
        <div className="w-full h-[auto] bg-[#f5f5f5] flex flex-col px-10 py-15 gap-6">
          <div className="text-2xl px-6">
            <b>Our Mission</b>
          </div>
          <div className="text-lg px-6">
            Established in 2022, MBH is a team of 40 students across Mechanical, Electrical, Software, and Systems
            sub-teams. Our mission is to advance artificial heart technology while inspiring the next generation of
            biomedical engineers.
          </div>
        </div>
        <div className="w-full h-[auto] bg-[#c50102] flex flex-col px-10 py-15 gap-6 text-white">
          <div className="text-2xl px-6">
            <b>What we do</b>
          </div>
          <div className="text-lg px-6">
            Mending Broken Hearts (MBH) is a student-led engineering initiative developing a Total Artificial Heart
            (TAH) to compete in the Heart Hackathon, the world’s first TAH design challenge. The Mending Broken Hearts
            project is part of the <b>Vertically Integrated Projects</b> program at UNSW! We aim to address the burden
            of heart disease and the limitations in existing artificial heart technology by developing an innovative
            total artificial heart, a device that replaces the entire native heart.
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
