import React from "react";
import { render } from "react-dom";
import ParentSize from "@visx/responsive/lib/components/ParentSize";

import {
  histWater,
  histBreak,
  histExercise,
  todayBreak,
  exerciseRoute
} from "./data";
import HistoricChart from "./HistoricChart";
import ClockChart from "./ClockChart";
import Map from "./Map";

import "leaflet/dist/leaflet.css";
import "./sandbox-styles.css";

render(
  <React.StrictMode>
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h5>Today</h5>
        </div>
        <div className="col-8">
          <h5>History</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <h6>Water</h6>
        </div>
        <div className="col-8">
          <h6 className="d-flex flex-row justify-content-between">
            Water count
            <span className="badge badge-water">
              Streak: <strong>9</strong>
            </span>
          </h6>
        </div>
      </div>
      <div className="row row-chart">
        <div className="col-4">
          <div className="water-cups">
            <i className="bi bi-cup-fill water-cup"></i>
            <i className="bi bi-cup-fill water-cup"></i>
            <i className="bi bi-cup-fill water-cup"></i>
            <i className="bi bi-cup-fill water-cup"></i>
            <i className="bi bi-cup-fill water-cup">
              <span className="water-cup-label">5</span>
            </i>
            <i className="bi bi-cup-fill water-cup"></i>
            <i className="bi bi-cup-fill water-cup"></i>
            <i className="bi bi-cup-fill water-cup"></i>
          </div>
        </div>
        <div className="col-8">
          <ParentSize>
            {({ width, height }) => (
              <HistoricChart
                width={width}
                height={height}
                data={histWater}
                color={"#00BBE1"}
                threshold={8}
                unit={"Glasses"}
              />
            )}
          </ParentSize>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <h6>Break</h6>
        </div>
        <div className="col-8">
          <h6 className="d-flex flex-row justify-content-between">
            Avg. break per hour
            <span className="badge badge-empty">Start your streak today!</span>
          </h6>
        </div>
      </div>
      <div className="row row-chart">
        <div className="col-4 d-flex flex-row justify-content-between align-items-center">
          <ParentSize className="flex-shrink-1">
            {({ width, height }) => (
              <ClockChart
                width={width}
                height={height}
                data={todayBreak}
                color={"#05BB4A"}
              />
            )}
          </ParentSize>
          <div className="break-info flex-grow-1">
            <div className="h5 break-time">30 mins</div>
            <div className="break-total">out of 5.5 work hours</div>
            <button type="button" className="btn btn-sm btn-break">
              Take a Break <i className="bi bi-play-fill"></i>
            </button>
          </div>
        </div>
        <div className="col-8">
          <ParentSize>
            {({ width, height }) => (
              <HistoricChart
                width={width}
                height={height}
                data={histBreak}
                color={"#05BB4A"}
                threshold={5}
                unit={"mins"}
              />
            )}
          </ParentSize>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <h6 className="d-flex flex-row justify-content-between">
            Exercise
            <span className="badge badge-empty">Completed!</span>
          </h6>
        </div>
        <div className="col-8">
          <h6 className="d-flex flex-row justify-content-between">
            Exercise time
            <span className="badge badge-exercise">
              Streak: <strong>3</strong>
            </span>
          </h6>
        </div>
      </div>
      <div className="row row-chart">
        <div className="col-4">
          <ParentSize>
            {({ width, height }) => (
              <Map
                width={width}
                height={height}
                route={exerciseRoute}
                color={"#6C31D1"}
              />
            )}
          </ParentSize>
        </div>
        <div className="col-8">
          <ParentSize>
            {({ width, height }) => (
              <HistoricChart
                width={width}
                height={height}
                data={histExercise}
                color={"#6C31D1"}
                threshold={22}
                unit={"mins"}
              />
            )}
          </ParentSize>
        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
