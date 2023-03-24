import React, { useState, useEffect } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import "../Style/Components/Kpi.scss";

const Kpi = ({ leScore }) => {
  const data = [{ name: "Score", value: leScore * 100, fill: "red" }];
  const style = {
    top: "15%",
    left: "5%",
    transform: "translate(0, -50%)",
    lineHeight: "24px",
  };

  function RenderCusomizedLegend() {
    return (
      <div className="laLegendeRadialChart">
        <p className="laLegendeRadialChart__texte">
          <span>{`${leScore * 100}%`}</span>
          <br /> de votre objectif
        </p>
      </div>
    );
  }

  return (
    <ResponsiveContainer>
      {/*<RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="100%"
        outerRadius="80%"
        data={data}
        barSize={15}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          minAngle={15}
          label={false}
          clockWise
          dataKey="value"
          cornerRadius={20}
        />
        <Legend
          iconSize={0}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
          color="orange"
        />
  </RadialBarChart>*/}
      <RadialBarChart
        width={258}
        height={263}
        innerRadius="65%"
        outerRadius="80%"
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        className="kpi gauge-chart__svg-chart"
        startAngle={90}
        endAngle={90 + (leScore * 100 * 360) / 100}
      >
        <RadialBar name="score" dataKey="value" cornerRadius={100} background />
        <Legend
          iconType="circle"
          content={<RenderCusomizedLegend />}
          verticalAlign="middle"
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default Kpi;
