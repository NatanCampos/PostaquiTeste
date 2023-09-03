import React from 'react';
import { Button, Typography } from '@mui/material';

function Step5({ resetApp, trackingCode }) {
  return (
    <div>
      <Typography variant="h6">
        Código de Rastreio: {trackingCode}
      </Typography>
      <Button variant="contained" color="primary" onClick={resetApp}>
        Nova Postagem
      </Button>
    </div>
  );
}

export default Step5;
