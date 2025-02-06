"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Loading from "@/components/loading"; 
import { skylinePageTitle } from "@/data/content";

export default function Home() {
  return (
    <>
      <title>{skylinePageTitle}</title>

      <Loading /> 
      
      <Navbar />
      Hello from SkyLine section
      <Footer />
    </>
  );
}
