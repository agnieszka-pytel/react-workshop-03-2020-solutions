import React from 'react';
import './page-tite.css';

export function PageTitle(props) {
  const {title} = props;

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
