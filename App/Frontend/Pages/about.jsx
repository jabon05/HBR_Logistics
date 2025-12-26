import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <div className="p-5 mb-4 bg-dark text-white rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Sobre Nosotros</h1>
          <p className="col-md-8 fs-4">
            Estamos utilizando un sistema de rutas dinámico que permite navegar sin recargar el navegador,
            ofreciendo una experiencia de usuario fluida (SPA).
          </p>
        </div>
      </div>
      
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Misión</h5>
              <p className="card-text">Crear interfaces modernas y rápidas.</p>
            </div>
          </div>
        </div>
        {/* Puedes agregar más columnas aquí */}
      </div>
    </div>
  );
};

export default About;