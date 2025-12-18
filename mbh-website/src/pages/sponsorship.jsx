import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import NavigationBar from "../components/navigation";
import Footer from "../components/footer";
import Sponsor from "../assets/images/sponsors/sponsor.png";
import Logo from "../assets/logo name.png";
import OSCE from "../assets/images/sponsors/osce.png";
import UNSW from "../assets/images/sponsors/unsw.png";
import Abbott from "../assets/images/sponsors/abbott.png";
import OneMD from "../assets/images/sponsors/onemd.png";
import EngineersAustralia from "../assets/images/sponsors/ea.png";

import Ansys from "../assets/images/sponsors/ansys.png";
import IHealthE from "../assets/images/sponsors/tyree-ihealthe.png";
import StVincents from "../assets/images/sponsors/st-vincents.png";

const sponsors = [
  { name: "Abbott", img: Abbott },
  { name: "UNSW Sydney", img: UNSW },
  { name: "Office of the Chief Scientist and Engineer", img: OSCE },
  { name: "OneMD", img: OneMD },
  { name: "Engineers Australia", img: EngineersAustralia },
];

const collaborators = [
  { name: "Ansys", img: Ansys },
  { name: "UNSW Tyree IHealthE", img: IHealthE },
  { name: "St Vincent's Hospital", img: StVincents },
];

function Sponsorship() {
  React.useEffect(() => window.scrollTo(0, 0), []);

  // wait for images to load
  const [loading, setLoading] = React.useState(true);
  const [loadingTextIndex, setLoadingTextIndex] = React.useState(0);
  const images = [Sponsor];
  const loadingTexts = ["Beating expectations…"];

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
          style={{ backgroundImage: `url(${Sponsor})`, backgroundPositionX: "50%", backgroundPositionY: "35%" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
          <div className="relative z-10 flex h-full items-center">
            <div className="w-full px-6 md:px-16 pb-10 md:pb-0 justify-center items-center">
              <div className="inline-flex gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.25em]">
                UNSW Mending Broken Hearts
              </div>
              <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Sponsors</h1>
              <p className="mt-3 max-w-xl text-base md:text-lg lg:text-xl text-rose-50/90">
                Let's work together to make a difference.
              </p>
              <div className="mt-5 h-[2px] w-[50%] mx-auto rounded-full bg-gradient-to-r from-rose-300 via-pink-300 to-red-400" />
            </div>
          </div>
          {/* <div className="absolute inset-0 bg-black/30"></div>
          <b className="relative z-10 text-4xl">Sponsors</b>
          <div className="relative z-10 text-white text-2xl">Let's work together to make a difference</div> */}
        </div>
        <div className="w-full h-[auto] bg-[#c50102] flex flex-col px-10 py-15 gap-16 justify-center items-center">
          <div className="text-white text-2xl px-6">
            <b>Current Sponsors</b>
          </div>
          <div className="flex grid grid-cols-1 md:grid-cols-3 gap-16">
            {sponsors.map((s) => (
              <div
                key={s.name}
                className="flex flex-col items-center bg-[#f5f5f5] p-6 text-center text-[#c50102] w-70 gap-6 rounded shadow-lg"
              >
                <div className="py-10">
                  <img src={s.img} alt="company logo" className="h-[60px] w-auto" />
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
                className="flex flex-col items-center bg-[#f5f5f5] p-6 text-center text-[#c50102] w-70 gap-6 rounded shadow-lg"
              >
                <div className="py-10">
                  <img src={c.img} alt="company logo" className="h-[60px] w-auto" />
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
          <div className="flex flex-col md:flex-row px-6 gap-6">
            <button className="bg-white text-[#c50102] text-lg px-6 py-2 rounded-lg border-2 border-transparent hover:bg-red-50 hover:border-[#c50102] transition">
              View our Prospectus
            </button>
            <button className="bg-white text-[#c50102] text-lg px-6 py-2 rounded-lg border-2 border-transparent hover:bg-red-50 hover:border-[#c50102] transition">
              Contact Us
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Sponsorship;
