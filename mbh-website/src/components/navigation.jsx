import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import Logo from "../assets/logo.png";

function NavigationBar() {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <div className="w-full h-[80px] fixed top-0 z-50 p-6 bg-[#f5f5f5] flex flex-row items-center justify-between">
      <div className="flex flex-row gap-10">
        <Link to="/" className="no-underline hover:underline transition text-[#c50102] text-lg">
          <img src={Logo} alt="Logo" className="h-[50px] w-auto" />
        </Link>
        {/* navigation links */}
        <nav className="hidden md:flex items-center">
          <div className="flex items-center gap-8">
            <Link to="/about-us" className="no-underline hover:underline transition text-[#c50102] text-lg">
              <b>ABOUT US</b>
            </Link>
            <Link to="/our-team" className="no-underline hover:underline transition text-[#c50102] text-lg">
              <b>OUR TEAM</b>
            </Link>
            <Link to="/events" className="no-underline hover:underline transition text-[#c50102] text-lg">
              <b>EVENTS</b>
            </Link>
            <Link to="/sponsorship" className="no-underline hover:underline transition text-[#c50102] text-lg">
              <b>SPONSORSHIPS</b>
            </Link>
          </div>
        </nav>
      </div>
      <div onClick={() => setOpenMenu(!openMenu)} className="md:hidden">
        <i className="fa fa-bars text-[#c50102] fa-2x"></i>
      </div>
      {openMenu && (
        <>
          <div className="fixed top-[80px] inset-0 bg-black/40 z-30" onClick={() => setOpenMenu(false)}></div>
          <div className="fixed top-[80px] left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-6 text-[#c50102] z-40">
            <Link to="/about-us" className="text-lg font-bold" onClick={() => setOpenMenu(false)}>
              ABOUT US
            </Link>
            <Link to="/our-team" className="text-lg font-bold" onClick={() => setOpenMenu(false)}>
              OUR TEAM
            </Link>
            <Link to="/events" className="text-lg font-bold" onClick={() => setOpenMenu(false)}>
              EVENTS
            </Link>
            <Link to="/sponsorship" className="text-lg font-bold" onClick={() => setOpenMenu(false)}>
              SPONSORSHIPS
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default NavigationBar;
