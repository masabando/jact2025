"use client";

export function NoteBox({
  className = "",
  center = true,
  bold = true,
  width = "w-80",
  bg = "bg-red-100", border = "border-red-700",
  children
}) {
  return (
    <div className={`flex flex-col px-4 ${bg} border-4 ${width} ${border} ${center && "text-center"} ${bold && "font-bold"} ${className}`}>
      {children}
    </div>
  );
}