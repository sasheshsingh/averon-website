export const BoardingVideo = ({ title, paragraph, video }) => {
  return (
    <section className="w-screen h-screen flex items-center overflow-hidden overflow-x-hidden relative">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
      />
      <div className="container relative z-10 mt-20">
        <h1 className="text-[120px] leading-none font-semibold tracking-tighter text-center">
          {title}
        </h1>
        <p className="text-xl text-white/70 mt-5 text-center mx-auto">
          {paragraph}
        </p>
      </div>
      <div className="absolute inset-0 bg-black/30" /> {/* Optional overlay */}
    </section>
  );
};
