import React from "react";
import NavigationBar from "../components/navigation";
import Footer from "../components/footer";
import Event from "../assets/images/events one.jpg";
import VIP from "../assets/images/vip.png";
import EduFest from "../assets/images/edufest.jpg";
import HeartHack from "../assets/images/heart hackathon.jpg";

function Events() {
  React.useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <NavigationBar />
      <div className="w-full flex flex-col pt-20">
        <div
          className="relative w-full h-[50vh] bg-cover bg-no-repeat text-white flex flex-col justify-center items-center text-center text-2xl px-10 gap-6"
          style={{ backgroundImage: `url(${Event})`, backgroundPositionY: "35%" }}
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
                <button className="bg-[#c50102] text-white text-lg px-6 py-2 border-2 border-transparent hover:bg-red-50 hover:text-[#c50102] hover:border-[#c50102] transition">
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
                <button className="bg-[#c50102] text-white text-lg px-6 py-2 border-2 border-transparent hover:bg-red-50 hover:text-[#c50102] hover:border-[#c50102] transition">
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
