import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegistroUsuario from './RegistroUsuario';
import PaymentGateway from './PaymentGateway';
import PaymentUI from './PaymentUI';
import CommunicationPlatform from './CommunicationPlatform';
import ResidentInquiries from './ResidentInquiries';
import CuotasYRecaudaciones from './CuotasYRecaudaciones';
import ChatComunitario from './ChatComunitario';
import NewResidentsInfo from './NewResidentsInfo';
import VotingSystem from './VotingSystem';
import AlertasEmergencia from './AlertasEmergencia'; // Importa tu nuevo componente de Alertas de Emergencia

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Registro de Usuario</Link>
            </li>
            <li>
              <Link to="/payment">Pago</Link>
            </li>
            <li>
              <Link to="/payment-ui">Interfaz de Pago</Link>
            </li>
            <li>
              <Link to="/communication">Plataforma de Comunicación</Link>
            </li>
            <li>
              <Link to="/inquiries">Inquietudes de Residentes</Link>
            </li>
            <li>
              <Link to="/cuotas">Cuotas y Recaudaciones</Link>
            </li>
            <li>
              <Link to="/chat">Chat Comunitario</Link>
            </li>
            <li>
              <Link to="/new-residents">Información para Nuevos Residentes</Link>
            </li>
            <li>
              <Link to="/voting">Sistema de Votación</Link>
            </li>
            <li>
              <Link to="/alertas-emergencia">Alertas de Emergencia</Link> {/* Agrega el enlace para Alertas de Emergencia */}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<RegistroUsuario />} />
          <Route path="/payment" element={<PaymentGateway />} />
          <Route path="/payment-ui" element={<PaymentUI />} />
          <Route path="/communication" element={<CommunicationPlatform />} />
          <Route path="/inquiries" element={<ResidentInquiries />} />
          <Route path="/cuotas" element={<CuotasYRecaudaciones />} />
          <Route path="/chat" element={<ChatComunitario />} />
          <Route path="/new-residents" element={<NewResidentsInfo />} />
          <Route path="/voting" element={<VotingSystem />} />
          <Route path="/alertas-emergencia" element={<AlertasEmergencia />} /> {/* Agrega la ruta para Alertas de Emergencia */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
