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
        type: 'area',
        foreColor: marketData['btc'].chart.foreColor,
        toolbar: {
          show: false,
        },
        height: 180,
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
          labels: {
            show: false,
          },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      series: marketData['btc'].chart.series,
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
        ],
        // labels: {
        //   show: false,
        // },
        axisBorder: {
          show: true,
        },
      },
      yaxis: {
        show: false,
        grid: {
          show: false,
        },
      },
      stroke: {
        width: 0,
        curve: 'smooth',
        colors: [marketData['btc'].chart.foreColor], // Configura el color de la línea
      },
      tooltip: {
        enabled: false,
        dataLabels: {
          enabled: false
        }
      }
    };
  }
}
