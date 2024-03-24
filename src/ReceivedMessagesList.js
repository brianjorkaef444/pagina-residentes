import React from 'react';

const ReceivedMessagesList = ({ messages }) => {
  return (
    <div>
      <h4>Lista de Mensajes Recibidos debajo</h4>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReceivedMessagesList;


