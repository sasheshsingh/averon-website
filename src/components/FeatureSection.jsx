import { features } from "../constants/Features";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px] container py-24 mx-auto mr-auto ml-auto">
      <div className="text-center">
        <h1 className="text-7xl mt-20 tracking wide">
          Features
          <span className="bg-gradient-to-r from-gray-300 to-gray-700 text-transparent bg-clip-text">
            {" "}
            of Averon
          </span>
        </h1>
      </div>
      <div className="flex flex-wrap mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-1/3">
            {/*<div className="flex">*/}
            {/*    <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-gray-500 justify-center items-center rounded-full">{feature.text}</div>*/}
            {/*</div>*/}
            <h5 className="mt-1 mb-6 text-xl text-orange-500 ">
              {feature.text}
            </h5>
            <p className="text-md p-2 mb-20 text-neutral-500    ">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
