export const BoardingImage = ({ title, paragraph, image }) => {
    return (
        <section
            className="w-screen h-screen flex items-center overflow-hidden overflow-x-hidden relative bg-opacity-100"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="container relative mt-20">
                <h1 className="text-[80px] leading-none font-bold tracking-tighter text-center text-white">
                    {title}
                </h1>
                <p className="text-xl text-white/70 mt-5 text-center mx-auto">
                    {paragraph}
                </p>
            </div>
        </section>
    );
};