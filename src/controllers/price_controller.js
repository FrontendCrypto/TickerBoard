import Chart from 'stimulus-chartjs'

import { marketData } from '../data'

export default class extends Chart {
  connect() {
    super.connect()

    // The chart.js instance
    this.chart

    // Options from the data attribute.
    this.options

    // Default options for every charts.
    this.defaultOptions

    this.chart.data = marketData["btc"].chart;
    this.chart.data.datasets[0].tension = 0.4;
    this.chart.data.datasets[0].borderColor = '#F7931A';
    this.chart.update()
  }

  get defaultOptions() {
    return {
      type: 'line',
      options: {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
            intersect: false,
            mode: 'nearest',
          },
        },
        scales: {
          x: {
            display: false,
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
          y: {
            display: false,
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        },
        interaction: {
          intersect: false,
          mode: 'index',
        },
      },
    }
  }
}