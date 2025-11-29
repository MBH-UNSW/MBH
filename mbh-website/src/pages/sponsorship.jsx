import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import NavigationBar from "../components/navigation";
import Footer from "../components/footer";
import Sponsor from "../assets/images/sponsor.png";

const sponsors = [
  { name: "Abbott", img: "" },
  { name: "UNSW Sydney", img: "" },
  { name: "Office of the Chief Scientist and Engineer", img: "" },
];

const collaborators = [
  { name: "Ansys", img: "" },
  { name: "UNSW Tyree IHealthE", img: "" },
  { name: "St Vincent's Hospital", img: "" },
];

function Sponsorship() {
  React.useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <NavigationBar />
      <div className="w-full flex flex-col pt-20">
        <div
          className="relative w-full h-[50vh] bg-cover bg-no-repeat text-white flex flex-col justify-center items-center text-center text-2xl px-10 gap-6"
          style={{ backgroundImage: `url(${Sponsor})`, backgroundPositionY: "35%" }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <b className="relative z-10 text-4xl">Sponsors</b>
          <div className="relative z-10 text-white text-2xl">Let's work together to make a difference</div>
        </div>
        <div className="w-full h-[auto] bg-[#c50102] flex flex-col px-10 py-15 gap-16 justify-center items-center">
          <div className="text-white text-2xl px-6">
            <b>Current Sponsors</b>
          </div>
          <div className="flex grid grid-cols-1 md:grid-cols-3 gap-16">
            {sponsors.map((s) => (
              <div
                key={s.name}
                className="flex flex-col items-center bg-[#f5f5f5] p-6 text-center text-[#c50102] w-60 aspect-square gap-6 rounded shadow-lg"
              >
                <div className="py-10">
                  <i className="fa fa-user text-4xl" aria-hidden="true"></i>
                </div>
                <div className="mb-4">
                  <b>{s.name}</b>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[auto] bg-white flex flex-col px-10 py-15 gap-16 justify-center items-center">
          <div className="text-2xl px-6">
            <b>Current Collaborators</b>
          </div>
          <div className="flex grid grid-cols-1 md:grid-cols-3 gap-16">
            {collaborators.map((c) => (
              <div
                key={c.name}
                className="flex flex-col items-center bg-[#f5f5f5] p-6 text-center text-[#c50102] w-60 aspect-square gap-6 rounded shadow-lg"
              >
                <div className="py-10">
                  <i className="fa fa-user text-4xl" aria-hidden="true"></i>
                </div>
                <div className="mb-4">
                  <b>{c.name}</b>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[auto] bg-[#c50102] flex flex-col px-10 py-15 gap-10 justify-center">
          <div className="flex flex-col gap-6">
            <div className="text-white text-2xl px-6">
              <b>Reasons to sponsor</b>
            </div>
            <div className="text-white text-lg px-6">We are passionate about making a difference</div>
          </div>
          <div className="flex px-6 gap-6">
            <button className="bg-white text-[#c50102] text-lg px-6 py-2 rounded-lg border-2 border-transparent hover:bg-red-50 hover:border-[#c50102] transition">
              View our Prospectus
            </button>
            <button className="bg-white text-[#c50102] text-lg px-6 py-2 rounded-lg border-2 border-transparent hover:bg-red-50 hover:border-[#c50102] transition">
              Want to sponsor us? Contact Us
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Sponsorship;
