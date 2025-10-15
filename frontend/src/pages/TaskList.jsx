import React from "react";
import TaskItem from "./TaskItem";

const taskList = [
  { title: "Milk For KanhaJi", statusGiven: "pending" },
  { title: "Wash Clothes For KanhaJi", statusGiven: "pending" },
  { title: "Make Food For KanhaJi", statusGiven: "pending" },
  { title: "Request For KanhaJi SafeGuard", statusGiven: "pending" },
  { title: "Praise KanhaJi", statusGiven: "pending" },
];
export default function () {
  return (
    <div className="flex w-screen h-screen bg-black justify-center items-center">
      <div className="w-2/3">
        <div className="grid grid-cols-2 w-full gap-3 text-white-100 border border-2 p-2 rounded-xl bg-gray-700 text-slate-200 mb-1 font-bold text-lg">
          <span className="pl-10">TITLE</span>
          <span className="text-right pr-4">STATUS</span>
        </div>
        {taskList.map((task, index) => (
          <TaskItem
            key={index}
            titleGiven={task.title}
            statusGiven={task.statusGiven}
          />
        ))}
      </div>
    </div>
  );
}
