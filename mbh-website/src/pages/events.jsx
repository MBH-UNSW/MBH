import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import NavigationBar from "../components/navigation";
import Footer from "../components/footer";

function Events() {
  React.useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <NavigationBar />
      <div className="w-full flex flex-col pt-20">
        <div className="p-6 text-center">in construction</div>
        <Footer />
      </div>
    </>
  );
}

export default Events;
