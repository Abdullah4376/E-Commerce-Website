import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Chart () {

  // Pass the data names, uv, pv, amt by the function arguement
  // Pass the data names, uv, pv, amt by the function arguement
  // Pass the data names, uv, pv, amt by the function arguement
  // Pass the data names, uv, pv, amt by the function arguement
  // Pass the data names, uv, pv, amt by the function arguement
  // Pass the data names, uv, pv, amt by the function arguement
  // Pass the data names, uv, pv, amt by the function arguement
  
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  ];

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 18, right: 30, left: -12, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" className='text-[10px]' />
        <YAxis className='text-[10px]' />
        <Tooltip />
        {/* <Legend /> */}
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
