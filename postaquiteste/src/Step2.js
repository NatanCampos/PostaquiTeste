import React, { useState } from 'react';

function Step2({ nextStep, prevStep, senderInfo }) {
  const [receiverInfo, setReceiverInfo] = useState({
    fullname: '',
    cpf: '',
    phone: '',
    email: '',
    address: {
      cep: '',
      state: '',
      uf: '',
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
    setReceiverInfo({
      ...receiverInfo,
      [name]: value,
    });
  };

  // Função para avançar para o próximo passo
  const handleNextStep = () => {
    // Valide os campos aqui, se necessário
    // Se os campos estiverem válidos, avance para o próximo passo
    nextStep();
  };

  return (
    <div className="step-container">
      <h2>Passo 2: Preenchimento das informações do destinatário</h2>
      <form>
        <div className="input-container">
          <label>Nome Completo:</label>
          <input
            type="text"
            name="fullname"
            value={receiverInfo.fullname}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>CPF:</label>
          <input
            type="text"
            name="cpf"
            value={receiverInfo.cpf}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>Celular:</label>
          <input
            type="text"
            name="phone"
            value={receiverInfo.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={receiverInfo.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>CEP:</label>
          <input
            type="text"
            name="cep"
            value={receiverInfo.cep}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>Estado:</label>
          <input
            type="text"
            name="state"
            value={receiverInfo.state}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>Cidade:</label>
          <input
            type="text"
            name="city"
            value={receiverInfo.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>Bairro:</label>
          <input
            type="text"
            name="neighborhood"
            value={receiverInfo.neighborhood}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>Rua:</label>
          <input
            type="text"
            name="street"
            value={receiverInfo.street}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>Número:</label>
          <input
            type="text"
            name="number"
            value={receiverInfo.number}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>Complemento:</label>
          <input
            type="text"
            name="complement"
            value={receiverInfo.complement}
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

export default Step2;
