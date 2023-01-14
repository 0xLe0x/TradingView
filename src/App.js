import logo from "./logo.svg";
import "./App.css";
import React, { useMemo, useEffect, useState } from "react";
import Chart from "./components/Chart/Chart";

import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

function App(props) {
  const data_1 = [
    { time: 1529899200, value: 32.51 },
    { time: 1529899201, value: 31.11 },
    { time: 1529899202, value: 27.02 },
    { time: 1529899203, value: 27.32 },
    { time: 1529899204, value: 25.17 },
    { time: 1529899205, value: 28.89 },
    { time: 1529899206, value: 25.46 },
    { time: 1529899207, value: 23.92 },
    { time: 1529899208, value: 22.68 },
    { time: 1529899209, value: 22.67 },
    { time: 1529899210, value: 32.51 },
    { time: 1529899211, value: 31.11 },
    { time: 1529899212, value: 27.02 },
    { time: 1529899213, value: 27.32 },
    { time: 1529899214, value: 25.17 },
    { time: 1529899215, value: 28.89 },
    { time: 1529899216, value: 25.46 },
    { time: 1529899217, value: 23.92 },
    { time: 1529899218, value: 22.68 },
    { time: 1529899219, value: 22.67 },
    { time: 1529899220, value: 32.51 },
    { time: 1529899221, value: 31.11 },
    { time: 1529899222, value: 27.02 },
    { time: 1529899223, value: 27.32 },
    { time: 1529899224, value: 25.17 },
    { time: 1529899225, value: 28.89 },
    { time: 1529899226, value: 25.46 },
    { time: 1529899227, value: 23.92 },
    { time: 1529899228, value: 22.68 },
    { time: 1529899229, value: 22.67 },
  ];
  const data_2 = [
    { time: 1529899200, value: 35.51 },
    { time: 1529899201, value: 32.11 },
    { time: 1529899202, value: 27.02 },
    { time: 1529899203, value: 17.32 },
    { time: 1529899204, value: 23.17 },
    { time: 1529899205, value: 25.89 },
    { time: 1529899206, value: 27.46 },
    { time: 1529899207, value: 22.92 },
    { time: 1529899208, value: 28.68 },
    { time: 1529899209, value: 29.67 },
    { time: 1529899210, value: 22.51 },
    { time: 1529899211, value: 28.11 },
    { time: 1529899212, value: 28.02 },
    { time: 1529899213, value: 29.32 },
    { time: 1529899214, value: 23.17 },
    { time: 1529899215, value: 27.89 },
    { time: 1529899216, value: 26.46 },
    { time: 1529899217, value: 32.92 },
    { time: 1529899218, value: 12.68 },
    { time: 1529899219, value: 24.67 },
    { time: 1529899220, value: 22.51 },
    { time: 1529899221, value: 24.11 },
    { time: 1529899222, value: 27.02 },
    { time: 1529899223, value: 29.32 },
    { time: 1529899224, value: 25.17 },
    { time: 1529899225, value: 28.89 },
    { time: 1529899226, value: 23.46 },
    { time: 1529899227, value: 27.92 },
    { time: 1529899228, value: 25.68 },
    { time: 1529899229, value: 23.67 },
  ];
  const data_3 = [
    { time: 1529899200, value: 24.51 },
    { time: 1529899201, value: 18.11 },
    { time: 1529899202, value: 23.02 },
    { time: 1529899203, value: 27.32 },
    { time: 1529899204, value: 36.17 },
    { time: 1529899205, value: 30.89 },
    { time: 1529899206, value: 17.76 },
    { time: 1529899207, value: 19.92 },
    { time: 1529899208, value: 24.58 },
    { time: 1529899209, value: 39.67 },
    { time: 1529899210, value: 17.51 },
    { time: 1529899211, value: 15.31 },
    { time: 1529899212, value: 38.62 },
    { time: 1529899213, value: 39.32 },
    { time: 1529899214, value: 33.57 },
    { time: 1529899215, value: 19.89 },
    { time: 1529899216, value: 15.86 },
    { time: 1529899217, value: 22.92 },
    { time: 1529899218, value: 11.68 },
    { time: 1529899219, value: 34.27 },
    { time: 1529899220, value: 25.51 },
    { time: 1529899221, value: 26.61 },
    { time: 1529899222, value: 17.82 },
    { time: 1529899223, value: 21.62 },
    { time: 1529899224, value: 25.17 },
    { time: 1529899225, value: 27.89 },
    { time: 1529899226, value: 13.56 },
    { time: 1529899227, value: 20.32 },
    { time: 1529899228, value: 23.28 },
    { time: 1529899229, value: 24.67 },
  ];
  return (
    <div className="App">
      <Chart data_1={data_1} data_2={data_2} data_3={data_3}></Chart>
    </div>
  );
}

export default App;
