import React, { useState } from 'react';

const ResidentInquiriesForm = ({ onSubmit }) => {
  const [inquiry, setInquiry] = useState('');

  const handleChange = (event) => {
    setInquiry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inquiry);
    setInquiry('');
  };

  return (
    <div>
      <h4>Formulario de Inquietudes y Quejas de Residentes</h4>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={inquiry} onChange={handleChange} />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ResidentInquiriesForm;