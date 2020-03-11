import React, {useState} from 'react';
import './currency-exchange.css';
import {PageTitle} from "../page-title/page-title";
import {CurrencyResult} from "../currency-result/currency-result";
import {CurrencyForm} from "../currency-form/currency-form";
import {currencies} from "../../data/currencies";
import Container from "@material-ui/core/Container";
import './currency-exchange.css';
import {CurrencyApi} from "../../api/currency-api";
import { Link } from 'react-router-dom';

export function CurrencyExchange() {
  const [result, setResult] = useState("");

  const currencyApi = new CurrencyApi();

  function onExchangeRateSubmit(fromCurrency, toCurrency, amount) {
    currencyApi.fetchCurrencyRate(fromCurrency, toCurrency)
      .then(response => {
        const rate = response.rate;
        setResult(rate * amount);
      });
  }

  return (
    <Container maxWidth="md" className="container">
      <PageTitle title="Currency Exchange"/>
      <CurrencyForm currencies={currencies} onExchangeRateSubmit={onExchangeRateSubmit}/>
      <CurrencyResult result={result}/>
      <Link to="/chart">Go to chart</Link>
    </Container>
  );
}
