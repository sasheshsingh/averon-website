"use client";

import Navbar from "@/components/navbar";
import HomeScreen from "@/components/home/homeScreen";
import Footer from "@/components/footer";
import Loading from "@/components/loading"; 
import { homePageTitle } from "@/data/content";

export default function Home() {
  return (
    <>
      <title>{homePageTitle}</title>

      <Loading /> 
      
      <Navbar />
      <HomeScreen />
      <Footer />
    </>
  );
}
