import React, { useState } from 'react';
import SendMessageForm from './SendMessageForm';
import ReceivedMessagesList from './ReceivedMessagesList';

const CommunicationPlatform = () => {
  const [receivedMessages, setReceivedMessages] = useState([]);

  const handleSendMessage = (message) => {
    // Simular el envío del mensaje y agregarlo a la lista de mensajes recibidos
    setReceivedMessages([...receivedMessages, message]);
  };

  return (
    <div>
      <h3>Plataforma de Comunicación</h3>
      <SendMessageForm onSendMessage={handleSendMessage} />
      <ReceivedMessagesList messages={receivedMessages} />
    </div>
  );
};

export default CommunicationPlatform;
