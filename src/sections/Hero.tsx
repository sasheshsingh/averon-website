const url =
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
import starsBg from "@/assets/stars.png";

// @ts-ignore
export const Hero = ({ title, paragraph }) => {
  return (
    <section
      className="w-screen h-screen flex items-center overflow-hidden overflow-x-hidden relative "
      style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/*<video*/}
      {/*    className="absolute top-0 left-0 w-full h-full object-cover"*/}
      {/*    src={url}*/}
      {/*    autoPlay*/}
      {/*    loop*/}
      {/*    muted*/}
      {/*/>*/}
      <div className="container relative mt-20">
        <h1 className="text-[120px] leading-none font-semibold tracking-tighter text-center">
          {title}
        </h1>
        <p className="text-xl text-white/70 mt-5 text-center mx-auto">
          {paragraph}
        </p>
      </div>
    </section>
  );
};
