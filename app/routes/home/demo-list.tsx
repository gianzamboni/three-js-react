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
    thumbnail: "demos/first-r3f-app.png",
    description: "This is my first Three JS Fiber App. It's the first steps to learn how to use Three JS Fiber after learning how to use Three JS on vanilla JS.",
    link: "demos/first-r3f-app",
  },
  {
    id: "drei-app",
    title: "First DREI Application",
    thumbnail: "demos/drei-app.png",
    description: "DREI is a collection of three.js helpers for react that are useful when building 3D applications. They help you to build 3D applications faster and easier.",
    link: "demos/drei-app",
  },
  {
    id: "debug-ui",
    title: "Debug UI",
    thumbnail: "demos/debug-ui.png",
    description: "For this demo, I added Leva and r3f-perf libraries to the project. The first one allowed me to easily add debug controls to the scene. The second one creates a monitor that shows performance metrics.",
    link: "demos/debug-ui",
  },
  {
    id: 'environment-staging',
    title: 'Environment and Staging',
    thumbnail: 'demos/staging.png',
    description: 'This demo shows how to use environment and staging in three.js. I used the environment map from the three.js official website. I also used the staging component to create a staging area for the scene.',
    link: 'demos/environment-staging',
  }, 
  {
    id: 'load-models',
    title: 'Loading Models',
    thumbnail: 'demos/loaded-models.png',
    description: "This demo shows how to load models in three.js using react three fiber and the Draco Loader. In this case, I loaded a hamburger I made using blender and a fox provided as sample by Khronos Group.",
    link: "demos/load-models",
  }
].reverse();

export default DEMOS;