import HomeHeaderIcon from "../assets/HomeHeaderIcon";

export default function Home() {
  return (
    <div className="bg-red-100">
      <h1>Hello, World!</h1>
      <div className="bg-primary"> {<HomeHeaderIcon />} </div>
    </div>
  );
}
