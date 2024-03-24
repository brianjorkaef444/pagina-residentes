import React, { useState } from 'react';

const PaymentGateway = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <div>
      <h2>Selecciona tu método de pago</h2>
      <br></br><button onClick={() => handlePaymentMethodSelect('Tarjeta de crédito')}>
        Tarjeta de crédito
      </button><br></br>
      <br></br><button onClick={() => handlePaymentMethodSelect('Transferencia bancaria')}>
        Transferencia bancaria
      </button><br></br>
      <br></br><button onClick={() => handlePaymentMethodSelect('PayPal')}>
        PayPal
      </button><br></br>

      {selectedPaymentMethod && (
        <p>Has seleccionado: {selectedPaymentMethod}</p>
      )}
    </div>
  );
};

export default PaymentGateway;