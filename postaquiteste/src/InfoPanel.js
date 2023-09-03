import React from 'react';


function InfoPanel({ data, title }) {
  return (
    <div className="info-panel">
      <h2>{title}</h2>
      <ul>
        <li><strong>Nome Completo:</strong> {data.name || '-'}</li>
        <li><strong>CPF:</strong> {data.cpf || '-'}</li>
        <li><strong>Celular:</strong> {data.phone || '-'}</li>
        <li><strong>Email:</strong> {data.email || '-'}</li>
        <li><strong>CEP:</strong> {data.address?.cep || '-'}</li>
        <li><strong>Estado:</strong> {data.address?.state || '-'}</li>
        <li><strong>Cidade:</strong> {data.address?.city || '-'}</li>
        <li><strong>Bairro:</strong> {data.address?.neighborhood || '-'}</li>
        <li><strong>Rua:</strong> {data.address?.street || '-'}</li>
        <li><strong>Número:</strong> {data.address?.number || '-'}</li>
        <li><strong>Complemento:</strong> {data.address?.complement || '-'}</li>
      </ul>
    </div>
  );
}

export default InfoPanel;
