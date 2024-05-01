import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegistroUsuario from './RegistroUsuario';
import AlertasEmergencia from './AlertasEmergencia'; // Importa tu nuevo componente de Alertas de Emergencia

// Importa los demás componentes necesarios

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          {/* Aquí van tus enlaces de navegación */}
        </nav>

        <Routes>
          <Route path="/" element={<RegistroUsuario />} />
          <Route path="/alertas-emergencia" element={<AlertasEmergencia />} /> {/* Nueva ruta para Alertas de Emergencia */}
          {/* Define el resto de tus rutas aquí */}
        </Routes>
      </div>
    </Router>
  );
};

export default App; 