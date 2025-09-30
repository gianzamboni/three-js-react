import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/home/index.tsx"),
 ...prefix("demos", [
    layout("routes/demos/layout.tsx", [
      route("first-r3f-app", "routes/demos/01-first-r3f-app/index.tsx"),
      route("drei-app", "routes/demos/02-drei-app/index.tsx"),
      route("debug-ui", "routes/demos/03-debug-ui/index.tsx"),
      route("environment-staging", "routes/demos/04-environment-staging/index.tsx"),
      route("load-models", "routes/demos/05-load-models/index.tsx"),
      route("3d-text", "routes/demos/06-3d-text/index.tsx"),
      route("portal", "routes/demos/07-portal/index.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
