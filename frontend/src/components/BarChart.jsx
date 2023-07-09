import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const BarChart = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={["value"]}
    indexBy="label"
    margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
    padding={0.3}
    colors={{ scheme: "nivo" }}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "X Axis",
      legendPosition: "middle",
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Y Axis",
      legendPosition: "middle",
      legendOffset: -40,
    }}
  />
);

export default BarChart;
