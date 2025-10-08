import React from "react";
import useAppHook from "../../hooks/useAppHook/useAppHook";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useParams } from "react-router";
const AppStatisticChart = () => {
  const { id } = useParams();
  const { apps } = useAppHook();
  const appsdata = apps.map((app) => ({
    id: app.id,
    name: app.title,
    uv: app.ratings,
  }));
  const data = appsdata.find((app) => app.id === Number(id));
    console.log(data);
    const chartData =
      data?.uv.sort((a, b) => parseInt(b.name[0]) - parseInt(a.name[0])) || [];
    console.log("chartData:", chartData);
  return (
    <div className="w-11/12 h-96 mx-auto my-20">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey="count" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" name={data?.name} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppStatisticChart;
