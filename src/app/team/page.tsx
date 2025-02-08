"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Loading from "@/components/loading";
import { skylinePageTitle } from "@/data/content";
import TeamScreen from "@/components/team/teamScreen";

export default function Teams() {
  return (
    <>
      <title>{skylinePageTitle}</title>

      <Loading />

      <Navbar />
      <TeamScreen />
      <Footer />
    </>
  );
}
