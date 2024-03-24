import React, { useState } from 'react';

const PaymentUI = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    accountNumber: '',
    amount: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
  };

  const handlePaymentSubmit = () => {
    console.log('Pago enviado:');
    console.log('Número de cuenta:', paymentDetails.accountNumber);
    console.log('Monto:', paymentDetails.amount);
  };

  return (
    <div>
      <h2>Realiza tu pago</h2>
      <label htmlFor="accountNumber">Cuenta a donde se va a pagar:</label>
      <input
        type="text"
        id="accountNumber"
        name="accountNumber"
        value={paymentDetails.accountNumber}
        onChange={handleInputChange}
      />
      <label htmlFor="amount">Monto:</label>
      <input
        type="text"
        id="amount"
        name="amount"
        value={paymentDetails.amount}
        onChange={handleInputChange}
      />
      <button onClick={handlePaymentSubmit}>Realizar Pago</button>
    </div>
  );
};

export default PaymentUI;