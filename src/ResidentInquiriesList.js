import React from 'react';

const ResidentInquiriesList = ({ inquiries }) => {
  return (
    <div>
      <h4>Lista de Inquietudes y Quejas de Residentes</h4>
      No puedo pagar mi servicio del agua (Nombre del residente): Maria Cervantes<br></br>
      No puedo realizar mi pago de luz (Nombre del residente): Pedro Sanchez
    <ul>
        {inquiries.map((inquiry, index) => (
          <li key={index}>{inquiry.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResidentInquiriesList;