import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import NavigationBar from "../components/navigation";
import Footer from "../components/footer";
import Team from "../assets/images/team official.png";

const topDogs = [
  { name: "Audrey Adji", position: "Academic Lead", img: "", year: "2025" },
  { name: "Hana Trinh", position: "Project Manager", img: "", year: "2025" },
  { name: "Arif Altundal", position: "Technical Lead", img: "", year: "2025" },
];

const leads = [
  { name: "Kaitlyn Mallon", position: "Mechanical Lead", img: "", year: "2025" },
  { name: "Konny Lee", position: "Electrical Lead", img: "", year: "2025" },
  { name: "Giselle Levine Wijaya", position: "Electrical Lead", img: "", year: "2025" },
  { name: "Emaan Khurram", position: "Software Lead", img: "", year: "2025" },
  { name: "Dev Kanchhal", position: "Control Lead", img: "", year: "2025" },
];

const members = [];

function OurTeam() {
  React.useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <NavigationBar />
      <div className="w-full flex flex-col pt-20">
        <div
          className="relative w-full h-[50vh] bg-cover bg-no-repeat text-white flex flex-col justify-center items-center text-center text-2xl px-10 gap-6"
          style={{ backgroundImage: `url(${Team})`, backgroundPositionY: "45%" }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <b className="relative z-10 text-4xl">Who we are</b>
          <div className="relative z-10 text-white text-2xl">Meet our team of passionate individuals</div>
        </div>
        {/* <div className="w-full h-[40vh] bg-[white] text-[#c50102] flex flex-col justify-center items-center text-center text-2xl px-10 gap-6">
          <b className="text-4xl">Who we are</b>
          Meet our team of passionate individuals
        </div> */}
        <div className="flex flex-col w-full h-[auto] bg-[#c50102] justify-center gap-20 px-6 py-16">
          <div className="flex flex-col gap-6">
            <div className="text-white mx-6 pb-5 text-center text-2xl">Project Leads</div>
            <div className="flex flex-wrap gap-6 justify-center items-center">
              {topDogs.map((l) => (
                <div
                  key={l.name}
                  className="flex flex-col bg-[#f5f5f5] p-6 text-center text-[#c50102] w-60 gap-6 rounded shadow-lg"
                >
                  <div className="mb-4">
                    <b>{l.position}</b>
                  </div>
                  <div className="mb-4">
                    <i className="fa fa-user text-4xl" aria-hidden="true"></i>
                  </div>
                  <div>{l.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-white mx-6 pb-5 text-center text-2xl">Team Leads</div>
            <div className="flex flex-wrap gap-6 justify-center items-center">
              {leads.map((l) => (
                <div
                  key={l.name}
                  className="flex flex-col bg-[#f5f5f5] p-6 text-center text-[#c50102] w-60 gap-6 rounded shadow-lg"
                >
                  <div className="mb-4">
                    <b>{l.position}</b>
                  </div>
                  <div className="mb-4">
                    <i className="fa fa-user text-4xl" aria-hidden="true"></i>
                  </div>
                  <div>{l.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default OurTeam;
