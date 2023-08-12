'use client'
import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const OrderChart = () => {
    return (
        <div className="bg-white p-4 rounded-lg w-[300px]" style={{boxShadow:'0px 4px 10px 0px rgba(0, 0, 0, 0.25)'}}>
        <h1 className="font-semibold text-center">Customer Orders</h1>
<PieChart width={300} height={320}>
  <Pie
    data={data}
    cx={120}
    cy={200}
    innerRadius={60}
    outerRadius={80}
    fill="#8884d8"
    paddingAngle={1}
    dataKey="value"
    label
  >
    {data.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    ))}
  </Pie>
</PieChart>
 <div className="flex gap-x-2">
  {
    ['Pending','Completed','Active'].map((action,i)=>
    <div key={i} className={`px-2 py-1 ${action==='Pending'?'bg-[#0088FE]':action==='Completed'?'bg-[#00C49F]':'bg-[#FFBB28]'} rounded-lg text-center text-white w-[90px]`}>
    {action}
</div>
    )
  }
 </div>
    </div>
    );
};

export default OrderChart;