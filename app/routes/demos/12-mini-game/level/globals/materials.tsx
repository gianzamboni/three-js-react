import { MeshStandardMaterial } from "three";

const endsMaterial = new MeshStandardMaterial({ color: "limegreen" });
const trapBlockMaterial = new MeshStandardMaterial({ color: "greenyellow" });
const obstacleMaterial = new MeshStandardMaterial({ color: "orangered" });
const wallMaterial = new MeshStandardMaterial({ color: "slategray" });

export { 
  endsMaterial, 
  trapBlockMaterial, 
  obstacleMaterial, 
  wallMaterial 
};