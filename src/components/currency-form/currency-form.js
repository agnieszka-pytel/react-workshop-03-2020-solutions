import React, {useState} from 'react';
import './currency-form.css';
import TextField from '@material-ui/core/TextField';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import {CurrencyApi} from "../../api/currency-api";

export function CurrencyForm(props) {
  const {currencies} = props;

  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");

  function amountHandler(event) {
    const value = event.target.value;
    console.log(value);
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

   const currencyApi = new CurrencyApi();

  function onClickHandler() {
    currencyApi.fetchCurrencyRate(fromCurrency, toCurrency)
      .then(response => {
        console.log(response.rate);
      });
  }

  function renderCurrencies() {
    return currencies.map(currency => {
      return (
        <MenuItem key={currency} value={currency}>{currency}</MenuItem>
      );
    });
  }

  return (
    <div className="currency-form">
      <TextField
        className="currency-form__item"
        label="Amount"
        value={amount}
        type="number"
        onChange={amountHandler}
      />

      <FormControl>
        <InputLabel id="demo-simple-select-label">From currency</InputLabel>
        <Select
          className="currency-form__item"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={fromCurrency}
          onChange={fromCurrencyHandler}
        >
          {renderCurrencies()}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="demo-simple-select-label">To currency</InputLabel>
        <Select
          className="currency-form__item"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={toCurrency}
          onChange={toCurrencyHandler}
        >
          {renderCurrencies()}
        </Select>
      </FormControl>

      <Button type="button" variant="contained" color="primary" onClick={onClickHandler}>Exchange</Button>
    </div>
  );
}
