import React from 'react';

const GestionListas = () => {
  const agregarLista = () => {
    console.log('Lista agregada');
  };

  return (
    <div>
      <h3>Gestión de Listas de Distribución</h3>
      <button onClick={agregarLista}>Agregar Lista</button>
    </div>
  );
};

export default GestionListas;