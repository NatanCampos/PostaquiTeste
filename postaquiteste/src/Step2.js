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
    <div>
      <h2>Passo 2: Preenchimento das informações do destinatário</h2>
      <form>
        <label>
          Nome Completo:
          <input
            type="text"
            name="fullname"
            value={receiverInfo.fullname}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          CPF:
          <input
            type="text"
            name="cpf"
            value={receiverInfo.cpf}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
        Celular:
          <input
            type="text"
            name="phone"
            value={receiverInfo.phone}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
        Email:
          <input
            type="text"
            name="email"
            value={receiverInfo.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
        Cep:
          <input
            type="text"
            name="cep"
            value={receiverInfo.cep}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
        Estado:
          <input
            type="text"
            name="state"
            value={receiverInfo.state}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
        Cidade:
          <input
            type="text"
            name="city"
            value={receiverInfo.city}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
        Bairro:
          <input
            type="text"
            name="neighborhood"
            value={receiverInfo.neighborhood}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
        Rua:
          <input
            type="text"
            name="street"
            value={receiverInfo.street}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
        Número:
          <input
            type="text"
            name="number"
            value={receiverInfo.number}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
        Complemento:
          <input
            type="text"
            name="complement"
            value={receiverInfo.complement}
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

export default Step2;
