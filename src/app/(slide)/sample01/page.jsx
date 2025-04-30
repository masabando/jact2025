"use client";
import Slide from "@/components/Slide";
import { init } from "@masabando/easy-three";
import { useEffect, useRef } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Page() {
  const ref = useRef(null);
  useEffect(() => {
    const { create, camera, controls, animate, destroy } = init(ref.current);

    controls.connect();

    create.ambientLight();
    create.directionalLight();

    camera.position.set(0, 0, 5);

    const cube = create.cube();

    animate(({ delta }) => {
      cube.rotation.x += delta * 0.5;
      cube.rotation.y += delta * 0.5;
    });
    return () => destroy();
  }, []);
  const codeScale = 1100;
  return (
    <Slide title="簡単にリアルタイム3Dを描ける">
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "30%",
          height: "100%",
          padding: "0.5rem 0 0 0.5rem",
        }}
      >
        <div
          className="mockup-phone"
          style={{
            transformOrigin: "top left",
            scale: "calc(min(100vw, 100svh * 4 / 3) / 1500px)",
          }}
        >
          <div className="mockup-phone-camera"></div>
          <div
            className="mockup-phone-display text-black bg-white grid place-content-center"
            ref={ref}
          ></div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "0%",
          width: "70%",
          height: "100%",
          padding: "0.5rem",
        }}
      >
        <div
          className="mockup-code bg-base-300 text-black"
          style={{
            padding: "20px 0 20px 0",
            border: "2px solid #999",
            transformOrigin: "top left",
            scale: `calc(min(100vw, 100svh * 4 / 3) / ${codeScale}px)`,
            width: `calc(100% / ( min(100vw, 100svh * 4 / 3) / ${codeScale}px ))`,
          }}
        >
          <div
            style={{
              fontSize: "20px",
              lineHeight: "1.3",
            }}
          >
            <SyntaxHighlighter style={docco} language="javascript">
              {`const { create, camera, controls, animate } = init();

  // カメラ操作ON
  controls.connect();

  // 環境光と平行光源を追加
  create.ambientLight();
  create.directionalLight();

  // カメラ位置を設定
  camera.position.set(0, 0, 5);

  // キューブを作成
  const cube = create.cube();

  // アニメーションを設定
  animate(({ delta }) => {
    cube.rotation.x += delta * 0.5;
    cube.rotation.y += delta * 0.5;
  });`}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </Slide>
  );
}
