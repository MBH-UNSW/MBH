import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

function NavigationBar() {
  return (
    <div className="w-full h-[80px] fixed top-0 p-6 bg-[#f5f5f5] flex flex-row items-center justify-between">
      <div className="flex flex-row gap-10">
        <Link to="/" className="no-underline hover:underline transition text-[#c50102] text-lg">
          <b>HOME</b>
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
      <div>
        <i className="fa fa-bars text-[#c50102] fa-2x"></i>
      </div>
    </div>
  );
}

export default NavigationBar;
