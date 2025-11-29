import React from "react";
import { useNavigate } from "react-router-dom";

import NavigationBar from "../../components/navigation";
import Footer from "../../components/footer";
import Event from "../../assets/images/events three.jpg";
import HeartHackathon2024 from "../../assets/images/heart hackathon.jpg";
import Logo from "../../assets/logo name.png";

const achievements = [{ img: HeartHackathon2024, year: "2024", place: "3rd Place" }];

function HeartHack() {
  React.useEffect(() => window.scrollTo(0, 0), []);
  const navigate = useNavigate();

  // wait for images to load
  const [loading, setLoading] = React.useState(true);
  const [loadingTextIndex, setLoadingTextIndex] = React.useState(0);
  const images = [HeartHackathon2024];
  const loadingTexts = ["Pumping excitement…"];
  React.useEffect(() => {
    let loadedCount = 0;
    const imageObjects = [];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === images.length) {
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
    }, 1500);
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
          style={{ backgroundImage: `url(${Event})`, backgroundPositionX: "50%", backgroundPositionY: "55%" }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <b className="relative z-10 text-4xl">Education Festival</b>
          <div className="relative z-10 text-white text-2xl">Internal University Competition</div>
        </div>
        <div className="w-full h-[auto] bg-[#f5f5f5] flex flex-col text-center px-10 py-15 gap-6">
          <div className="relative w-full flex items-center py-4 px-6">
            <div
              className="absolute left-6 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => navigate("/events")}
            >
              <i className="fa fa-chevron-left text-[#c50102] text-2xl"></i>
            </div>
            <div className="mx-auto text-2xl font-bold text-center">Heart Hackathon</div>
          </div>
          <div className="text-lg px-6">
            Heart Hackathon is the world’s first total artificial heart design competition,
            <br />
            aiming to nurture and inspire the next generation in cardiovascular innovation.
          </div>
          <div className="px-6">
            <button
              onClick={() => window.open("https://www.hearthackathon.com/", "_blank", "noopener,noreferrer")}
              className="bg-[#c50102] text-white text-lg px-6 py-2 border-2 border-transparent hover:bg-red-50 hover:text-[#c50102] hover:border-[#c50102] transition"
            >
              Find out more
            </button>
          </div>
        </div>
        <div className="w-full h-[auto] bg-[#c50102] flex flex-col text-center px-10 py-15 gap-6">
          <div className="text-white text-2xl px-6">
            <b>Past Achievements</b>
          </div>
          <div className="text-white text-lg px-6">
            <div className="flex flex-wrap gap-6 justify-center items-center">
              {achievements.map((a) => (
                <div
                  key={a.year}
                  className="relative flex flex-col bg-center bg-cover bg-no-repeat px-6 py-15 text-center text-white text-xl w-90 gap-6 rounded shadow-lg items-center"
                  style={{ backgroundImage: `url(${a.img})`, backgroundPositionY: "45%" }}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="z-10">
                    <b>{a.year}</b>
                  </div>
                  <span className="relative z-10 inline-block w-40 text-center pt-6 border-t-4 border-white">
                    <b>{a.place}</b>
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

export default HeartHack;
