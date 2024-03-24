// NotificationBar.js
import React from 'react';

const NotificationBar = () => {
  return (
    <div>
      <h4>Notification Bar</h4>
      <ul>
        <li>Nueva notificación: ¡Tienes un nuevo mensaje!</li>
        <li>Nueva notificación: Revisa tu perfil para actualizar tu información.</li>
        {/* Otras notificaciones */}
      </ul>
    </div>
  );
};

export default NotificationBar;
