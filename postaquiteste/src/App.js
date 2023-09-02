import React, { useState, useEffect } from 'react';
import './App.css'; // Importe os estilos CSS aqui, se aplicável
import Step1 from './Step1'; // Importe os componentes Step1, Step2, etc., conforme necessário
import Step2 from './Step2'; // Importe os componentes Step1, Step2, etc., conforme necessário
import Step3 from './Step3'; // Importe os componentes Step1, Step2, etc., conforme necessário
import Step4 from './Step4'; // Importe os componentes Step1, Step2, etc., conforme necessário

function App() {
  const [step, setStep] = useState(1); // Estado para rastrear o passo atual
  const [senderInfo, setSenderInfo] = useState({});
  const [receiverInfo, setReceiverInfo] = useState({});
  const [shippingInfo, setShippingInfo] = useState({});

  // Função para avançar para o próximo passo
  const nextStep = () => {
    setStep(step + 1);
  };

  // Função para voltar ao passo anterior
  const prevStep = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    // Lógica de carregamento e manipulação de dados da API aqui, conforme necessário
  }, [step]); // Dependência de 'step' para executar efeitos quando o passo muda

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mini Calculadora Postaqui</h1>
      </header>
      <main className="App-main">
        {/* Renderize os componentes relevantes com base no valor de 'step' */}
        {step === 1 && <Step1 nextStep={nextStep} />}
        {step === 2 && (
          <Step2 nextStep={nextStep} prevStep={prevStep} senderInfo={senderInfo} />
        )}
        {step === 3 && (
          <Step3
            nextStep={nextStep}
            prevStep={prevStep}
            senderInfo={senderInfo}
            receiverInfo={receiverInfo}
            setShippingInfo={setShippingInfo} // Passe a função para definir informações de envio
          />
        )}
        {step === 4 && (
          <Step4
            nextStep={nextStep}
            prevStep={prevStep}
            senderInfo={senderInfo}
            receiverInfo={receiverInfo}
            shippingInfo={shippingInfo}
          />
        )}
        {/* Adicione mais componentes para outros passos aqui */}
      </main>
    </div>
  );
}

export default App;
