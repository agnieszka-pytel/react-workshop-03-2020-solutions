import React from 'react';
import './App.css';
import {CurrencyExchange} from "./components/currency-exchange/currency-exchange";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { CurrencyChart } from './components/currency-chart/currency-chart';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CurrencyExchange/>
        </Route>

        <Route path="/chart">
          <CurrencyChart/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
