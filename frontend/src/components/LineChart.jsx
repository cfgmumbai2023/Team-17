import React from "react";
import { ResponsiveLine } from "@nivo/line";

const LineChart = ({ data }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: false,
      reverse: false,
    }}
    curve="linear"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "X Axis",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Y Axis",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    colors={{ scheme: "nivo" }}
    enableGridX={false}
    enableGridY={false}
    enablePoints={false}
    enableArea={true}
    areaOpacity={0.6}
    enableCrosshair={false}
    useMesh={true}
  />
);

export default LineChart;
