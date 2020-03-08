import React from 'react';
import './currency-form.css';

export function CurrencyForm() {
  return (
    <div>
      <input type="text" placeholder="Amount"/>
      <select>
        <option value={null}>Select currency</option>
      </select>
      <select>
        <option value={null}>Select currency</option>
      </select>
      <button type="button">Exchange</button>
    </div>
  );
}
