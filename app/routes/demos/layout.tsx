import { Link, Outlet } from "react-router";

export default function Layout() {
  return <main className="w-full h-full">
    <Link className="text-blue-500 absolute top-4 left-4 z-100" to="/">Home</Link>
    <Outlet />
  </main>;
}