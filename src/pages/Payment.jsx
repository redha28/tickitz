import { MdDone } from "react-icons/md";
import bcaLogo from "../assets/payment/Bank BCA Logo (SVG-240p) - FileVector69 1.png";
import briLogo from "../assets/payment/Bank BRI (Bank Rakyat Indonesia) Logo (SVG-240p) - FileVector69 1.png";
import danaLogo from "../assets/payment/Logo DANA (PNG-240p) - FileVector69 1.png";
import gopayLogo from "../assets/payment/Logo GoPay (SVG-240p) - FileVector69 1.png";
import googlePayLogo from "../assets/payment/logos_google-pay.png";
import paypalLogo from "../assets/payment/logos_paypal.png";
import visaLogo from "../assets/payment/logos_visa.png";
import ovoLogo from "../assets/payment/Vector.png";
import { useState } from "react";
import { Link, Navigate } from "react-router";

const Payment = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <div className="min-h-screen bg-gray-300 px-4 py-4 lg:px-24 relative">
      <div className="w-full flex justify-center">
        <div className="flex py-4 justify-center gap-4 w-[70%]">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="h-12 w-12 flex justify-center items-center rounded-full bg-green-600">
              <MdDone className="text-white text-2xl font-bold" />
            </div>
            <p className="font-bold">Dates And Time</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-32 border-2 border-dashed"></div>
          </div>
          <div className=" flex flex-col justify-center items-center gap-2">
            <div className="h-12 w-12 flex justify-center items-center rounded-full bg-green-600">
              <MdDone className="text-white text-2xl font-bold" />
            </div>
            <p className="font-bold">Seat</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-32 border-2 border-dashed"></div>
          </div>
          <div className=" flex flex-col justify-center items-center gap-2">
            <div className="h-12 w-12 flex justify-center items-center rounded-full bg-blue-600 font-bold text-white">
              <p>3</p>
            </div>
            <p className="font-bold">Payment</p>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex justify-center">
        <div className="min-w-[50%] bg-white rounded-md shadow px-8 py-12">
          <h1 className="font-bold text-3xl mb-8">Payment Info</h1>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-4 border-b-2 pb-2 border-b-gray-300">
              <p className="text-gray-500 text-md font-semibold">DATE & TIME</p>
              <p className="font-bold text-xl">Tuesday, 07 July 2020 at 02:00pm</p>
            </div>
            <div className="flex flex-col gap-4 border-b-2 pb-2 border-b-gray-300">
              <p className="text-gray-500 text-md font-semibold">MOVIE TITLE</p>
              <p className="font-bold text-xl">Spider-Man: Homecoming</p>
            </div>
            <div className="flex flex-col gap-4 border-b-2 pb-2 border-b-gray-300">
              <p className="text-gray-500 text-md font-semibold">CINEMA NAME</p>
              <p className="font-bold text-xl">CineOne21 Cinema</p>
            </div>
            <div className="flex flex-col gap-4 border-b-2 pb-2 border-b-gray-300">
              <p className="text-gray-500 text-md font-semibold">NUMBER OF TICKETS</p>
              <p className="font-bold text-xl">3 pieces</p>
            </div>
            <div className="flex flex-col gap-4 border-b-2 pb-2 border-b-gray-300">
              <p className="text-gray-500 text-md font-semibold">TOTAL PAYMENT</p>
              <p className="font-bold text-xl text-blue-600">$30,00</p>
            </div>
          </div>
          <p className="font-bold text-3xl mb-8 mt-8 ">Personal Information</p>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="text-gray-500 text-md font-semibold">Full Name</p>
              <div className="px-4 py-3 border-2 border-gray-400 rounded-md">
                <input
                  type="text"
                  className="w-full outline-none font-semibold"
                  placeholder="Enter Your Name"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-gray-500 text-md font-semibold">Email</p>
              <div className="px-4 py-3 border-2 border-gray-400 rounded-md">
                <input
                  type="text"
                  className="w-full outline-none font-semibold"
                  placeholder="tickitz@gmail.com"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-gray-500 text-md font-semibold">Phone Number</p>
              <div className="px-4 py-3 border-2 border-gray-400 rounded-md flex gap-4">
                <div className="h-full border-r-2 border-gray-300 px-4 flex justify-center items-center">
                  <p className="font-bold">+62</p>
                </div>
                <input
                  type="number"
                  className="w-full outline-none font-semibold "
                  placeholder="081201010101"
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p className="font-bold text-3xl mb-8">Payment Method</p>
            <div className="grid grid-cols-4 min-h-40 gap-4">
              <label className="w-40 cursor-pointer h-24  border border-gray-200 shadow-2xl flex justify-center items-center rounded-xl relative">
                <input type="radio" name="brand" value="BCA" className="peer" />
                <img src={googlePayLogo} alt="BCA Logo" className="absolute z-10 " />
                <div className="w-full h-full peer-checked:border-blue-600 peer-checked:border-8 rounded-xl absolute"></div>
              </label>
              <label className="w-40 cursor-pointer h-24 border border-gray-200 shadow-2xl flex justify-center items-center rounded-xl relative">
                <input type="radio" name="brand" value="BCA" className="peer" />
                <img src={visaLogo} alt="BCA Logo" className="absolute z-10 " />
                <div className="w-full h-full peer-checked:border-blue-600 peer-checked:border-8 rounded-xl absolute"></div>
              </label>
              <label className="w-40 cursor-pointer h-24 border border-gray-200 shadow-2xl flex justify-center items-center rounded-xl relative">
                <input type="radio" name="brand" value="BCA" className="peer" />
                <img src={gopayLogo} alt="BCA Logo" className="absolute z-10 " />
                <div className="w-full h-full peer-checked:border-blue-600 peer-checked:border-8 rounded-xl absolute"></div>
              </label>
              <label className="w-40 cursor-pointer h-24 border border-gray-200 shadow-2xl flex justify-center items-center rounded-xl relative">
                <input type="radio" name="brand" value="BCA" className="peer" />
                <img src={paypalLogo} alt="BCA Logo" className="absolute z-10 " />
                <div className="w-full h-full peer-checked:border-blue-600 peer-checked:border-8 rounded-xl absolute"></div>
              </label>
              <label className="w-40 cursor-pointer h-24 border border-gray-200 shadow-2xl flex justify-center items-center rounded-xl relative">
                <input type="radio" name="brand" value="BCA" className="peer" />
                <img src={danaLogo} alt="BCA Logo" className="absolute z-10 " />
                <div className="w-full h-full peer-checked:border-blue-600 peer-checked:border-8 rounded-xl absolute"></div>
              </label>
              <label className="w-40 cursor-pointer h-24 border border-gray-200 shadow-2xl flex justify-center items-center rounded-xl relative">
                <input type="radio" name="brand" value="BCA" className="peer" />
                <img src={bcaLogo} alt="BCA Logo" className="absolute z-10 " />
                <div className="w-full h-full peer-checked:border-blue-600 peer-checked:border-8 rounded-xl absolute"></div>
              </label>
              <label className="w-40 cursor-pointer h-24 border border-gray-200 shadow-2xl flex justify-center items-center rounded-xl relative">
                <input type="radio" name="brand" value="BCA" className="peer" />
                <img src={briLogo} alt="BCA Logo" className="absolute z-10 " />
                <div className="w-full h-full peer-checked:border-blue-600 peer-checked:border-8 rounded-xl absolute"></div>
              </label>
              <label className="w-40 cursor-pointer h-24 border border-gray-200 shadow-2xl flex justify-center items-center rounded-xl relative">
                <input type="radio" name="brand" value="BCA" className="peer" />
                <img src={ovoLogo} alt="BCA Logo" className="absolute z-10 " />
                <div className="w-full h-full peer-checked:border-blue-600 peer-checked:border-8 rounded-xl absolute"></div>
              </label>
            </div>
            <div className="w-full mt-8">
              <button
                className="w-full py-4 text-2xl bg-blue-600 font-bold text-white rounded-xl"
                onClick={() => setIsModal(true)}>
                Pay your order
              </button>
            </div>
          </div>
        </div>
      </div>
      {isModal && (
        <div
          className="w-full h-full absolute flex justify-center items-center top-0 right-0 z-10 bg-black/70"
          onClick={() => {
            setIsModal(false);
          }}>
          <div
            className="w-[600px] flex flex-col bg-white justify-center gap-6 items-center z-10 rounded-md px-6 py-6"
            onClick={(e) => {
              e.stopPropagation();
            }}>
            <h1 className="font-bold text-2xl">Payment Info</h1>
            <div className="flex items-center justify-between w-full">
              <div className="flex">
                <p className="font-semibold text-gray-400">No. Rekening Virtual {"   "} :</p>
              </div>
              <div className="flex items-center gap-4">
                <p>12321328913829724</p>
                <button className="px-4 py-2 border-2 border-blue-600 font-bold rounded-md text-blue-600">
                  Copy
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <p className="font-semibold text-gray-400">Total Payment</p>
              </div>
              <div>
                <p className="font-bold text-blue-600">$30</p>
              </div>
            </div>
            <p className="text-gray-400">
              Pay this payment bill before it is due, on{" "}
              <span className="font-bold text-red-500"> June 23, 2023.</span> If the bill has not
              been paid by the specified time, it will be forfeited
            </p>
            <Link
              to={"/order/payment/succes"}
              className="w-full py-4 bg-blue-600 rounded-md text-center text-white font-bold">
              Check Payment
            </Link>
            <div className="text-blue-600 font-bold mb-8">Pay Later</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
