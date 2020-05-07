const START_PT = 6;
const COLOR_CERTAIN = "rgb(119, 185, 229)";
const COLOR_EXPECTED = "rgb(231, 200, 28)";
const COLOR_UNLIKELY = "rgb(238, 63, 55)";

export const planetChartData = {
  type: "horizontalBar",
  data: {
    labels: ["CURRENT MO.", "NEXT MO.", "FOLLOWING MO.", "CURRENT Q", "NEXT Q"],
    datasets: [
      {
        xAxisID: "ruler",
        backgroundColor: "rgba(255, 255, 255, 1)",
        data: [6.5],
        borderColor: "rgba(255, 255, 255, 0)"
      },
      {
        xAxisID: "dot1",
        backgroundColor: "rgba(255, 255, 255, 0)",
        borderColor: "rgb(255, 255, 255)",
        borderWidth: 5,
        type: "bubble",
        data: [
          { x: 1.8, r: 15 },
          { x: 2.1, r: 15 },
          { x: 2.2, r: 15 },
          { x: 7.6 - START_PT, r: 15 },
          { x: 7.6 - START_PT, r: 15 }
        ]
      },
      {
        xAxisID: "dot2",
        backgroundColor: "rgb(255, 255, 255)",
        type: "bubble",
        data: [
          { x: 1.8, r: 5 },
          { x: 2.1, r: 5 },
          { x: 2.2, r: 5 },
          { x: 7.6 - START_PT, r: 5 },
          { x: 7.6 - START_PT, r: 5 }
        ]
      },
      {
        label: "CERTAIN",
        backgroundColor: COLOR_CERTAIN,
        font_color: "rgb(255, 255, 0)",
        xAxisID: "y",
        data: [
          [1.6, 1.7],
          [1.1, 1.2],
          [1.0, 1.3],
          [6.7 - START_PT, 7.1 - START_PT],
          [6.9 - START_PT, 7.4 - START_PT]
        ]
      },
      {
        label: "EXPECTED",
        backgroundColor: COLOR_EXPECTED,
        font_color: "rgb(0, 0, 255)",
        xAxisID: "y1",
        data: [
          [1.7, 2.3],
          [1.2, 2.2],
          [1.3, 2.1],
          [7.1 - START_PT, 7.9 - START_PT],
          [7.4 - START_PT, 8.4 - START_PT]
        ]
      },
      {
        label: "UNLIKELY",
        backgroundColor: COLOR_UNLIKELY,
        font_color: "rgb(0, 255, 255)",
        xAxisID: "y2",
        data: [
          [2.3, 2.4],
          [2.2, 2.5],
          [2.1, 2.5],
          [7.9 - START_PT, 8.4 - START_PT],
          [8.4 - START_PT, 8.7 - START_PT]
        ]
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: false
    },
    legendCallback: function(chart) {
      var div = document.createElement("div");

      div.innerHTML += `
      <p class="left title-font">
         Where Are We Going to Land?
       </p>
    `;

      chart.data.datasets.forEach(function(label, index) {
        if (label.label != undefined) {
          div.innerHTML += `
          <button class="left round-back" style="background: ${
            label.backgroundColor
          }; color: ${label.font_color}">
              ${label.label}
           </button>
        `;
        }
      });
      div.innerHTML += `
      <div class="radio-toolbar">
        <input type="radio" id="radioApple" name="radioFruit" value="apple" checked>
        <label for="radioApple">SALES</label>

        <input type="radio" id="radioBanana" name="radioFruit" value="banana">
        <label for="radioBanana">PROSPECTING</label>
    </div>`;
      return div.outerHTML;
    },
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          id: "y",
          type: "linear",
          display: true,
          position: "top",
          ticks: {
            callback: function(value, index, values) {
              if (value % 1 === 0) {
                return "$" + value + ".0M";
              }
              return "$" + value + "M";
            },
            suggestedMin: 0.5,
            suggestedMax: 3,
            stepSize: 0.5
          }
        },
        {
          id: "y1",
          type: "linear",
          display: false,
          position: "down",
          ticks: {
            suggestedMin: 0.5,
            suggestedMax: 3,
            stepSize: 0.5
          }
        },
        {
          id: "y2",
          type: "linear",
          display: false,
          position: "top",
          ticks: {
            suggestedMin: 0.5,
            suggestedMax: 3,
            stepSize: 0.5
          }
        },
        {
          id: "dot1",
          type: "linear",
          display: false,
          position: "down",
          ticks: {
            callback: function(value, index, values) {
              if (value % 1 === 0) {
                return "$" + value + ".0M";
              }
              return "$" + value + "M";
            },
            suggestedMin: 0.5,
            suggestedMax: 3,
            stepSize: 0.5
          }
        },
        {
          id: "dot2",
          type: "linear",
          display: false,
          position: "down",
          ticks: {
            callback: function(value, index, values) {
              if (value % 1 === 0) {
                return "$" + value + ".0M";
              }
              return "$" + value + "M";
            },
            suggestedMin: 0.5,
            suggestedMax: 3,
            stepSize: 0.5
          }
        },
        {
          id: "ruler",
          type: "linear",
          display: true,
          position: "down",
          ticks: {
            callback: function(value, index, values) {
              if (value % 1 === 0) {
                return "$" + value + ".0M";
              }
              return "$" + value + "M";
            },
            suggestedMin: 6.5,
            suggestedMax: 9,
            stepSize: 0.5
          }
        }
      ]
    }
  }
};

export default planetChartData;
