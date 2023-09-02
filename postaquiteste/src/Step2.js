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
