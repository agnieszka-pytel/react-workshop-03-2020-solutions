import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { PageTitle } from '../page-title/page-title';
import { Link } from 'react-router-dom';
import { CurrencyApi } from '../../api/currency-api';
import { CurrencyChartService } from '../../services/currency-chart-service';

export function CurrencyChart() {
  const chartId = 'chart-container';
  const currencyApi = new CurrencyApi();
  const currencyChartService = new CurrencyChartService(chartId);

  useEffect(() => {
    const currencyFrom = 'BTC';
    const currencyTo = 'USD';
    currencyApi.fetchDailyPrices(currencyFrom, currencyTo)
      .then(response => {
        if (response.errorMessage) {
          console.error(response.errorMessage);
          return;
        }

        const data = response.series.map(i => {
          const date = new Date(i.date).getTime();
          const price = parseFloat(i.value);
          return [date, price];
        });
        currencyChartService.createChart(currencyFrom, currencyTo, data);
      });
  });

  return (
    <Container maxWidth="md">
      <PageTitle title="Currency Chart"/>
      <div id="chart-container"/>
      <Link to="/">Go to exchange</Link>
    </Container>
  );
}
