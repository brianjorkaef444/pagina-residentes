import React from 'react';

const NewResidentsInfo = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Información para Nuevos Residentes</h2>
      <p style={styles.paragraph}>Esta es la información para los nuevos residentes...</p>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '20px'
  },
  heading: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px'
  },
  paragraph: {
    fontSize: '16px',
    color: '#666'
  }
};

export default NewResidentsInfo;