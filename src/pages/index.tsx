import PageMetaData from "@/components";
import HomeHeaderIcon from "../assets/HomeHeaderIcon";

export default function Home() {
  return (
    <PageMetaData title="Landing Page">
      <div className="bg-red-100">
        <h1>Hello, World!</h1>
        <div className="bg-primary"> {<HomeHeaderIcon />} </div>
      </div>
    </PageMetaData>
  );
}
