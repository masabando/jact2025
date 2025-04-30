"use client";
import { useEffect, useState } from "react";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Drawer from "@/components/Drawer";
import PageController from "@/components/PageController";
import { usePathname } from "next/navigation";
import { pages } from "@/components/PageList";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

export default function RootLayout({ children }) {
  const [page, setPage] = useState(0);
  const pathname = usePathname();
  useEffect(() => {
    const pageIndex = pages.findIndex((page) => page.path === pathname);
    if (pageIndex !== -1) {
      setPage(pageIndex);
    }
    // eslint-disable-next-line
  }, []);
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.className} antialiased bg-gray-800 w-full h-svh`}
      >
        <Drawer page={page} setPage={setPage}>
          {children}
        </Drawer>
        <PageController page={page} setPage={setPage} />
      </body>
    </html>
  );
}
