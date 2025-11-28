import { useNavigate } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-auto bottom-0 p-8 bg-[#f5f5f5] flex flex-col items-center justify-between gap-6">
      <div className="text-center text-[#c50102] text-lg">
        <b>Want to get involved?</b> Check out our social media below...
      </div>
      <div className="flex flex-row gap-4">
        <i
          className="fa fa-instagram text-[#c50102] fa-lg"
          onClick={() => window.open("https://www.instagram.com/unswmbh", "_blank", "noopener,noreferrer")}
        ></i>
        <i
          className="fa fa-linkedin-square text-[#c50102] fa-lg"
          onClick={() =>
            window.open("https://www.linkedin.com/company/unswmending-broken-hearts/", "_blank", "noopener,noreferrer")
          }
        ></i>
      </div>
    </div>
  );
}

export default Footer;
