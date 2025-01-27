import { Header } from "@/sections/Header";
import {Hero} from "@/sections/Hero";
import {LogoTicker} from "@/sections/LogoTicker";
import {Testimonials} from "@/sections/Testimonials";
import FeatureSection from "@/components/FeatureSection";
import { BoardingImage } from "@/components/BoardingImage";
import { BoardingVideo } from  "@/components/BoardingVideo";

export default function Home() {
  return <div>
    <Header />
    <Hero />
    <LogoTicker />
    {/*<Testimonials />*/}
    <BoardingVideo video="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" title="Next-Gen Drone Technology" paragraph="Next-gen drone technology integrates AI, advanced sensors, and autonomous systems, enabling seamless navigation, enhanced performance, and versatile applications in fields like logistics, surveillance, and environmental monitoring."/>
    <FeatureSection />
    <BoardingImage image="https://img.freepik.com/free-photo/3d-drone-flying-sunset-sea_1048-12782.jpg?t=st=1738013602~exp=1738017202~hmac=de8234f02684561e26aadc5773da041d3b48cb22a060e851dc9a87b44f8c50e5&w=1380" title="Fast and Light Weight" paragraph="A fast and lightweight drone combines high speed with portability, making it ideal for agile maneuvers, quick deployment, and efficient operation across various applications."/>
  </div>;
}
