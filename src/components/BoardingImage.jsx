export const Hero = ({ title, paragraph, image }) => {
    return (
        <section
            className="w-screen h-screen flex items-center overflow-hidden overflow-x-hidden relative"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
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