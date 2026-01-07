import React from "react";
import { Link } from "react-router-dom";
import Maintenance from "../media/Mantenimiento.png";

export const Mantenimiento = () => {
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="maintenance-heading">
        ¡Lo sentimos!
      </h1>

      <img
        src={Maintenance}
        alt="Trabajadores realizando mantenimiento técnico"
        className="img-fluid mb-4"
        style={{ maxWidth: "600px" }} // Slightly smaller often looks cleaner
      />

      <p className="maintenance-text">
        Estamos moviendo algunas cosas para mejorar tu experiencia. Muy pronto
        la plataforma de <strong>HBR Logística</strong> estará disponible con
        nuevas funciones.
      </p>

      <Link to="/" className="btn btn-hbr-secondary btn-lg px-5 shadow-sm">
        Volver al Inicio
      </Link>
    </div>
  );
};