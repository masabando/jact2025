"use client";
import styles from "./styles.module.css";

export default function Component({
  title,
  bgColor = "bg-none",
  bgOpacity = "opacity-[0]",
  bgRef,
  children,
}) {
  return (
    <div className={`${styles.slide}`}>
      <div ref={bgRef} className={styles.bg}></div>
      <div
        ref={bgRef}
        className={`${styles.layer} ${bgColor} ${bgOpacity}`}
      ></div>
      <div className={styles.slideMain}>
        {title && <div className={styles.slideTitle}>{title}</div>}
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
