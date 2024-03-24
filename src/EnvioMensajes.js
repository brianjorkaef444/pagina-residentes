import React from 'react';

const EnvioMensajes = () => {
  const enviarMensaje = () => {
    console.log('Mensaje enviado');
  };

  return (
    <div>
      <h3>Envío de Mensajes</h3>
      <button onClick={enviarMensaje}>Enviar Mensaje</button>
    </div>
  );
};

export default EnvioMensajes;
