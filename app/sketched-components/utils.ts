export const STROKE_WIDTHS = {
  "xs": 0.0001,
  "sm": 0.001,
  "md": 0.01,
  "lg": 0.1,
  "xl": 1
}

export type StrokeWidth = keyof typeof STROKE_WIDTHS;

export type Point2D = [number, number];

export type Side = "top" | "right" | "bottom" | "left";