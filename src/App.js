import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import RegistroUsuario from './RegistroUsuario'; // Importa la página de registro de usuario
import PaymentGateway from './PaymentGateway';
import PaymentUI from './PaymentUI';
import CommunicationPlatform from './CommunicationPlatform';
import ResidentInquiries from './ResidentInquiries';
import CuotasYRecaudaciones from './CuotasYRecaudaciones';
import ChatComunitario from './ChatComunitario';
import NewResidentsInfo from './NewResidentsInfo';
import VotingSystem from './VotingSystem';

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
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={RegistroUsuario} /> {/* Página de registro como página principal */}
          <Route path="/payment" component={PaymentGateway} />
          <Route path="/payment-ui" component={PaymentUI} />
          <Route path="/communication" component={CommunicationPlatform} />
          <Route path="/inquiries" component={ResidentInquiries} />
          <Route path="/cuotas" component={CuotasYRecaudaciones} />
          <Route path="/chat" component={ChatComunitario} />
          <Route path="/new-residents" component={NewResidentsInfo} />
          <Route path="/voting" component={VotingSystem} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;



