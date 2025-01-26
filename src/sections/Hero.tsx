import starsBg from "@/assets/stars.png";

export const Hero = () => {
  return <section
      className="w-screen h-screen flex items-center overflow-hidden overflow-x-hidden relative"
      style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
  >
    <div className="container relative mt-20">
      <h1 className="text-[120px] leading-none font-semibold tracking-tighter text-center">
        Averon Research
      </h1>
      <p className="text-xl text-white/70 mt-5 text-center mx-auto">
        At Averon, We are redefining Urban Security and public safety through cutting-edge autonomous Drone Ecosystems.
      </p>
    </div>
  </section>;
};
