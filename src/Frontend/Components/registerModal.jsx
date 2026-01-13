import React, { useState } from "react";

export const RegisterModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de registro:", formData);
    // Aquí iría tu lógica de conexión con el backend
    onClose(); // Cerrar tras enviar
  };

  return (
    <>
      <div 
        className="modal-backdrop fade show" 
        onClick={onClose}
        style={{ zIndex: 1050 }}
      ></div>

      {/* Estructura del Modal */}
      <div className="modal d-block" tabIndex="-1" style={{ zIndex: 1060 }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg">
            
            {/* Encabezado */}
            <div className="modal-header text-white" style={{ backgroundColor: "var(--hbr-blue)" }}>
              <h5 className="modal-title fw-bold">Regístrate</h5>
              <button 
                type="button" 
                className="btn-close btn-close-white" 
                onClick={onClose}
              ></button>
            </div>

            {/* Cuerpo del Formulario */}
            <div className="modal-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Nombre Completo</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Ej: Juan Pérez"
                    required
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Correo Electrónico</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="correo@ejemplo.com"
                    required
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Contraseña</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    placeholder="mínimo 8 caracteres"
                    required
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                </div>
                
                <div className="d-grid gap-2 mt-4">
                  <button 
                    type="submit" 
                    className="btn text-white fw-bold"
                    style={{ backgroundColor: "var(--hbr-red)", borderRadius: "20px" }}
                  >
                    Registrarse
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-light" 
                    onClick={onClose}
                    style={{ borderRadius: "20px" }}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
