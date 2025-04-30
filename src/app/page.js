"use client"
import Slide from "@/components/Slide";
import { init } from "@masabando/easy-three"
import { useEffect, useRef } from "react";

export default function Page() {
  const ref = useRef(null);
  useEffect(() => {
    const { create, camera, controls, load, animate, destroy } = init(ref.current);

    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    create.ambientLight();
    create.directionalLight();
    camera.position.set(0, 0, 5);
    const cube = create.cube();
    load.background("hdr/sky.hdr");
    animate(({ delta }) => {
      cube.rotation.x += delta * 0.5;
      cube.rotation.y += delta * 0.5;
    });
    return () => destroy();
  }, [])
  return (
    <Slide bgRef={ref} bgColor="bg-white" bgOpacity="opacity-[0.5]">
      <h1 className="text-3xl font-bold text-center leading-8 bg-none">
        3D制作による<br />プログラミング学習の提案
      </h1>
      <div className="mt-8">
        坂東将光
      </div>
      <div className="text-xs text-center mt-4">
        近畿大学工業高等専門学校
        <br />
        総合システム工学科 制御情報コース
      </div>
    </Slide>
  );
}
