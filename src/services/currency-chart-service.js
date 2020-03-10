import * as Highcharts from 'highcharts';

export class CurrencyChartService {
  _chartId;

  constructor(chartId) {
    this._chartId = chartId;
  }

  createChart(currencyFrom, currencyTo, data) {
    Highcharts.chart(this._chartId, {
      title: {
        text: `${currencyFrom} to ${currencyTo} exchange rate`
      },
      yAxis: {
        title: {
          text: 'Exchange rate'
        }
      },
      xAxis: {
        title: {
          text: 'Date'
        },
        type: 'datetime'
      },
      series: [{
        type: 'area',
        name: `${currencyFrom} to ${currencyTo}`,
        data
      }]
    });
  }
}
