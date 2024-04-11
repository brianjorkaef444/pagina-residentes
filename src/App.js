import React from 'react';
import PaymentGateway from './PaymentGateway';
import PaymentUI from './PaymentUI';
import CommunicationPlatform from './CommunicationPlatform';
import ResidentInquiries from './ResidentInquiries';

const App = () => {
  return (
    <div>
      <h1>Aplicación de Pago</h1>
      <PaymentGateway />
      <PaymentUI />
      <CommunicationPlatform />
      <ResidentInquiries />
    </div>
  );
};

export default App;