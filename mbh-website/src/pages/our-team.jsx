import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import NavigationBar from "../components/navigation";
import Footer from "../components/footer";
import Team from "../assets/images/team official.png";
import Logo from "../assets/logo name.png";

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

  // wait for images to load
  const [loading, setLoading] = React.useState(true);
  const [loadingTextIndex, setLoadingTextIndex] = React.useState(0);
  const images = [Team];
  const loadingTexts = ["Pumping heart..."];

  React.useEffect(() => {
    let countLoadedImg = 0;
    const imageObjects = [];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        countLoadedImg += 1;
        if (countLoadedImg === images.length) {
          const totalDuration = loadingTexts.length * 1000;
          setTimeout(() => setLoading(false), totalDuration);
        }
      };
      imageObjects.push(img);
    });
    return () => imageObjects.forEach((img) => (img.onload = null));
  }, []);

  React.useEffect(() => {
    if (!loading) return;
    const interval = setInterval(() => {
      setLoadingTextIndex((prev) =>
        prev + 1 === loadingTexts.length ? loadingTexts.length : (prev + 1) % loadingTexts.length
      );
    }, 2500);
    return () => clearInterval(interval);
  }, [loading]);

  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col gap-16 justify-center items-center text-xl text-[#c50102] font-bold px-4 text-center">
        <img src={Logo} alt="Logo" className="h-[100px] w-auto" />
        {loadingTexts[loadingTextIndex]}
      </div>
    );
  }

  return (
    <>
      <NavigationBar />
      <div className="w-full flex flex-col pt-20">
        <div
          className="relative w-full h-[50vh] bg-cover bg-no-repeat text-white flex flex-col justify-center items-center text-center text-2xl px-10 gap-6"
          style={{ backgroundImage: `url(${Team})`, backgroundPositionX: "50%", backgroundPositionY: "45%" }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <b className="relative z-10 text-4xl">Who we are</b>
          <div className="relative z-10 text-white text-2xl">Meet our team of passionate individuals</div>
        </div>
        <div className="flex flex-col w-full h-[auto] bg-[#c50102] justify-center gap-20 px-6 py-16">
          <div className="flex flex-col gap-6">
            <div className="text-white mx-6 pb-5 text-center text-2xl font-bold">Project Leads</div>
            <div className="flex flex-wrap gap-6 justify-center items-center">
              {topDogs.map((l) => (
                <div
                  key={l.name}
                  className="flex flex-col bg-[#f5f5f5] p-6 text-center w-60 gap-6 rounded shadow-lg items-center hover:opacity-90 transition"
                >
                  <div className="text-[#c50102]">
                    <b>{l.position}</b>
                  </div>
                  <span className="relative z-10 inline-block w-40 text-center text-black pt-6 border-t-2 border-[#c50102]">
                    <b>{l.name}</b>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-white mx-6 pb-5 text-center text-2xl font-bold">Team Leads</div>
            <div className="flex flex-wrap gap-6 justify-center items-center">
              {leads.map((l) => (
                <div
                  key={l.name}
                  className="flex flex-col bg-[#f5f5f5] p-6 text-center w-60 gap-6 rounded shadow-lg items-center hover:opacity-90 transition"
                >
                  <div className="text-[#c50102]">
                    <b>{l.position}</b>
                  </div>
                  <span className="relative z-10 inline-block w-40 text-center text-black pt-6 border-t-2 border-[#c50102]">
                    <b>{l.name}</b>
                  </span>
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
