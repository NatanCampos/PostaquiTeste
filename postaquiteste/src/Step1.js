import React, { useState } from 'react';

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
    // Valide os campos aqui, se necessário
    // Se os campos estiverem válidos, avance para o próximo passo
    nextStep();
  };

  return (
    <div>
      <h2>Passo 1: Preenchimento das informações do remetente</h2>
      <form>
        <label>
          Nome Completo:
          <input
            type="text"
            name="name"
            value={senderInfo.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          CPF:
          <input
            type="text"
            name="cpf"
            value={senderInfo.cpf}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
        Celular:
          <input
            type="text"
            name="phone"
            value={senderInfo.phone}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
        Email:
          <input
            type="text"
            name="email"
            value={senderInfo.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
        Cep:
          <input
            type="text"
            name="cep"
            value={senderInfo.address.cep}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
        Estado:
          <input
            type="text"
            name="state"
            value={senderInfo.address.state}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
        Cidade:
          <input
            type="text"
            name="city"
            value={senderInfo.address.city}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
        Bairro:
          <input
            type="text"
            name="neighborhood"
            value={senderInfo.address.neighborhood}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
        Rua:
          <input
            type="text"
            name="street"
            value={senderInfo.address.street}
            onChange={handleInputChange}
            required
          />
        </label>
        {/* Adicione outros campos de entrada aqui */}
        <button type="button" onClick={handleNextStep}>
          Próximo
        </button>
      </form>
    </div>
  );
}

export default Step1;
