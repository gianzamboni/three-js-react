# Three.js and React Three Fiber Rules

## Library Preferences
- Prefer `@react-three/fiber` and `@react-three/drei` for 3D development
- Use declarative JSX syntax for Three.js objects

## Type Handling
- Type mesh refs as `Ref<Mesh>` with `Ref` from `react` and `Mesh` from `three`
- Use proper TypeScript typing for all 3D objects and components
- Maintain type safety throughout 3D component hierarchy

## Component Patterns
- Use declarative `<mesh>`, `<meshStandardMaterial>`, etc. instead of imperative Three.js code.
- Follow React Three Fiber patterns for scene setup and object creation
- Keep 3D components modular and reusable

## Best Practices
- Leverage React Three Fiber's React integration for state management
- Use `@react-three/drei` helpers for common 3D patterns and abstractions
- Maintain performance awareness when creating 3D scenes
