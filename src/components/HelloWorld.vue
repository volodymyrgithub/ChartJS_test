<template>
  <div>
    <div id="legend-AccidentsByRoadConditions" class="legend" v-html="markData"></div>
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import planetChartData from "./chart-data.js";

export default {
  name: "HelloWorld",
  data: () => ({
    planetChartData: planetChartData,
    markData: null
  }),
  mounted() {
    this.createChart("planet-chart", this.planetChartData);
  },
  methods: {
    createChart(chartId, chartData) {
      var ctx = document.getElementById(chartId);

      Chart.pluginService.register({
        afterDatasetsDraw: function(chart) {
          var ctx = chart.chart.ctx;
          var xAxe = chart.config.options.scales.xAxes[0];
          var xScale = chart.scales[xAxe.id];
          var yAxe = chart.config.options.scales.yAxes[0];
          var yScale = chart.scales[yAxe.id];
          ctx.save();

          ctx.strokeStyle = "rgb(120, 120, 120)";
          ctx.lineWidth = "2";
          ctx.beginPath();
          ctx.setLineDash([10, 10]);
          ctx.moveTo(0, yScale._gridLineItems[3].ty1);
          ctx.lineTo(xScale.right + 50, yScale._gridLineItems[3].ty1);
          ctx.stroke();
          ctx.restore();

          ctx.save();

          ctx.strokeStyle = "rgb(255, 255, 255)";
          ctx.lineWidth = "2";
          ctx.beginPath();
          ctx.moveTo(0, yScale._gridLineItems[0].ty1);
          ctx.lineTo(xScale.right, yScale._gridLineItems[0].ty1);
          ctx.stroke();
          ctx.restore();
        }
      });

      this.myChart = new Chart(ctx, chartData);
      this.markData = this.myChart.generateLegend();
    }
  },
  beforeDestroy() {
    this.myChart.destroy();
  }
};
</script>

<style>
.round-back {
  border-radius: 100px;
  margin-left: 10px;
}

.title-font {
  margin: 0 0 0 0;
  font-size: 20px;
  font-weight: bold;
}

.left {
  float: left;
}
.radio-toolbar {
  float: right;
  border-style: solid;
}
.radio-toolbar input {
  display: none;
  margin: 0 0 0 0;
}
.radio-toolbar input[type="radio"] {
  opacity: 0;
}
.radio-toolbar input[type="radio"]:checked + label {
  background-color: rgb(118, 185, 229);
  border-color: rgb(118, 185, 229);
}
.radio-toolbar label {
  width: 120px;
  display: inline-block;
  background-color: #ffffff;
  padding: 10px 20px;
  font-family: sans-serif, Arial;
  font-size: 16px;
  border-style: none;
}
.radio-toolbar input[type="radio"]:checked + label {
  background-color: rgb(118, 185, 229);
  border-color: rgb(118, 185, 229);
}
.radio-toolbar label:hover {
  background-color: #dfd;
}
</style>
