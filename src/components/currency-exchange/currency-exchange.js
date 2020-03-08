import React from 'react';
import './currency-exchange.css';
import {PageTitle} from "../page-title/page-title";
import {CurrencyResult} from "../currency-result/currency-result";
import {CurrencyForm} from "../currency-form/currency-form";
import {currencies} from "../../data/currencies";

export function CurrencyExchange() {
  return (
    <div>
      <PageTitle title="Currency Exchange"/>
      <CurrencyForm currencies={currencies}/>
      <CurrencyResult result={20000}/>
    </div>
  );
}
