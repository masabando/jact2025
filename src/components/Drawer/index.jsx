"use client";
import { IoMenu } from "react-icons/io5";
import { pages } from "@/components/PageList";
import { useRef, useState } from "react";
import { LuCircleChevronLeft, LuCircleChevronRight } from "react-icons/lu";

export default function Component({ page, setPage, children }) {
  const checkboxRef = useRef(null);
  const [navShow, setNavShow] = useState(true);
  return (
    <>
      <div className="drawer drawer-end h-full">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          ref={checkboxRef}
        />
        <div className="drawer-content h-full flex flex-col justify-center items-center">
          {children}
          <label
            htmlFor="my-drawer"
            className="btn btn-circle drawer-button fixed right-4 bottom-4"
            style={{
              fontSize: "min(1.5rem, 20pt)",
              width: "min(3rem, 40pt)",
              height: "min(3rem, 40pt)",
              zIndex: "999",
            }}
          >
            <IoMenu />
          </label>
          <LuCircleChevronLeft
            className="btn btn-circle drawer-button fixed bottom-20 left-4"
            style={{
              background: "rgba(255,255,255,0.5)",
              border: "none",
              borderRadius: "50%",
              fontSize: "min(3rem, 40pt)",
              width: "min(3rem, 40pt)",
              height: "min(3rem, 40pt)",
              zIndex: "999",
            }}
            hidden={!navShow}
            onClick={() => {
              setPage((prevPage) => Math.max(prevPage - 1, 0));
            }}
          />
          <LuCircleChevronRight
            className="btn btn-circle drawer-button fixed bottom-20 right-4"
            style={{
              background: "rgba(255,255,255,0.5)",
              border: "none",
              borderRadius: "50%",
              fontSize: "min(3rem, 40pt)",
              width: "min(3rem, 40pt)",
              height: "min(3rem, 40pt)",
              zIndex: "999",
            }}
            hidden={!navShow}
            onClick={() => {
              setPage((prevPage) => Math.min(prevPage + 1, pages.length - 1));
            }}
          />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul
            className="menu bg-base-200 text-base-content min-h-full w-80 p-4"
            style={{
              fontSize: "min(1rem, 14pt)",
            }}
          >
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
              <legend className="fieldset-legend">options</legend>
              <label className="label">
                <input
                  type="checkbox"
                  defaultChecked
                  className="toggle toggle-sm toggle-primary"
                  onChange={(e) => {
                    setNavShow(e.target.checked);
                  }}
                />
                ページ移動ボタン表示
              </label>
            </fieldset>
            {pages.map((p, idx) => (
              <li key={p.path}>
                <label
                  onClick={() => {
                    setPage(idx);
                    checkboxRef.current.checked = false;
                  }}
                >
                  {p.title}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
