import starsBg from "@/assets/stars.png";

export const ContactUsForm = () => {
    return (
        <section className=""
                 style={{
                     backgroundImage: `url(${starsBg.src})`,
                     backgroundSize: "cover",
                     backgroundPosition: "center",
                     backgroundRepeat: "no-repeat",
                 }}>
            <div className="flex items-center justify-center min-h-screen">
                <div className="p-4 mx-auto max-w-xl bg-transparent text-white font-[sans-serif]">
                    <h1 className="text-[48px] leading-none font-semibold tracking-tighter text-center">Contact us</h1>
                    <form className="mt-8 space-y-4">
                        <input type='text' placeholder='Name'
                               className="w-full py-2.5 px-4 text-white bg-transparent border border-white focus:border-gray-500 focus:bg-transparent text-sm outline-none transition-all"/>
                        <input type='email' placeholder='Email'
                               className="w-full py-2.5 px-4 text-white bg-transparent border border-white focus:border-gray-500 focus:bg-transparent text-sm outline-none transition-all"/>
                        <input type='text' placeholder='Subject'
                               className="w-full py-2.5 px-4 text-white bg-transparent border border-white focus:border-gray-500 focus:bg-transparent text-sm outline-none transition-all"/>
                        <textarea placeholder='Message' rows={4}
                                  className="w-full px-4 text-white bg-transparent border border-white focus:border-gray-500 focus:bg-transparent text-sm pt-3 outline-none transition-all"></textarea>
                        <button type='button'
                                className="border text-white bg-black hover:bg-gray-900 tracking-wide text-sm px-4 py-2.5 w-full outline-none">Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
