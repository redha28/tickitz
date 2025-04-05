import Icon from "../../components/elements/Icon";
import FormAuth from "../../components/fragments/FormAuth";
import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import useTitle from "../../hooks/useTitle";

const SignUp = () => {
  useTitle("New User");
  return (
    <section>
      <div className="flex justify-center">
        <div className="bg-white px-4 mb-4 rounded-2xl">
          <Icon />
        </div>
      </div>
      <div className="bg-white min-w-[600px] px-20 py-6 rounded-xl shadow-white flex flex-col gap-4  ">
        <div className="flex justify-between">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-12 h-12 flex justify-center items-center font-bold text-white bg-blue-600 rounded-full">
              1
            </div>
            <p className="font-bold">Fill Form</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-20 border-dashed border-gray-300 border-t-2"></div>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-12 h-12 flex justify-center items-center font-bold text-white bg-gray-300 rounded-full">
              2
            </div>
            <p className="text-gray-400">Activate</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-20 border-dashed border-gray-300 border-t-2"></div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-12 h-12 flex justify-center items-center font-bold text-white bg-gray-300 rounded-full">
              3
            </div>
            <p className="text-gray-400">Done</p>
          </div>
        </div>
        <FormAuth type={"regist"} />
        <p className="text-center text-gray-400">
          Already have an account?
          <Link to={"/auth"} className="text-blue-600 font-bold">
            {" "}
            Sign In
          </Link>
        </p>
        <div className="flex gap-4 items-center">
          <div className="flex-1 h-[2px] bg-gray-300"></div>
          <p className="text-gray-400">Or</p>
          <div className="flex-1 h-[2px] bg-gray-300"></div>
        </div>
        <div className="flex gap-8">
          <Link
            to={""}
            className="flex-1 flex shadow-2xl active:scale-95 justify-center items-center gap-4 px-2 py-3">
            <FcGoogle className="text-3xl" />
            <p className=" font-bold">Google</p>
          </Link>
          <Link
            to={""}
            className="flex-1 flex shadow-2xl active:scale-95 justify-center items-center gap-4 px-2 py-3">
            <FaFacebook className="text-3xl saturate-200 text-blue-600 " />
            <p className=" font-bold">Facebook</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
