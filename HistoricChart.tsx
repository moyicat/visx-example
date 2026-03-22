import React from "react";
import { Line, BarRounded } from "@visx/shape";
import { Group } from "@visx/group";
import { scaleBand, scaleLinear } from "@visx/scale";
import { GridRows } from "@visx/grid";
import { AxisLeft, AxisBottom } from "@visx/axis";
import { Text } from "@visx/text";

import { Margin, Theme, defaultTheme } from "./style";
import { HistoricData } from "./data";

// consts
const margin: Margin = {
  top: 28,
  bottom: 24,
  left: 24,
  right: 0
};

const theme: Theme = defaultTheme;

// accessors
const getDate = (d: HistoricData) => d.date;
const getValue = (d: HistoricData) => d.value;
const getColor = (
  d: HistoricData,
  threshold: number,
  color: string,
  otherColor: string
) => (d.value >= threshold ? color : otherColor);
// const getyAxisTicks = (scale, numTicks, yMax) => (scale.ticks());

export type HistoricProps = {
  width: number;
  height: number;
  data: Array<HistoricData>;
  color: string;
  threshold: number;
  unit: string;
};

export default function HistoricChart({
  width,
  height,
  data,
  color,
  threshold,
  unit
}: HistoricProps) {
  // bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // scales
  const xScale = scaleBand<string>({
    range: [0, xMax],
    round: true,
    domain: data.map(getDate),
    padding: 0.4
  });

  // const yMaxValue = Math.ceil(Math.max(...data.map(getValue)) * 1.1);

  const yScale = scaleLinear<number>({
    range: [yMax, 0],
    round: true,
    domain: [0, Math.max(...data.map(getValue))]
  });

  // const yScaleTicks = [0, threshold, yMaxValue];
  // const yScaleTicks = yScale.ticks(yMax / theme.fontSize / 3);
  // yScaleTicks.push(yMaxValue);

  return (
    <svg width={width} height={height}>
      <Group top={margin.top} left={margin.left}>
        <GridRows
          scale={yScale}
          width={xMax}
          numTicks={yMax / theme.fontSize / 2}
          // tickValues={yScaleTicks}
          stroke={theme.gridColor}
        />
        <AxisLeft
          scale={yScale}
          top={0}
          left={0}
          stroke={theme.axisColor}
          tickStroke={theme.axisColor}
          numTicks={yMax / theme.fontSize / 2}
          // tickValues={yScaleTicks}
          hideTicks={true}
          hideAxisLine={true}
          tickLabelProps={() => ({
            dy: "0.25em",
            textAnchor: "end",
            fontSize: theme.fontSize,
            fontFamily: theme.fontFamily,
            fill: theme.axisLabelColor
          })}
          tickFormat={yScale.tickFormat(0.1)}
        />
        <Line
          stroke={theme.axisColor}
          from={{ x: 0, y: yScale(threshold) }}
          to={{ x: xMax, y: yScale(threshold) }}
        />
        {data.map((d) => {
          const date = getDate(d);
          const barWidth = xScale.bandwidth();
          const barHeight = yMax - (yScale(getValue(d)) ?? 0);
          const barX = xScale(date);
          const barY = yMax - barHeight;
          const barColor = getColor(d, threshold, color, theme.otherDataColor);
          return (
            <BarRounded
              key={`bar-${date}`}
              x={barX}
              y={barY}
              width={barWidth}
              height={barHeight}
              fill={barColor}
              radius={4}
              top={true}
            />
          );
        })}
        <AxisBottom
          scale={xScale}
          top={yMax}
          left={0}
          stroke={theme.axisColor}
          tickStroke={theme.axisColor}
          numTicks={xMax / theme.fontSize / 5}
          tickLabelProps={() => ({
            textAnchor: "middle",
            fontSize: theme.fontSize,
            fontFamily: theme.fontFamily,
            fill: theme.axisLabelColor
          })}
        />
        <Text
          verticalAnchor="start"
          dx="-2em"
          dy="-2em"
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSize}
          fill={theme.axisLabelColor}
        >
          {unit}
        </Text>
      </Group>
    </svg>
  );
}
