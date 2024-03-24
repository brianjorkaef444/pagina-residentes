// InterfazUsuario.js
import React from 'react';
import UserProfile from './UserProfile';
import NotificationBar from './NotificationBar';

const InterfazUsuario = () => {
  return (
    <div>
      <h3>Interfaz de Usuario</h3>
      <UserProfile />
      <NotificationBar />
    </div>
  );
};

export default InterfazUsuario;

