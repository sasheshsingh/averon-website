import { Header } from "@/sections/Header";
import {Hero} from "@/sections/Hero";
import {LogoTicker} from "@/sections/LogoTicker";
import {Testimonials} from "@/sections/Testimonials";
import FeatureSection from "@/components/FeatureSection";
export default function Home() {
  return <div>
    <Header />
    <Hero />
    <LogoTicker />
    {/*<Testimonials />*/}
    <FeatureSection />
  </div>;
}
