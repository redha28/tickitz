import { Link } from "react-router";
import FituresSection from "../components/layouts/FituresSection";
import HeroSection from "../components/layouts/HeroSection";
import PopularMovie from "../components/layouts/PopularMovie";
import { FaArrowRightLong } from "react-icons/fa6";
import UpcomingMovie from "../components/layouts/UpcomingMovie";
import MoreInfo from "../components/layouts/MoreInfo";

const LandingPage = () => {
  return (
    <section className="">
      <HeroSection />
      <FituresSection />
      <PopularMovie />
      <div className="w-full flex justify-center">
        <Link to={"/movie"} className="font-bold text-blue-600 items-center flex gap-4 text-2xl">
          View All <FaArrowRightLong className="text-xl" />
        </Link>
      </div>
      <UpcomingMovie />
      <MoreInfo />
    </section>
  );
};

export default LandingPage;
