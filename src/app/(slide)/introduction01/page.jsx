"use client"
import Slide from "@/components/Slide";
import { useEffect, useRef } from "react";
import { init } from "@masabando/easy-three";

export default function Page() {
  const ref = useRef(null);
  useEffect(() => {
    const { create, load, camera, controls, animate, destroy } = init(ref.current);

    controls.connect();
    create.ambientLight();
    create.directionalLight();
    camera.position.set(0, 0, 5);
    load.background("hdr/sky.hdr")
    const cubeNum = 6;
    create.sphere({
      size: 1,
      position: [0, 0, 0],
      option: {
        color: "hsl(0, 100%, 100%)",
        roughness: 0,
        metalness: 0.8
      },
    });
    const cubes = create.group({
      children: new Array(cubeNum).fill(0).map((_, i) =>
        create.cube({
          rounded: true,
          radius: 0.2,
          segments: 16,
          position: [
            2 * Math.cos((2 * Math.PI * i) / cubeNum),
            2 * Math.sin((2 * Math.PI * i) / cubeNum),
            0,
          ],
          option: {
            color: `hsl(${(360 * i) / cubeNum}, 100%, 50%)`,
            roughness: 0.1,
          },
        })
      ),
    });
    cubes.children.forEach((cube) => {
      cube.userData.rotationSpeed = {
        x: (Math.random() < 0.5 ? 1 : -1) * (0.5 + Math.random() * 1),
        y: (Math.random() < 0.5 ? 1 : -1) * (0.5 + Math.random() * 1),
      };
    });
    animate(({ delta }) => {
      cubes.children.forEach((cube) => {
        cube.rotation.x += delta * cube.userData.rotationSpeed.x;
        cube.rotation.y += delta * cube.userData.rotationSpeed.y;
      });
    });
    return () => destroy();
  }, []);
  return (
    <Slide title="3D制作によるプログラミング学習">
      <div ref={ref} style={{
        width: "100%", height: "100%",
        position: "absolute",
        top: "0", left: "0",
      }} />
      Now Loading...
    </Slide>
  );
}