import { createChart, ColorType } from "lightweight-charts";
import React, { useEffect, useRef } from "react";
import { Component } from "react";

const Chart = (props) => {
  const {
    data_1,
    data_2,
    data_3,
    backgroundColor = "black",
    lineColor = "#2962FF",
    textColor = "white",
  } = props;
  const chartContainerRef = useRef();

  useEffect(() => {
    //resize window
    const handleResize = () => {
      chart.applyOptions({
        width: chartContainerRef.current.clientWidth,
        // grid: {
        //     visible: false,
        //     vertLines: {
        //         visible: false
        //     },
        //     horzLines: {
        //         visible: false
        //     }
        // },
        // timeScale: { timeVisible: true, secondsVisible: true },
      });
      chart.timeScale().fitContent();
    };

    //create chart
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      width: chartContainerRef.current.clientWidth,
      height: 300,
      grid: {
        vertLines: {
          visible: false,
        },
        horzLines: {
          visible: false,
        },
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: true,
        barSpacing: 10,
      },
      rightPriceScale: {
        mode: 1
      }
    });
    chart.timeScale().fitContent();
    const Series_1 = chart.addLineSeries({
      color: lineColor,
    });
    const Series_2 = chart.addLineSeries({
      color: "#FFF",
    });
    const Series_3 = chart.addLineSeries({
      color:"#F00"
    })
    Series_1.setData(data_1);
    Series_2.setData(data_2);
    Series_3.setData(data_3);

    //add legand
    const symbolName_1 = "ETC USD PRICE";
    const symbolName_2 = "BTC USD PRICE";
    const symbolName_3 = "BNB USD PRICE";

    const container = document.getElementById("container");

    const legend = document.createElement("div");
    legend.style = `position: absolute; left: 12px; top: 12px; z-index: 1; font-size: 14px; font-family: sans-serif; line-height: 18px; font-weight: 300;`;
    container.appendChild(legend);

    const firstRow = document.createElement("div");
    firstRow.innerHTML = symbolName_1;
    firstRow.style.color = "white";
    legend.appendChild(firstRow);

    const secondRow = document.createElement("div");
    secondRow.innerHTML = symbolName_2;
    secondRow.style.color = "white";
    legend.appendChild(secondRow);

    const thirdRow = document.createElement("div");
    thirdRow.innerHTML = symbolName_3;
    thirdRow.style.color = "white";
    legend.appendChild(thirdRow);

    chart.subscribeCrosshairMove((param) => {
      let priceFormatted = "";
      if (param.time) {
        const price = param.seriesPrices.get(Series_1);
        priceFormatted = price.toFixed(2);
      }

      let priceFormatted_1 = "";
      if (param.time) {
        const price_1 = param.seriesPrices.get(Series_2);
        priceFormatted_1 = price_1.toFixed(2);
      }

      let priceFormatted_2 = "";
      if (param.time) {
        const price_2 = param.seriesPrices.get(Series_3);
        priceFormatted_2 = price_2.toFixed(2);
      }
      firstRow.innerHTML = `${symbolName_1} <strong>${priceFormatted}</strong>`;
      secondRow.innerHTML = `${symbolName_2} <strong>${priceFormatted_1}</strong>`;
      thirdRow.innerHTML = `${symbolName_3} <strong>${priceFormatted_2}</strong>`;
    });
    //

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [data_1, backgroundColor, lineColor, textColor]);

  return (
    <div>
      <div ref={chartContainerRef} id="container" />
    </div>
  );
};

// function Chart() {
//     return (
//         <div>sderwtwe</div>
//     )
// }

export default Chart;
