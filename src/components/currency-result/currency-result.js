import React from 'react';
import './currency-result.css';
import Typography from "@material-ui/core/Typography";

export function CurrencyResult(props) {
  const {result} = props;

  return (
    <Typography variant="h4" align="center">
      Result: {result}
    </Typography>
  );
}
