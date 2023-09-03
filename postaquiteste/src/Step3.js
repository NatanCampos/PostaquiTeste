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
    <div className="step-container">
      <h2>Passo 3: Preenchimento das informações da correspondência</h2>
      <form>
        <div className="input-container">
          <label>Peso (em kg):</label>
          <input
            type="text"
            name="weight"
            value={shippingInfo.weight}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>Altura (em cm):</label>
          <input
            type="text"
            name="height"
            value={shippingInfo.height}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>Largura (em cm):</label>
          <input
            type="text"
            name="width"
            value={shippingInfo.width}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>Comprimento (em cm):</label>
          <input
            type="text"
            name="length"
            value={shippingInfo.length}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="checkbox-container">
          <label>
            Logística reversa:
            <input
              type="checkbox"
              name="reverse"
              checked={shippingInfo.reverse}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="checkbox-container">
          <label>
            Aviso de recebimento:
            <input
              type="checkbox"
              name="ar"
              checked={shippingInfo.ar}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="checkbox-container">
          <label>
            Próprias mãos:
            <input
              type="checkbox"
              name="own_hands"
              checked={shippingInfo.own_hands}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="input-container">
          <label>Valor da mercadoria:</label>
          <input
            type="text"
            name="amount"
            value={shippingInfo.amount}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>Quantidade de itens:</label>
          <input
            type="text"
            name="quantity"
            value={shippingInfo.quantity}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>Descrição:</label>
          <input
            type="text"
            name="description"
            value={shippingInfo.description}
            onChange={handleInputChange}
            required
          />
        </div>
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
