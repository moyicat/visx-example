import React from "react";
import { Pie, Circle } from "@visx/shape";
import { Group } from "@visx/group";

import { Margin, Theme, defaultTheme } from "./style";
import { ClockData } from "./data";

import { MinuteHand, HourHand, HourShade } from "./ClockFace";

// const
const margin: Margin = { top: 1, right: 1, bottom: 1, left: 1 };
const theme: Theme = defaultTheme;
const donutThicknessRatio: number = 0.6;

const getTime = (d) => d.time;
const getColor = (d, color) => {
  switch (d.category) {
    case "break":
      return color;
    case "work":
      return theme.missingDataColor;
    default:
      return "#fff";
  }
};

export type ClockProps = {
  width: number;
  height: number;
  data: Array<ClockData>;
  color: string;
};

export default function ClockChart({ width, height, data, color }: ClockProps) {
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const radius = Math.min(innerWidth, innerHeight) / 2;
  const centerY = innerHeight / 2;
  const centerX = innerWidth / 2;
  const clockFaceScale = (radius * 2) / 400;

  return (
    <div className="clock">
      <div className="clock-svg">
        <svg width={width} height={height}>
          <Group top={centerY + margin.top} left={centerX + margin.left}>
            <Pie
              data={data}
              pieValue={getTime}
              pieSortValues={() => -1}
              outerRadius={radius}
              innerRadius={radius * donutThicknessRatio}
            >
              {(pie) => {
                return (
                  <Group className="visx-pie-arcs-group">
                    {pie.arcs.map((arc, i) => (
                      <g key={`pie-arc-${i}`}>
                        <path
                          d={pie.path(arc) || ""}
                          fill={getColor(arc.data, color)}
                        />
                      </g>
                    ))}
                  </Group>
                );
              }}
            </Pie>
            <Circle r={radius} fill="none" stroke={theme.annotationColor} />
            <Circle
              r={radius * donutThicknessRatio}
              fill="none"
              stroke={theme.annotationColor}
            />
          </Group>
        </svg>
      </div>
      <div
        className="clock-face-wrap"
        style={{ width: radius * 2, height: radius * 2 }}
      >
        <div
          className="clock-face"
          style={{
            width: "400px",
            height: "400px",
            transform: "scale(" + clockFaceScale + ")"
          }}
        >
          <MinuteHand />
          <HourHand />
          <HourShade />
        </div>
      </div>
    </div>
  );
}
