import React from 'react';
import PaymentGateway from './PaymentGateway';
import PaymentUI from './PaymentUI';
import CommunicationPlatform from './CommunicationPlatform';
import ResidentInquiries from './ResidentInquiries';
import CuotasYRecaudaciones from './CuotasYRecaudaciones'; // Importar el nuevo componente
import ChatComunitario from './ChatComunitario'; // Importar el nuevo componente

const App = () => {
  return (
    <div>
      <h1>Aplicación de Pago</h1>
      <PaymentGateway />
      <PaymentUI />
      <CommunicationPlatform />
      <ResidentInquiries />
      <CuotasYRecaudaciones /> {/* Incluir el nuevo componente de cuotas y recaudaciones */}
      <ChatComunitario /> {/* Incluir el nuevo componente de chat comunitario */}
    </div>
  );
};

export default App;