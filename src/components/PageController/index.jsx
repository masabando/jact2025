"use client";
import { pages } from "@/components/PageList";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PageController({ page, setPage }) {
  const router = useRouter();
  // change page (left arrow or right arrow)
  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowLeft":
        setPage((prevPage) => Math.max(prevPage - 1, 0));
        break;
      case "ArrowRight":
        setPage((prevPage) => Math.min(prevPage + 1, pages.length - 1));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    router.push(`${pages[page].path}`);
  }, [page])
}
