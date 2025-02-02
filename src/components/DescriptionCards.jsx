export default function DescriptionCards() {
    return (
        <section className="bg-blue min-h-screen flex flex-col items-center justify-start text-white p-10">
            {/* First Div: Title and Paragraphs */}
            <div className="w-full text-center mb-36">
                <h1 className="text-5xl font-light mb-4">Z class (written in ........ font)</h1>
                <p className="text-gray-400 mb-2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.k.
                </p>
                <p className="text-gray-400 mb-8">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.k.
                </p>
            </div>

            {/* Second Div: Features and Image */}
            <div className="flex flex-wrap justify-center w-full max-w-7xl gap-10">
                <div className="flex-1 min-w-[300px]">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="mb-6">
                            <h2 className="font-bold text-lg">1. feature one</h2>
                            <p className="text-gray-400">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.k.
                            </p>
                        </div>
                    ))}
                </div>
                <div className="w-64 h-64 bg-gray-400 overflow-hidden rounded-lg">
                    <img
                        src="https://camo.githubusercontent.com/c2fd2f94aa55544327fc8ed8901aedb2eec8e3535243452b43646eb8086efe1a/68747470733a2f2f796176757a63656c696b65722e6769746875622e696f2f73616d706c652d696d616765732f696d6167652d34342e6a7067"
                        alt="Placeholder Image"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
