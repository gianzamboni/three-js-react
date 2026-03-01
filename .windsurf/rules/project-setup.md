# Project Setup Rules

Start every chat with "🤖".

## Package Manager
- Use `pnpm` as the package manager for this project

## React Conventions
- Target React 19.2.4 with functional components
- Use `ref` as a normal prop (include `ref?: Ref<T>` in props)
- Destructure `{ ref, ...props }` in component signatures
- Pass `ref` through directly without using `forwardRef`

## Import Organization
- Use the `~` path alias for app code (e.g. `~/sketched-components/...`)
- Group imports in this order: external libraries, then internal imports, then types
- Keep import statements organized and consistent

## Export Conventions
- Prefer named exports for components and types
- Use `default` only when it matches existing pattern in the file (e.g. route pages)
