import React, { useState } from 'react';
import './App.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import InfoPanel from './InfoPanel'; 


function App() {
  const [step, setStep] = useState(1);
  const [senderInfo, setSenderInfo] = useState({});
  const [receiverInfo, setReceiverInfo] = useState({});
  const [shippingInfo, setShippingInfo] = useState({});
  const [shippingPrice, setShippingPrice] = useState(null);
  const [trackingCode, setTrackingCode] = useState('');
  
  
  const resetApp = () => {
    setStep(1);
    setSenderInfo({});
    setReceiverInfo({});
    setShippingInfo({});
    setTrackingCode('');
  };

  const steps = ['Remetente', 'Destinatário', 'Correspondência', 'Resultado', 'Código de Rastreio'];

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mini Calculadora Postaqui</h1>
      </header>
      <main className="App-main">
      {step === 1 && (
  <Step1
    nextStep={nextStep}
    senderInfo={senderInfo}
    setSenderInfo={setSenderInfo} // Adicione esta linha
  />
)}

        {step === 2 && (
  <Step2
    nextStep={nextStep}
    prevStep={prevStep}
    senderInfo={senderInfo} // Certifique-se de passar senderInfo para o Step2
  />
)}
        {step === 3 && <Step3 nextStep={nextStep} prevStep={prevStep} shippingInfo={shippingInfo} setShippingInfo={setShippingInfo} />}
        {step === 4 && <Step4 nextStep={nextStep} prevStep={prevStep} senderInfo={senderInfo} receiverInfo={receiverInfo} shippingInfo={shippingInfo} />}
        {step === 5 && <Step5 trackingCode={trackingCode} resetApp={resetApp} />}
        {/* Adicione mais componentes para outros passos aqui */}
      </main>
    </div>
  );
}

export default App;
