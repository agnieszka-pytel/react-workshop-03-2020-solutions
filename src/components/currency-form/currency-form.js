import React, {useState} from 'react';
import './currency-form.css';

export function CurrencyForm() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");

  function amountHandler(event) {
    const value = event.target.value;
    setAmount(value);
  }

  function fromCurrencyHandler(event) {
    const value = event.target.value;
    setFromCurrency(value);
  }

  function toCurrencyHandler(event) {
    const value = event.target.value;
    setToCurrency(value);
  }

  function onClickHandler() {
    console.log(amount, fromCurrency, toCurrency);
  }

  return (
    <div>
      <input type="number" min={0} value={amount} placeholder="Amount" onChange={amountHandler}/>

      <select value={fromCurrency} onChange={fromCurrencyHandler}>
        <option value={null}>Select currency</option>
        <option value={'USD'}>USD</option>
        <option value={'EUR'}>EUR</option>
      </select>

      <select value={toCurrency} onChange={toCurrencyHandler}>
        <option value={null}>Select currency</option>
        <option value={'USD'}>USD</option>
        <option value={'EUR'}>EUR</option>
      </select>

      <button type="button" onClick={onClickHandler}>Exchange</button>
    </div>
  );
}
