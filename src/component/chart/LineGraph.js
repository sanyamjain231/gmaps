import React, { Component } from "react";
import Chart from "chart.js/auto";
import classes from "./lineGraph.module.css";

export default class LineGraph extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    // Chart.register(Chart);

    const myChart = new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: ["Jan", "Feb", "March"],
        datasets: [
          {
            label: "Sales",
            data: [86, 67, 91],
          },
        ],
      },
      options: {
        //Customize chart options
      },
    });

    myChart.destroy();
  }
  render() {
    return (
      <div className={classes.graphContainer}>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}
