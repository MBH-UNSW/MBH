import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import NavigationBar from "../components/navigation";
import Footer from "../components/footer";
import MBHOfficial from "../assets/images/team official.png";
import AboutUs from "../assets/images/stairs.png";
import OurTeam from "../assets/images/fun team.jpg";
import Events from "../assets/images/vip.png";
import Sponsor from "../assets/images/sponsor.png";

function Home() {
  React.useEffect(() => window.scrollTo(0, 0), []);
  const navigate = useNavigate();
  return (
    <>
      <NavigationBar />
      <div className="w-full flex flex-col pt-20">
        <div
          className="relative w-full h-[50vh] bg-center bg-cover bg-no-repeat text-white flex justify-center items-center text-center text-4xl px-10"
          style={{ backgroundImage: `url(${MBHOfficial})`, backgroundPositionY: "45%" }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <b className="relative z-10">UNSW Mending Broken Hearts</b>
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
          <div className="px-6">
            <button className="bg-[#c50102] text-white text-lg px-6 py-2 border-2 border-transparent hover:bg-red-50 hover:text-[#c50102] hover:border-[#c50102] transition">
              See More
            </button>
          </div>
        </div>
        <div className="w-full bg-[#c50102] flex justify-center items-center text-4xl py-20 md:py-12 px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div
              onClick={() => navigate("/about-us")}
              className="relative bg-center bg-cover bg-no-repeat text-white flex justify-center items-center font-bold text-xl p-12 hover:opacity-90 transition aspect-square rounded-lg overflow-hidden"
              style={{ backgroundImage: `url(${AboutUs})` }}
            >
              <div className="absolute inset-0 bg-black/30 z-0"></div>
              <span className="relative z-10 inline-block w-40 text-center pb-6 border-b-4 border-white">About Us</span>
            </div>
            <div
              onClick={() => navigate("/our-team")}
              className="relative bg-center bg-cover bg-no-repeat text-white flex justify-center items-center font-bold text-xl p-12 hover:opacity-90 transition aspect-square rounded-lg overflow-hidden"
              style={{ backgroundImage: `url(${OurTeam})` }}
            >
              <div className="absolute inset-0 bg-black/30 z-0"></div>
              <span className="relative z-10 inline-block w-40 text-center pb-6 border-b-4 border-white">Our Team</span>
            </div>
            <div
              onClick={() => navigate("/events")}
              className="relative bg-center bg-cover bg-no-repeat text-white flex justify-center items-center font-bold text-xl p-12 hover:opacity-90 transition aspect-square rounded-lg overflow-hidden"
              style={{ backgroundImage: `url(${Events})` }}
            >
              <div className="absolute inset-0 bg-black/30 z-0"></div>
              <span className="relative z-10 inline-block w-40 text-center pb-6 border-b-4 border-white">Events</span>
            </div>
            <div
              onClick={() => navigate("/sponsorship")}
              className="relative bg-center bg-cover bg-no-repeat text-white flex justify-center items-center font-bold text-xl p-12 hover:opacity-90 transition aspect-square rounded-lg overflow-hidden"
              style={{ backgroundImage: `url(${Sponsor})` }}
            >
              <div className="absolute inset-0 bg-black/30 z-0"></div>
              <span className="relative z-10 inline-block w-40 text-center pb-6 border-b-4 border-white">
                Sponsorship
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
