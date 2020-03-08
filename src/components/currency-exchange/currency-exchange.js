import React from 'react';
import './currency-exchange.css';
import {PageTitle} from "../page-title/page-title";
import {CurrencyResult} from "../currency-result/currency-result";
import {CurrencyForm} from "../currency-form/currency-form";

export function CurrencyExchange() {
  return (
    <div>
      <PageTitle/>
      <CurrencyForm/>
      <CurrencyResult/>
    </div>
  );
}
