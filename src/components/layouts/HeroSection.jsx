import john3wick from "../../assets/images/john-3-wick.png";
import lionKing from "../../assets/images/lion-king.png";
import spiderMan from "../../assets/images/spiderman.png";
import roblox from "../../assets/images/roblox.jpeg";
// import tenet from "../../assets/images/tenet.png";

const HeroSection = () => {
  return (
    <section className="px-4 md:px-24 py-12 flex flex-col gap-12 lg:flex-row">
      <div className="flex-1 flex flex-col justify-center gap-6">
        <p className="text-2xl md:text-2xl text-blue-600 font-bold text-center md:text-start">
          MOVIE TICKET PURCHASES #1 IN INDONESIA
        </p>
        <p className="text-3xl text-center md:text-start md:text-5xl font-mulish font-semibold">
          Experience the Magic of Cinema: Book Your Tickets Today
        </p>
        <p className="text-gray-400 text-center md:text-start">
          Sign up and get the ticket with a lot of discount
        </p>
      </div>
      <div className="flex-1 flex justify-center 2xl:min-h-[800px] min-h-[350px] md:min-h-[500px] w-full">
        <div className="grid grid-cols-2 grid-rows-3 gap-4 lg:gap-4 w-full">
          <div
            className="h-full bg-cover sm:w-full w-full hover:scale-105 rounded-tl-3xl"
            style={{ backgroundImage: `url(${john3wick})` }}>
            {/* <img src={john3wick} alt="" className="" /> */}
          </div>
          <div
            className="h-full bg-center bg-cover sm:w-full w-full row-span-2 hover:scale-105 rounded-tr-3xl"
            style={{ backgroundImage: `url(${lionKing})` }}>
            {/* <img src={lionKing} alt="" className=" " /> */}
          </div>
          <div
            className="h-full bg-center bg-cover sm:w-full w-full row-start-2 hover:scale-105 row-end-4 rounded-bl-3xl"
            style={{ backgroundImage: `url(${spiderMan})` }}>
            {/* <img src={spiderMan} alt="" className=" " /> */}
          </div>
          <div
            className="h-full sm:w-full w-full bg-cover bg-center col-end-3 hover:scale-105 overflow-hidden rounded-br-3xl"
            style={{ backgroundImage: `url(${roblox})` }}>
            {/* <img src={tenet} alt="" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
