import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { BoardingVideo } from "@/components/BoardingVideo";
import { BoardingImage } from "@/components/BoardingImage";
import StylishCard from "@/components/StylishCard";
import DescriptionCards from "@/components/DescriptionCards";

export default function Main() {
  return (
    <div>
      <Header />
      <Hero
        title="Home Security Drone"
        paragraph="Bringing the excellence of Drone intelligence to your doorsteps."
      />
        <DescriptionCards />
      <BoardingVideo
        video="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        title={undefined}
        paragraph={undefined}
      />
        <StylishCard />
      <BoardingImage
        image="https://img.freepik.com/free-photo/3d-drone-flying-sunset-sea_1048-12782.jpg?t=st=1738013602~exp=1738017202~hmac=de8234f02684561e26aadc5773da041d3b48cb22a060e851dc9a87b44f8c50e5&w=1380"
        title={undefined}
        paragraph={undefined}
      />
        <BoardingImage
            image="https://img.freepik.com/free-photo/3d-drone-flying-sunset-sea_1048-12782.jpg?t=st=1738013602~exp=1738017202~hmac=de8234f02684561e26aadc5773da041d3b48cb22a060e851dc9a87b44f8c50e5&w=1380"
            title={undefined}
            paragraph={undefined}
        />
    </div>
  );
}
