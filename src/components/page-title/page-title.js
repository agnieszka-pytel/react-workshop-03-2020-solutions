import React from 'react';
import './page-tite.css';
import Typography from "@material-ui/core/Typography";

export function PageTitle(props) {
  const {title} = props;

  return (
    <Typography variant="h2" component="h2" align="center">
      {title}
    </Typography>
  );
}
