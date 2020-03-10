import React from 'react';
import Container from '@material-ui/core/Container';
import { PageTitle } from '../page-title/page-title';
import { Link } from 'react-router-dom';

export function CurrencyChart() {
  return (
    <Container maxWidth="md">
      <PageTitle title="Currency Chart"/>
      <Link to="/">Go to chart</Link>
    </Container>
  );
}
