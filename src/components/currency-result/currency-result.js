import React from 'react';
import './currency-result.css';

export function CurrencyResult(props) {
  const {result} = props;

  return (
    <div>
      Result: {result}
    </div>
  );
}
