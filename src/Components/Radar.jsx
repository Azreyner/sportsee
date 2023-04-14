import React, { useState, useEffect } from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../Style/Components/Radar.scss";

const Radar = () => {
  const data = [
    {
      subject: "Intensité",
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: "Vitesse",
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Force",
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Endurance",
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: "Energie",
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: "Cardio",
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];

  return (
    <ResponsiveContainer className="radar" width="99%" height="99%">
      <RadarChart outerRadius={90} data={data}>
        <PolarGrid gridType="polygon" radialLines={false} />
        <PolarAngleAxis dataKey="subject" />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Radar;
