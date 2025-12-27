#define PI 3.14159

uniform float uTime;
uniform float uSmokyMix;
uniform float uDistStrength;
uniform float uPowStrength;
uniform vec3 uStartColor;
uniform vec3 uEndColor;

varying vec2 vUv;

#include "cnoise.glsl"

vec2 rotate(vec2 uv, float rotation, vec2 center) {
  vec2 rotatedUv = vec2(
    cos(rotation) * (uv.x - center.x) - sin(rotation) * (uv.y - center.y) + center.x,
    sin(rotation) * (uv.x - center.x) + cos(rotation) * (uv.y - center.y) + center.y
  );
  return rotatedUv;
}

vec3 smoke() {
  vec2 displacedUv = vUv + cnoise(vec3(vUv * 5.0, uTime * 0.1));
  float strength = cnoise(vec3(displacedUv * 5.0, uTime * 0.2));

  float outerGlow = distance(vUv, vec2(0.5)) * 4.5 - 1.4;
  strength += outerGlow;

  strength += step(- 0.2, strength) * 0.8;
  strength = clamp(strength, 0.0, 1.0);
  return mix(uStartColor, uEndColor, 1.0 - strength);
}

vec3 swirl() {

  float effectRadius = .5;
  float effectAngle = 2. * PI;
  
  vec2 center = vec2(.5, .5);
  
  vec2 uv = vUv - center;
  
  float len = length(uv );
  float angle = atan(uv.y, uv.x) + effectAngle * smoothstep(effectRadius, 0., len);
  float radius = length(uv);

  vec2 displacedUv = vec2(radius * cos(angle), radius * sin(angle)) + center; 
  displacedUv = rotate(displacedUv, uTime * 0.1, center);
  displacedUv = displacedUv + cnoise(vec3(displacedUv * 10., uTime * 0.2));
  
  float strength = cnoise(vec3(displacedUv * 5.0, 2.0));


  float outerGlow = distance(vUv, vec2(0.5)) * 3.5 - 0.9; 
  strength += outerGlow;

  strength += step(0.125, strength);
  strength = clamp(strength, 0.0, 1.0);
  return mix(uStartColor, uEndColor, 1.0 - strength);
}

void main() {
  float dist = clamp(pow(distance(vec2(0.5), vUv), uPowStrength) * uDistStrength, 0.0, 1.0);
  vec3 smoke = smoke();
  vec3 swirl = swirl();
  gl_FragColor = vec4(mix(smoke, swirl, uSmokyMix) + dist, 1.0);
}