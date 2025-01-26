import { Header } from "@/sections/Header";
import {Hero} from "@/sections/Hero";
import {LogoTicker} from "@/sections/LogoTicker";
import {Testimonials} from "@/sections/Testimonials";
export default function Home() {
  return <div>
    <Header />
    <Hero />
    <LogoTicker />
    <Testimonials />
  </div>;
}
