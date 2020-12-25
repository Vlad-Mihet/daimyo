import React from "react";
import { Doughnut } from "react-chartjs-2";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        datasets: [
          {
            data: [20, 18, 16, 12, 9, 8, 7, 6, 4],
            backgroundColor: [
              "rgba(4, 232, 36, 0.8)",
              "rgba(4, 232, 36, 0.7)",
              "rgba(19, 138, 54, 0.9)",
              "rgba(19, 138, 54, 0.85)",
              "rgba(19, 138, 54, 0.75)",
              "rgba(19, 138, 54, 0.7)",
              "rgba(19, 138, 54, 0.55)",
              "rgba(19, 138, 54, 0.6)",
              "rgba(19, 138, 54, 0.6)",
              "rgba(4, 232, 36, 0.4)",
            ],
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className="chart">
        <Doughnut
          height={10}
          width={10}
          data={this.state.chartData}
          options={{
            tooltips: {
              enabled: false,
            },
            hover: {
              mode: null,
            },
            elements: {
              arc: {
                borderWidth: 0,
              },
            },
            cutoutPercentage: 65,
          }}
        />
      </div>
    );
  }
}

export default Chart;
