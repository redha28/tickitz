import { BiSolidCheckShield } from "react-icons/bi";
import { LuMessagesSquare } from "react-icons/lu";
import { RiCheckboxCircleFill } from "react-icons/ri";

const FituresContent = ({ icon, title, desc }) => {
  return (
    <div className="flex flex-col gap-3 items-center lg:items-start">
      <div>
        {icon === "shieldDone" && (
          <div className="px-4 py-4 bg-gray-200 rounded-full max-w-max">
            <BiSolidCheckShield className="text-blue-600 font-bold text-3xl" />
          </div>
        )}
        {icon === "checkCircle" && (
          <div className="px-4 py-4 bg-gray-200 rounded-full max-w-max">
            <RiCheckboxCircleFill className="text-blue-600 font-bold text-3xl" />
          </div>
        )}
        {icon === "message" && (
          <div className="px-4 py-4 bg-gray-200 rounded-full max-w-max">
            <LuMessagesSquare className="text-blue-600 font-bold text-3xl" />
          </div>
        )}
      </div>
      <p className="font-bold text-2xl text-center lg:text-start">{title}</p>
      <p className="text-gray-500 text-center lg:text-start">{desc}</p>
    </div>
  );
};

export default FituresContent;
