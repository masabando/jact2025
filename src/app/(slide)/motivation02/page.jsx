"use client";
import { NoteBox } from "@/components/Base";
import Slide from "@/components/Slide";
import studentImg from "../motivation01/student.png";

export default function Page() {
  return (
    <Slide title="従来のプログラミング学習">
      <ol className="list-decimal">
        <li>文字の入出力</li>
        <li>変数と型 (intとかdoubleとか…)</li>
        <li>条件分岐 (if, switch)</li>
        <li>繰り返し (for, while)</li>
        <li>関数</li>
        <li>オブジェクト指向</li>
      </ol>
      <NoteBox className="mt-3">
        日頃見ているもの (ゲーム等) と乖離<br />
        モチベーション維持が難しい
      </NoteBox>
      <div
        className="flex flex-col items-center justify-bottom"
        style={{
          position: "absolute",
          top: "30%",
          right: "0%",
          width: "40%",
        }}
      >
        <div style={{margin: "0 0 -1.3rem 1rem"}}>？？？</div>
        <img src={studentImg.src} alt="学生" className="w-2/3" />
      </div>
    </Slide>
  );
}

