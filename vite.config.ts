import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import devToolsJson from "vite-plugin-devtools-json";
import glsl from 'vite-plugin-glsl';

export default defineConfig(({ mode }) => ({
  plugins: [
    reactRouter(),
    tsconfigPaths(),
    devToolsJson(),  
    glsl({
      minify: mode === 'production',
    }),
  ],
}));
