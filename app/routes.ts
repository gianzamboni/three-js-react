import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/home/index.tsx"),
 ...prefix("demos", [
    layout("routes/demos/layout.tsx", [
      route("first-r3f-app", "routes/demos/first-r3f-app.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
