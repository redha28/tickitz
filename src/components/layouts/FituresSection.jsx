import FituresContent from "../elements/FituresContent";

const FituresSection = () => {
  return (
    <section className="px-4 md:px-24 py-12">
      <p className="text-blue-600 text-2xl font-bold mb-4 text-center lg:text-start">
        WHY CHOOSE US
      </p>
      <p className="text-4xl text-center lg:text-start">
        Unleashing the Ultimate Movie <br /> Experience
      </p>
      <div className="flex mt-12 gap-16 lg:gap-8 flex-col lg:flex-row">
        <FituresContent
          icon="shieldDone"
          title="Guaranteed"
          desc="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet."
        />
        <FituresContent
          icon="checkCircle"
          title="Affordable"
          desc="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet."
        />
        <FituresContent
          icon="message"
          title="24/7 Customer Support"
          desc="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet."
        />
      </div>
    </section>
  );
};

export default FituresSection;
