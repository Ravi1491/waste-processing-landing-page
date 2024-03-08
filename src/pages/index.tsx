import PageMetaData from "@/components/PageMetaData";
import HomeHeaderIcon from "../assets/HomeHeaderIcon";
import HomeHeader from "@/components/LandingPage/HomeHeader";

export default function Home() {
  return (
    <PageMetaData title="Landing Page">
      <div className="min-h-screen min-w-screen bg-primary">
        <div className="flex flex-col">
          <HomeHeader />
        </div>
      </div>
    </PageMetaData>
  );
}
