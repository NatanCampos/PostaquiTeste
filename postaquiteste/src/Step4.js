import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import axios from 'axios';

function Step4({ nextStep, prevStep, senderInfo, receiverInfo, shippingInfo }) {
  const [trackingCode, setTrackingCode] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const calculateShipping = async () => {
      try {
        setLoading(true);
    
        const response = await axios.post(
          'https://f29faec4-6487-4b60-882f-383b4054cc32.mock.pstmn.io/shipping_calculate',
          {
            sender: senderInfo,
            receiver: receiverInfo,
            package: shippingInfo,
          }
        );
    
        const calculatedData = response.data.shipment[0]; // Use o primeiro resultado (você pode ajustar isso conforme necessário)
    
        // Atualize o estado com o valor do frete
        setTrackingCode(calculatedData.code);
        setLoading(false);
      } catch (error) {
        // Lógica de tratamento de erro aqui
        console.error('Erro ao calcular o frete', error.message);
        setLoading(false);

        // Se o erro for devido a um limite de solicitações, espere por um tempo e faça a solicitação novamente
        if (error.response && error.response.status === 429) {
          // Espere por 5 segundos (você pode ajustar o tempo de espera conforme necessário)
          setTimeout(() => {
            calculateShipping();
          }, 5000);
        }
      }
    };


    calculateShipping();
  }, [senderInfo, receiverInfo, shippingInfo]);

  return (
    <div>
      <Typography variant="h6">
        Código de Rastreio: {trackingCode}
      </Typography>
      <Button variant="contained" color="primary" onClick={prevStep}>
        Voltar
      </Button>
      <Button variant="contained" color="primary" onClick={nextStep}>
        Próximo
      </Button>
    </div>
  );
}

export default Step4;
