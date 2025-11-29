import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import NavigationBar from "../components/navigation";
import Footer from "../components/footer";
import Event from "../assets/images/events one.jpg";
import VIP from "../assets/images/vip.png";
import EduFest from "../assets/images/edufest one.jpg";
import HeartHack from "../assets/images/heart hackathon.jpg";
import Logo from "../assets/logo name.png";

function Events() {
  React.useEffect(() => window.scrollTo(0, 0), []);
  const navigate = useNavigate();

  // wait for images to load
  const [loading, setLoading] = React.useState(true);
  const [loadingTextIndex, setLoadingTextIndex] = React.useState(0);
  const images = [Event, VIP, EduFest, HeartHack];
  const loadingTexts = ["Pumping excitement…"];

  React.useEffect(() => {
    let countLoadedImg = 0;
    const imageObjects = [];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        countLoadedImg += 1;
        if (countLoadedImg === images.length) {
          const totalDuration = loadingTexts.length * 1000; // 1s per phrase
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
    }, 1000);
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
          style={{ backgroundImage: `url(${Event})`, backgroundPositionX: "50%", backgroundPositionY: "35%" }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <b className="relative z-10 text-4xl">What's on at MBH?</b>
          <div className="relative z-10 text-white text-2xl">Find out what events we have and our competitions</div>
        </div>
        <div className="flex flex-col w-full h-[auto] bg-[#c50102] justify-center items-center gap-20 px-6 py-16">
          <div className="flex grid grid-cols-1 md:grid-cols-3 gap-16 justify-center items-center">
            {/* vip */}
            <div
              className="relative flex flex-col bg-cover bg-center bg-no-repeat gap-6 p-6 justify-center items-center text-white w-70 aspect-square"
              style={{ backgroundImage: `url(${VIP})` }}
            >
              <div className="absolute inset-0 bg-black/30"></div>
              <span className="relative z-10 inline-block w-40 text-center pb-4 border-b-4 border-white font-bold text-2xl">
                VIP Consortium
              </span>
              <div className="relative z-10 px-6">
                <button className="bg-[#c50102] text-white text-lg px-6 py-2 border-2 border-transparent hover:bg-red-50 hover:text-[#c50102] hover:border-[#c50102] transition">
                  See More
                </button>
              </div>
            </div>
            {/* education festival */}
            <div
              className="relative flex flex-col bg-cover bg-center bg-no-repeat gap-6 p-6 justify-center items-center text-white w-70 aspect-square"
              style={{ backgroundImage: `url(${EduFest})` }}
            >
              <div className="absolute inset-0 bg-black/30"></div>
              <span className="relative z-10 inline-block w-40 text-center pb-4 border-b-4 border-white font-bold text-2xl">
                Education Festival
              </span>
              <div className="relative z-10 px-6">
                <button
                  onClick={() => navigate("/events/education-festival")}
                  className="bg-[#c50102] text-white text-lg px-6 py-2 border-2 border-transparent hover:bg-red-50 hover:text-[#c50102] hover:border-[#c50102] transition"
                >
                  See More
                </button>
              </div>
            </div>
            {/* heart hackathon */}
            <div
              className="relative flex flex-col bg-cover bg-center bg-no-repeat gap-6 p-6 justify-center items-center text-white w-70 aspect-square"
              style={{ backgroundImage: `url(${HeartHack})` }}
            >
              <div className="absolute inset-0 bg-black/30"></div>
              <span className="relative z-10 inline-block w-40 text-center pb-4 border-b-4 border-white font-bold text-2xl">
                Heart Hackathon
              </span>
              <div className="relative z-10 px-6">
                <button
                  onClick={() => navigate("/events/heart-hackathon")}
                  className="bg-[#c50102] text-white text-lg px-6 py-2 border-2 border-transparent hover:bg-red-50 hover:text-[#c50102] hover:border-[#c50102] transition"
                >
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Events;
