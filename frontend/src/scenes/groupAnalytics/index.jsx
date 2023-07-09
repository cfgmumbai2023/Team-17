import React from "react";
import BarChart from "components/BarChart";
import LineChart from "components/LineChart";
import { useState } from "react";

const GroupAnalytics = () => {
  const data1 = [
    { label: "A", value: 10 },
    { label: "B", value: 20 },
    { label: "C", value: 15 },
    // Add more data points as needed
  ];

  const data2 = [
    {
      id: "series1",
      data: [
        { x: "A", y: 30 },
        { x: "B", y: 50 },
        { x: "C", y: 55 },
        // Add more data points as needed
      ],
    },
  ];

  const [search, setSearch] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(true);
  };

  return (
    <div className="container">
      <h1>Group Analytics</h1>
      <h4 className="">Enter Group ID:</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          id="studentID"
          name="studentID"
          style={{ width: "200px" }}
        />
        <button
          type="submit"
          className="btn btn-primary mt-3"
          style={{ background: "#cca752" }}
        >
          Submit
        </button>
      </form>
      {search && (
        <div style={{ display: "flex" }}>
          <div style={{ width: "400px", height: "300px" }}>
            <BarChart data={data1} />
          </div>
          <div style={{ width: "400px", height: "300px" }}>
            <LineChart data={data2} />
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupAnalytics;
