import { MdDone } from "react-icons/md";
import Button from "../components/elements/Button";
import hiflix from "../assets/images/hiflix.png";
const MovieOrder = () => {
  return (
    <section className="min-h-screen bg-gray-300 px-4 py-4 lg:px-24">
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
            <div className="h-12 w-12 flex justify-center items-center rounded-full bg-blue-600 text-white">
              <p>2</p>
            </div>
            <p className="font-bold">Seat</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-32 border-2 border-dashed"></div>
          </div>
          <div className=" flex flex-col justify-center items-center gap-2">
            <div className="h-12 w-12 flex justify-center items-center rounded-full bg-gray-500 text-white">
              <p>3</p>
            </div>
            <p className="font-bold">Payment</p>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-[5] flex flex-col gap-4 bg-white px-4 py-8">
          <div className="border-2 border-gray-300 flex px-4 py-4 gap-4">
            <div
              className="w-60 h-36 flex-1  bg-cover"
              style={{
                backgroundImage: `url(https://s3-alpha-sig.figma.com/img/166e/1a86/44251a092a8b683b8fa185edb10acbd5?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MKP~MhCcjd8wv4MeshWJnjpi-k3fV38Mlh~P3Z2V2N3VI7YhF1P81m5k6H8Js1jMpEj2dGLbzdUOGWDw1uKikvSSNdoL6DTDber02p35TXYE21pChQ-3NXl7hF-91Yz0KZYMglNLh59dUryNaG-KYi8z~ycbq-7KQs8rZCAdMYrOXjAVZDR2P20WYVm421djHXad5C7u-44jpQG~b4oUdJxHj8hklXlYi2DdhHYnXVkTZXgMR6--RqDQSomKF-~qrui~aE7Z2vlbOyJIDSgb64pg4x0zYRHNvNCD7Dkb4cyVTtYMy0xSP8lw4zJ0kkI6wKUJE6MP6fpag9PyPIaAiw__)`,
              }}></div>
            <div className="flex flex-[3] flex-col gap-4">
              <p className="text-2xl font-bold">Spider-Man: Homecoming</p>
              <div className="flex gap-4">
                <div className="px-2 py-1 bg-gray-300 rounded-md text-gray-500">Action</div>
                <div className="px-2 py-1 bg-gray-300 rounded-md text-gray-500">Adventure</div>
              </div>
              <div className="flex justify-between w-full">
                <p className="font-semibold text-xl">Regular - 13:00 PM</p>
                <Button
                  title={"Change"}
                  classname={"bg-blue-600 text-white font-bold px-4 py-2 rounded-md"}
                />
              </div>
            </div>
          </div>
          <p className="font-bold text-2xl">Choose Your Seat</p>
          <p className="text-center font-bold text-gray-400">Screen</p>
          {/* seat */}
          <div className="flex min-h-60">
            <div className="flex-1 border"></div>
            <div className="flex-1 border"></div>
          </div>
          <p className="font-bold text-xl ">Seating key</p>
          <div className="flex justify-between px-16 mt-6">
            <div>
              <div></div>
              <p>Available</p>
            </div>
            <div>
              <div></div>
              <p>Selected</p>
            </div>
            <div>
              <div></div>
              <p>Love nest</p>
            </div>
            <div>
              <div></div>
              <p>Sold</p>
            </div>
          </div>
        </div>
        <div className="flex-[3] flex flex-col gap-8 h-max">
          <div className="flex bg-white rounded-md shadow-2xl flex-col px-2 py-8 gap-4 items-center">
            <div className="bg-center bg-cover">
              <img src={hiflix} alt="" />
            </div>
            <p className="font-bold">CineOne21 Cinema</p>
            <div className="w-full flex flex-col gap-4 border-b-2 border-gray-500 pb-8">
              <div className="w-full flex justify-between">
                <p>Movie selected</p>
                <p className="font-bold">Spider-Man: Homecoming</p>
              </div>
              <div className="w-full flex justify-between">
                <p>Tuesday, 07 July 2020</p>
                <p className="font-bold">13:00pm</p>
              </div>
              <div className="w-full flex justify-between">
                <p>One ticket price</p>
                <p className="font-bold">$10</p>
              </div>
              <div className="w-full flex justify-between">
                <p>Seat choosed</p>
                <p className="font-bold">C4, C5, C6</p>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <p className="font-bold">Total Payment</p>
              <p className="font-bold">$30</p>
            </div>
          </div>
          <Button
            title={"Checkout now"}
            classname={
              "w-full bg-blue-600 text-white px-4 py-4 text-center font-bold rounded-md shadow-2"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default MovieOrder;
