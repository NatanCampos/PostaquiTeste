import React from 'react';

function Step4({ nextStep, prevStep, senderInfo, receiverInfo, shippingInfo }) {
  // Lógica para fazer a requisição para a API Postaqui e obter o código de rastreio
  const handlePostToAPI = async () => {
    try {
      // Faça a requisição para a API com as informações do remetente, destinatário e envio
      // Aguarde a resposta da API e obtenha o código de rastreio
      const trackingCode = await fetch('https://f29faec4-6487-4b60-882f-383b4054cc32.mock.pstmn.io/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender: senderInfo,
          receiver: receiverInfo,
          package: shippingInfo,
        }),
      }).then((response) => response.json());

      // Exiba o código de rastreio para o usuário
      alert(`Código de Rastreio: ${trackingCode.code}`);

      // Avance para o próximo passo
      nextStep();
    } catch (error) {
      // Lógica de tratamento de erro aqui
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Passo 4: Mostrar resultado do frete</h2>
      {/* Exiba informações relevantes do envio e aguarde a resposta da API */}
      <button type="button" onClick={prevStep}>
        Anterior
      </button>
      <button type="button" onClick={handlePostToAPI}>
        Fazer Postagem
      </button>
    </div>
  );
}

export default Step4;
