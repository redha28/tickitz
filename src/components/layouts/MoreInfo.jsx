import Button from "../elements/Button";

const MoreInfo = () => {
  return (
    <section className="bg-blue px-4 lg:px-24 py-12">
      <div className="bg-blue-600 py-24 px-6 lg:px-0 rounded-2xl flex flex-col justify-center items-center gap-8 relative overflow-hidden">
        <div className="w-52 h-52 border-8 absolute right-[-6rem] bottom-[-8rem] lg:bottom-[-6rem] border-white rounded-full"></div>
        <h1 className="text-3xl w-full font-bold lg:text-6xl text-white text-center ">
          Subscribe to our newsletter
        </h1>
        <div className="flex gap-4 flex-col w-full lg:flex-row lg:justify-center">
          <input
            type="text"
            placeholder="First Name"
            className="border border-white text-white font-bold px-4 py-4 rounded-md focus:outline-none"
          />
          <input
            type="text"
            placeholder="Email address"
            className="border border-white text-white font-bold px-4 py-4 rounded-md focus:outline-none"
          />
          <Button
            title="Subscribe Now"
            classname="bg-white rounded-md flex justify-center items-center px-6 text-blue-600 font-bold py-4 lg:py-0"
          />
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
