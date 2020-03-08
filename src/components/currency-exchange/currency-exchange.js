import React, {useEffect, useState} from 'react';
import './currency-exchange.css';
import {PageTitle} from "../page-title/page-title";
import {CurrencyResult} from "../currency-result/currency-result";
import {CurrencyForm} from "../currency-form/currency-form";

export function CurrencyExchange() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  });

  function onClickHandler() {
    setCount(previousCount => {
      return previousCount + 1;
    });
  }

  return (
    <div>
      <button type="button" onClick={onClickHandler}>Click me</button>
      <PageTitle/>
      <CurrencyForm/>
      <CurrencyResult/>

    </div>
  );
}
