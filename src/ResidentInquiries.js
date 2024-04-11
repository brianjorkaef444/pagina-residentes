import React, { useState } from 'react';
import ResidentInquiriesForm from './ResidentInquiriesForm';
import ResidentInquiriesList from './ResidentInquiriesList';

const ResidentInquiries = () => {
  const [inquiries, setInquiries] = useState([]);

  const handleSubmit = (inquiry) => {
    setInquiries([...inquiries, inquiry]);
  };

  return (
    <div>
      <h3>Sección de Inquietudes y Quejas de Residentes</h3>
      Servicios de agua<br></br> 
      Servicios de luz
      <ResidentInquiriesForm onSubmit={handleSubmit} />
      <ResidentInquiriesList inquiries={inquiries} />
    </div>
  );
};

export default ResidentInquiries;