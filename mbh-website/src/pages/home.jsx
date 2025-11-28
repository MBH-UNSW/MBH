import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import NavigationBar from "../components/navigation";
import Footer from "../components/footer";

function Home() {
  React.useEffect(() => window.scrollTo(0, 0), []);
  const navigate = useNavigate();
  return (
    <>
      <NavigationBar />
      <div className="w-full flex flex-col pt-20">
        <div className="w-full h-[40vh] bg-[#c50102] text-white flex justify-center items-center text-center text-4xl px-10">
          <b>UNSW Mending Broken Hearts</b>
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
              className="bg-white text-[#c50102] flex justify-center items-center font-bold text-xl p-12 hover:bg-[#f5f5f5] hover:text-[#c50102] transition aspect-square"
            >
              <span className="inline-block w-40 text-center pb-6 border-b-4 border-[#c50102]">About Us</span>
            </div>
            <div
              onClick={() => navigate("/our-team")}
              className="bg-white text-[#c50102] flex justify-center items-center font-bold text-xl p-12 hover:bg-[#f5f5f5] hover:text-[#c50102] transition aspect-square"
            >
              <span className="inline-block w-40 text-center pb-6 border-b-4 border-[#c50102]">Our Team</span>
            </div>
            <div
              onClick={() => navigate("/events")}
              className="bg-white text-[#c50102] flex justify-center items-center font-bold text-xl p-12 hover:bg-[#f5f5f5] hover:text-[#c50102] transition aspect-square"
            >
              <span className="inline-block w-40 text-center pb-6 border-b-4 border-[#c50102]">Events</span>
            </div>
            <div
              onClick={() => navigate("/sponsorship")}
              className="bg-white text-[#c50102] flex justify-center items-center font-bold text-xl p-12 hover:bg-[#f5f5f5] hover:text-[#c50102] transition aspect-square"
            >
              <span className="inline-block w-40 text-center pb-6 border-b-4 border-[#c50102]">Sponsorship</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
