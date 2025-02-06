"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Loading from "@/components/loading";
import { skylinePageTitle } from "@/data/content";
import SkyLineScreen from "@/components/products/skyline/skylineScreen";

export default function Home() {
  return (
    <>
      <title>{skylinePageTitle}</title>

      <Loading />

      <Navbar />
      <SkyLineScreen />
      <Footer />
    </>
  );
}
