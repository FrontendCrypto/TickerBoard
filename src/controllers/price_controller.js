import { Controller } from 'stimulus';
import ApexCharts from 'apexcharts';

import { marketData } from '../data';

export default class extends Controller {
  static targets = ['canvas'];
  connect() {
    this.chart = new ApexCharts(this.canvasTarget, this.defaultOptions);
    this.chart.data = marketData['btc'].chart;

    this.chart.render();
    this.onUpdateContent();
  }

  onUpdateContent() {
    document.addEventListener('update-content', (event) => {
      const market = event.detail[0];
      const ticker = market['ticker'];

      console.log('Chart data:', market);

      this.chart.updateSeries(market.chart.series);
    });
  }

  get defaultOptions() {
    return {
      chart: {
        type: 'line',
        foreColor: marketData['btc'].chart.foreColor,
        toolbar: {
          show: false,
        },
      },
      series: marketData['btc'].chart.series,
      xaxis: {
        categories: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        grid: {
          show: false,
        },
      },
      yaxis: {
        show: false,
        grid: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      stroke: {
        width: 1.5,
        curve: 'smooth',
        colors: [marketData['btc'].chart.foreColor], // Configura el color de la línea
      },
      toolbar: {
        show: false,
      },
      // tooltip: {
      //   dataLabels: {
      //     enabled: false
      //   }
      // }
    };
  }
}
