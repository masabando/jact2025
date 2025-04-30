"use client"
import Slide from "@/components/Slide";

export default function Page() {
  return (
    <Slide>
      <div className="mockup-browser border-base-300 border w-full">
        <div className="mockup-browser-toolbar">
          <div className="input">https://masabando.github.io/easy-three/</div>
        </div>
        <div className="border-t border-base-300 w-full h-80">
          <iframe src="https://masabando.github.io/easy-three/"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </Slide>
  );
}