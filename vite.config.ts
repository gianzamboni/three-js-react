import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import devToolsJson from "vite-plugin-devtools-json";
import glsl from 'vite-plugin-glsl';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => ({
  plugins: [
    // SVGR must run before React so `.svg` can be transformed into components
    svgr(),
    reactRouter(),
    tsconfigPaths(),
    devToolsJson(),  
    glsl({
      minify: mode === 'production',
    }),
  ],
}));
