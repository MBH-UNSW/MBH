import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import NavigationBar from "../components/navigation";
import Footer from "../components/footer";
import MBHOfficial from "../assets/images/team official.png";
import AboutUs from "../assets/images/stairs.png";
import OurTeam from "../assets/images/fun team.jpg";
import Events from "../assets/images/vip.png";
import Sponsor from "../assets/images/sponsors/sponsor.png";
import Logo from "../assets/logo name.png";
import Vienna from "../assets/images/vienna win.jpeg";

function Home() {
  React.useEffect(() => window.scrollTo(0, 0), []);
  const navigate = useNavigate();

  // wait for images to load
  const [loading, setLoading] = React.useState(true);
  const [loadingTextIndex, setLoadingTextIndex] = React.useState(0);
  const images = [MBHOfficial, AboutUs, Events];
  const loadingTexts = [
    "Total artificial heart… initializing…",
    "Synchronizing flow...",
    "Almost ready…",
  ];
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
        prev + 1 === loadingTexts.length
          ? loadingTexts.length
          : (prev + 1) % loadingTexts.length
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
          className="relative w-full h-[55vh] bg-center bg-cover bg-no-repeat text-white"
          style={{
            backgroundImage: `url(${MBHOfficial})`,
            backgroundPositionY: "45%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
          <div className="relative z-10 flex h-full items-end md:items-center">
            <div className="w-full px-6 md:px-16 pb-10 md:pb-0">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.25em]">
                Student-Led Artificial Heart Team
              </div>
              <h1 className="mt-4 text-left text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                UNSW Mending Broken Hearts
              </h1>
              <p className="mt-3 max-w-xl text-left text-base md:text-lg lg:text-xl text-rose-50/90">
                Advancing artificial heart technology while inspiring the next
                generation of biomedical engineers.
              </p>
              <div className="mt-5 h-[2px] w-24 rounded-full bg-gradient-to-r from-rose-300 via-pink-300 to-red-400" />
            </div>
          </div>
        </div>
        <div className="w-full h-[auto] bg-[#f5f5f5] flex flex-col px-10 py-15 gap-6">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 lg:flex-row lg:items-stretch lg:gap-12">
            <div className="relative w-full lg:w-1/2">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg">
                <img
                  src={Vienna}
                  alt="MBH at 2025 Heart Hackathon, Vienna"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="relative w-full lg:w-1/2 lg:-ml-24 z-10">
              <div
                className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#D81B60]/15 via-[#7B1FA2]/10 to-[#1E88E5]/15 blur-xl"
                aria-hidden="true"
              />
              <div className="relative rounded-3xl border border-black/5 bg-white px-8 py-7 shadow-xl">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D81B60]">
                  Latest
                </div>
                <h2 className="mb-3 text-xl font-semibold text-gray-900">
                  1st Place at the 2025 Heart Hackathon – Vienna, Austria 🏆🇦🇹
                </h2>
                <p className="text-base leading-relaxed text-gray-700">
                  We’re thrilled to share that the UNSW Mending Broken Hearts
                  team has won 1st place at the 2025 Heart Hackathon in Vienna,
                  Austria, among 13 university teams from across 5 continents.
                  Congrats to all the other participating teams! 🌟
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*<div className="w-full h-[auto] bg-[#f5f5f5] flex flex-col px-10 py-15 gap-6">
          <div className="text-2xl px-6">
            <b>Our Mission</b>
          </div>
          <div className="text-lg px-6">
            Established in 2022, MBH is a team of 40 students across Mechanical,
            Electrical, Software, and Systems sub-teams. Our mission is to
            advance artificial heart technology while inspiring the next
            generation of biomedical engineers.
          </div>
          <div className="px-6">
            <button
              onClick={() => navigate("/about-us")}
              className="bg-[#c50102] text-white text-lg px-6 py-2 border-2 border-transparent hover:bg-red-50 hover:text-[#c50102] hover:border-[#c50102] transition"
            >
              See More
            </button>
          </div>
        </div>*/}
        <div className="w-full bg-[#c50102] flex justify-center items-center text-4xl py-20 md:py-12 px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div
              onClick={() => navigate("/about-us")}
              className="relative bg-center bg-cover bg-no-repeat text-white flex justify-center items-center font-bold text-xl p-12 hover:opacity-90 transition aspect-square rounded-lg overflow-hidden"
              style={{ backgroundImage: `url(${AboutUs})` }}
            >
              <div className="absolute inset-0 bg-black/30 z-0"></div>
              <span className="relative z-10 inline-block w-40 text-center pb-6 border-b-4 border-white">
                About Us
              </span>
            </div>
            <div
              onClick={() => navigate("/our-team")}
              className="relative bg-center bg-cover bg-no-repeat text-white flex justify-center items-center font-bold text-xl p-12 hover:opacity-90 transition aspect-square rounded-lg overflow-hidden"
              style={{ backgroundImage: `url(${OurTeam})` }}
            >
              <div className="absolute inset-0 bg-black/30 z-0"></div>
              <span className="relative z-10 inline-block w-40 text-center pb-6 border-b-4 border-white">
                Our Team
              </span>
            </div>
            <div
              onClick={() => navigate("/events")}
              className="relative bg-center bg-cover bg-no-repeat text-white flex justify-center items-center font-bold text-xl p-12 hover:opacity-90 transition aspect-square rounded-lg overflow-hidden"
              style={{ backgroundImage: `url(${Events})` }}
            >
              <div className="absolute inset-0 bg-black/30 z-0"></div>
              <span className="relative z-10 inline-block w-40 text-center pb-6 border-b-4 border-white">
                Events
              </span>
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
