import React from "react";
import Chart from "./Chart";

function ChartData({head, quantity, percentage, title, description}) {
  return (
    <div className="border border-slate-400 bg-white p-4 rounded-md">
      <h2 className="text-sm font-semibold">{head}</h2>
      <div className="flex justify-between items-center mt-2">
        <h1 className="text-xl font-semibold">{quantity}</h1>
        <p className="flex gap-[2px] text-xl items-center text-red-600">
          <span className="material-symbols-outlined">arrow_cool_down</span>
          {percentage}
        </p>
      </div>

      <div className="flex justify-between items-center text-sm mt-6">
        <p>{title}</p>
        <p>{quantity}</p>
        <p className="flex gap-[2px] items-center text-red-600">
          <span className="material-symbols-outlined">arrow_cool_down</span>
          {percentage}
        </p>
      </div>

      <main className="w-[90%]">
        <h4 className="mb-4 text-sm font-semibold mt-2">{description}</h4>
        <Chart />
      </main>
    </div>
  );
}

export default ChartData;
