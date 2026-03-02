/**
 * Environment configuration with proper typing
 */
export class EnvConfig {
  static get next_version(): string {
    console.log(import.meta.env);
    return import.meta.env.VITE_NEXT_VERSION;
  }
}
