export default function StylishCard() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6">
            <div
                className="bg-white shadow-2xl rounded-2xl p-8 w-[70vw] h-[80vh] flex flex-col justify-between items-center text-center relative">
                <h1 className="mb-4 text-3xl  bg-sky-950 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600 md:text-5xl lg:text-6xl">
                    Title
                </h1>

                {/*<h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl "><span className=" bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Title</span></h1>*/}
                <div className="flex flex-col items-center flex-grow justify-center">
                    <p className="text-gray-600 mb-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <p className="text-gray-600 mb-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className="w-full h-2/3 bg-gray-300 rounded-xl overflow-hidden">
                    <img
                        src="https://i.imgur.com/OB0y6MR.jpeg"
                        alt="Placeholder"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}