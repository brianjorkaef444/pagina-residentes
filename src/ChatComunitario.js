import React, { useState } from 'react';

function ChatComunitario() {
  const [messages, setMessages] = useState([]); // Estado para almacenar los mensajes del chat
  const [newMessage, setNewMessage] = useState(''); // Estado para el nuevo mensaje

  // Función para manejar el envío de un nuevo mensaje
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'Usuario' }]);
      setNewMessage('');
    }
  };

  return (
    <div>
      <h2>Chat Comunitario</h2>
      <div style={{ marginBottom: '20px' }}>
        {/* Mostrar los mensajes del chat */}
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.sender}: </strong> {message.text}
          </div>
        ))}
      </div>
      {/* Formulario para enviar un nuevo mensaje */}
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Escribe un mensaje..."
          style={{ marginRight: '10px' }}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ChatComunitario;