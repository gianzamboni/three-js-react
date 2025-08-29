export type Demo = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  link: string;
}

const DEMOS: Demo[] = [
  {
    id: "first-r3f-app",
    title: "First Three JS Fiber App",
    thumbnail: "demos/first-r3f-app.jpg",
    description: "This is my first Three JS Fiber App. It's the first steps to learn how to use Three JS Fiber after learning how to use Three JS on vanilla JS.",
    link: "demos/first-r3f-app",
  },
  {
    id: "drei-app",
    title: "First DREI Application",
    thumbnail: "images.png",
    description: "DREI is a collection of three.js helpers for react that are useful when building 3D applications. They help you to build 3D applications faster and easier.",
    link: "demos/drei-app",
  },
].reverse();

export default DEMOS;