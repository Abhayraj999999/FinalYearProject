import React from "react";

export default function TaskItem({ titleGiven, statusGiven }) {
  const title = titleGiven || "Make Milk For Kanhaji";
  const status = statusGiven || "pending";
  return (
    <div className="grid grid-cols-2 w-full gap-3 border border-w-2 p-2 rounded-xl bg-gray-800 text-slate-400 mb-1">
      <span className="uppercase">{title}</span>
      <span className="text-right uppercase italic">{status}</span>
    </div>
  );
}
