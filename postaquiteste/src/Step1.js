import React, { useState } from 'react';
import InfoPanel from './InfoPanel'; // Importe o InfoPanel

function Step1({ nextStep }) {
    const [senderInfo, setSenderInfo] = useState({
      name: '',
      cpf: '',
      phone: '',
      email: '',
      address: {
        cep: '',
        state: '',
        city: '',
        neighborhood: '',
        street: '',
        number: '',
        complement: '',
      },
    });

  // Função para lidar com as mudanças nos campos de entrada
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSenderInfo({
      ...senderInfo,
      [name]: value,
    });
  };

  // Função para avançar para o próximo passo
  const handleNextStep = () => {
    console.log(senderInfo); // Adicione esta linha para verificar o senderInfo
    // Valide os campos aqui, se necessário
    // Se os campos estiverem válidos, avance para o próximo passo
    nextStep();
  };

  return (
    <div className="step-container">
      <h2>Passo 1: Preenchimento das informações do remetente</h2>
      <form>
        <div className="input-container">
          <label>Nome Completo:</label>
          <input
            type="text"
            name="name"
            value={senderInfo.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>CPF:</label>
          <input
            type="text"
            name="cpf"
            value={senderInfo.cpf}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>Celular:</label>
          <input
            type="text"
            name="phone"
            value={senderInfo.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={senderInfo.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>CEP:</label>
          <input
            type="text"
            name="cep"
            value={senderInfo.cep}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>Estado:</label>
          <input
            type="text"
            name="state"
            value={senderInfo.state}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>Cidade:</label>
          <input
            type="text"
            name="city"
            value={senderInfo.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>Bairro:</label>
          <input
            type="text"
            name="neighborhood"
            value={senderInfo.neighborhood}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>Rua:</label>
          <input
            type="text"
            name="street"
            value={senderInfo.street}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>Número:</label>
          <input
            type="text"
            name="number"
            value={senderInfo.number}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>Complemento:</label>
          <input
            type="text"
            name="complement"
            value={senderInfo.complement}
            onChange={handleInputChange}
          />
        </div>
 
        <button type="button" onClick={handleNextStep}>
          Próximo
        </button>
      </form>
    </div>
  );
}

export default Step1;
