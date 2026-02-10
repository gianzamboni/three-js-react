export type Demo = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
}

const DEMOS: Demo[] = [
  {
    id: "first-r3f-app",
    title: "First Three JS Fiber App",
    thumbnail: "demos/first-r3f-app.jpg",
    description: "This is my first Three JS Fiber App. It's the first steps to learn how to use Three JS Fiber after learning how to use Three JS on vanilla JS.",
  },
  {
    id: "drei-app",
    title: "First DREI Application",
    thumbnail: "demos/drei-app.jpg",
    description: "DREI is a collection of three.js helpers for react that are useful when building 3D applications. They help you to build 3D applications faster and easier.",
  },
  {
    id: "debug-ui",
    title: "Debug UI",
    thumbnail: "demos/debug-ui.png",
    description: "Added Leva and r3f-perf libraries to the project. The first one allowed me to easily add debug controls to the scene. The second one creates a monitor that shows performance metrics.",
  },
  {
    id: 'environment-staging',
    title: 'Environment and Staging',
    thumbnail: 'demos/staging.jpg',
    description: 'Set up environment and staging in three.js. I used the environment map from the three.js official website. I also used the staging component to create a staging area for the scene.',
  }, 
  {
    id: 'load-models',
    title: 'Loading Models',
    thumbnail: 'demos/loaded-models.png',
    description: "Loaded models in three.js using react three fiber and the Draco Loader. In this case, I used a hamburger I made using blender and a fox provided as sample by Khronos Group.",
  }, {
    id: '3d-text',
    title: '3D Text',
    thumbnail: 'demos/3d-text.jpg',
    description: "A simple 3D text between random positioned donuts.  Everything here was made using Typescript and Three JS. Here we use DREI and React Three Fiber capabilities to optimize performance and create a lot of copies of the same object.",
  }, {
    id: 'portal',
    title: 'Portal',
    thumbnail: 'demos/portal-scene.jpg',
    description: "A portal scence modelled and textured in Blender. Using React Three Fiber and DREI, I added animated fireflies and an and a nice portal effect.",
  }, {
    id: 'pointer-events',
    title: 'Pointer Events',
    thumbnail: 'demos/pointer-events.jpg',
    description: "Used raycasting to detect the meshes that has the cursor over them and listen for click events that affect them: When the cursor is over a clickable mesh, the cursor changes to a pointer and when the mesh is clicked, it changes color.",
    link: "demos/pointer-events",
  }, {
    id: 'post-processing-effects',
    title: 'Post Processing Effects',
    thumbnail: "demos/post-processing.png",
    description: 'A showcase of some post processing effects available in the @react-three/postprocessing library and a "Drunk" effect that I implemented from scratch.',
  }, {
    id: 'simple-portfolio',
    title: 'Simple Portfolio',
    thumbnail: "demos/simple-portfolio.png",
    description: 'A computer that has my portfolio website opened. You can navigate through the portfolio as if it the computer was a real one.',
  }, {
    id: 'physics',
    title: 'Physics',
    thumbnail: "demos/physics.png",
    description: 'A lot of cubes falling down and colliding with each other. Used React Three Fiber and Rapier Physics to create this demo.',
  }
].reverse();

export default DEMOS;