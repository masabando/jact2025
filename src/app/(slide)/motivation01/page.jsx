"use client";
import { NoteBox } from "@/components/Base";
import Slide from "@/components/Slide";
import studentImg from "./student.png";
import teacherImg from "./teacher.png";

export default function Page() {
  return (
    <Slide title="従来のプログラミング学習">
      <div
        className="flex flex-col items-center justify-bottom"
        style={{
          position: "absolute",
          top: "40%",
          right: "0%",
          width: "50%",
        }}
      >
        <div style={{
          margin: "1rem 0 -1rem 1rem",
        }}>＼すげー！！／</div>
        <img src={studentImg.src} alt="学生" className="w-2/3" />
      </div>
      <div
        className="flex flex-col items-center justify-bottom"
        style={{
          position: "absolute",
          top: "40%",
          left: "0%",
          width: "50%",
        }}
      >
        <div>＼なんでも作れる！／</div>
        <img src={teacherImg.src} alt="先生" className="w-2/3" />
      </div>
    </Slide>
  );
}

