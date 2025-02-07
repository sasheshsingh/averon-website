"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Loading from "@/components/loading";
import { airpalPageTitle } from "@/data/content";
import AirPalScreen from "@/components/products/airpal/airpalScreen";

export default function AirPal() {
  return (
    <>
      <title>{airpalPageTitle}</title>

      <Loading />

      <Navbar />
      <AirPalScreen />
      <Footer />
    </>
  );
}
