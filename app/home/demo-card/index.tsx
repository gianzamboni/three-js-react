import { Link } from "react-router";
import type { Demo } from "../demo";

type DemoCardProps = {
  demo: Demo;
};

export const DemoCard = ({ demo }: DemoCardProps) => {
  return (
    <Link to={demo.link} className="hand-drawn-border demo-card" >
    <div className="border-1 rounded-md p-4 w-64 flex flex-col gap-1  transition-colors duration-300">
      <img src={demo.thumbnail} alt={demo.title} className="w-full h-48 object-cover rounded-md box-shadow-md grayscale hover:grayscale-0 transition-all duration-300" />
      <h2 className="text-lg font-bold mt-4">{demo.title}</h2>
      <p className="text-sm text-gray-500 mt-2">{demo.description}</p>
    </div>
    </Link>
  );
};
