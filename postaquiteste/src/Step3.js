import React, { useState } from 'react';

function Step3({ nextStep, prevStep, senderInfo, receiverInfo }) {
  const [shippingInfo, setShippingInfo] = useState({
    weight: '',
    height: '',
    width: '',
    length: '',
    reverse: false,
    ar: false,
    own_hands: false,
    information: {
      amount: '',
      quantity: '',
      description: '',
    },
  });

  // Função para lidar com as mudanças nos campos de entrada
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setShippingInfo((prevShippingInfo) => ({
      ...prevShippingInfo,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Função para avançar para o próximo passo
  const handleNextStep = () => {
    // Valide os campos aqui, se necessário
    // Se os campos estiverem válidos, avance para o próximo passo
    nextStep();
  };

  return (
    <div>
      <h2>Passo 3: Preenchimento das informações da correspondência</h2>
      <form>
        <label>
          Peso (em kg):
          <input
            type="text"
            name="weight"
            value={shippingInfo.weight}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Altura (em cm):
          <input
            type="text"
            name="height"
            value={shippingInfo.height}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Largura (em cm):
          <input
            type="text"
            name="width"
            value={shippingInfo.width}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Comprimento (em cm):
          <input
            type="text"
            name="length"
            value={shippingInfo.length}
            onChange={handleInputChange}
            required
          />
        </label>
        <switch>
          Logística reversa:
          <switch
            name="reverse"
            value={shippingInfo.reverse}
            onChange={handleInputChange}
            required
          disabled />
        </switch>
        <switch>
          Aviso de recebimento:
          <switch
            name="ar"
            value={shippingInfo.ar}
            onChange={handleInputChange}
            required
          disabled />
        </switch>
        <switch>
          Próprias mãos:
          <switch
            name="own_hands"
            value={shippingInfo.own_hands}
            onChange={handleInputChange}
            required
          disabled />
        </switch>
        <label>
          Valor da mercadoria:
          <input
            type="text"
            name="amount"
            value={shippingInfo.amount}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Quantidade de itens:
          <input
            type="text"
            name="quantity"
            value={shippingInfo.quantity}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Descrição:
          <input
            type="text"
            name="description"
            value={shippingInfo.description}
            onChange={handleInputChange}
            required
          />
        </label>
        {/* Adicione outros campos de entrada aqui */}
        <button type="button" onClick={prevStep}>
          Anterior
        </button>
        <button type="button" onClick={handleNextStep}>
          Próximo
        </button>
      </form>
    </div>
  );
}

export default Step3;
