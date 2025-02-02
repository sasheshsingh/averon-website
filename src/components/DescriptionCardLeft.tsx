// export default function DescriptionCardLeft() {
//     return (
//         <section className="bg-blue min-h-screen flex flex-col items-center justify-start text-white p-10">
//             {/* First Div: Title and Paragraphs */}
//             <div className="w-full text-center mb-36">
//                 <h1 className="text-5xl font-light mb-4">Z class (written in ........ font)</h1>
//                 <p className="text-gray-400 mb-2">
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 </p>
//                 <p className="text-gray-400 mb-8">
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 </p>
//             </div>
//
//             {/* Second Div: Image on the Left and Features on the Right */}
//             <div className="flex flex-wrap justify-center w-full max-w-7xl gap-10 items-center">
//                 <div className="w-[512px] h-[512px] bg-gray-400 overflow-hidden rounded-lg">
//                     <img
//                         src="https://camo.githubusercontent.com/c2fd2f94aa55544327fc8ed8901aedb2eec8e3535243452b43646eb8086efe1a/68747470733a2f2f796176757a63656c696b65722e6769746875622e696f2f73616d706c652d696d616765732f696d6167652d34342e6a7067"
//                         alt="Placeholder Image"
//                         className="w-full h-full object-cover"
//                     />
//                 </div>
//                 <div className="flex- min-w-[300px]">
//                     {[...Array(3)].map((_, i) => (
//                         <div key={i} className="mb-6">
//                             <h2 className="font-bold text-lg">{i + 1}. Feature {i + 1}</h2>
//                             <p className="text-gray-400">
//                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

export default function DescriptionCardLeft() {
    return (
        <section className="bg-blue min-h-screen flex flex-col items-center justify-start text-white p-10">
            {/* First Div: Title and Paragraphs */}
            <div className="w-full text-center mb-36">
                <h1 className="text-5xl font-light mb-4">Z-Class Drone</h1>
                <p className="text-gray-400 mb-2">
                    The Z-Class Drone is a state-of-the-art aerial device designed for precision, efficiency, and versatility.
                </p>
                <p className="text-gray-400 mb-8">
                    Equipped with advanced AI, long battery life, and high-resolution imaging, it sets the standard for modern drones.
                </p>
            </div>

            {/* Second Div: Image on the Left and Features on the Right */}
            <div className="flex flex-wrap justify-center w-full max-w-7xl gap-10 items-center">
                <div className="w-128 h-128 bg-gray-400 overflow-hidden rounded-lg">
                    <img
                        src="https://camo.githubusercontent.com/c2fd2f94aa55544327fc8ed8901aedb2eec8e3535243452b43646eb8086efe1a/68747470733a2f2f796176757a63656c696b65722e6769746875622e696f2f73616d706c652d696d616765732f696d6167652d34342e6a7067"
                        alt="Z-Class Drone"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 min-w-[300px] text-right">
                    <div className="mb-6 h-40 flex flex-col justify-center">
                        <h2 className="font-bold text-lg">1. AI-Powered Navigation</h2>
                        <p className="text-gray-400">
                            The Z-Class Drone uses cutting-edge AI to autonomously navigate complex environments with precision.
                        </p>
                    </div>
                    <div className="mb-6 h-40 flex flex-col justify-center">
                        <h2 className="font-bold text-lg">2. High-Resolution Imaging</h2>
                        <p className="text-gray-400">
                            Capture stunning 4K aerial footage with its advanced imaging system, ideal for photography and surveillance.
                        </p>
                    </div>
                    <div className="mb-6 h-40 flex flex-col justify-center">
                        <h2 className="font-bold text-lg">3. Extended Battery Life</h2>
                        <p className="text-gray-400">
                            Enjoy up to 60 minutes of uninterrupted flight time, ensuring you cover more ground efficiently.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}