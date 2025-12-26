import React from "react";
import { Link } from "react-router-dom";
import Maintenance from "../media/Mantenimiento.png";

export const Mantenimiento = () => {
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center text-center">
      <h1
        style={{
          fontSize: "70px",
          fontWeight: "900",
          marginBottom: "1px",
          color: "var(--hbr-blue)",
        }}
      >
        ¡Lo sentimos!
      </h1>

      {/* Icono animado o Imagen */}
      <img
        src={Maintenance}
        alt="Mantenimiento"
        className="img-fluid mb-1"
        style={{ maxWidth: "800px" }}
      />
      <p
        style={{
          maxWidth: "900px",
          fontSize: "25px",
          marginBottom: "70px",
        }}
      >
        Estamos moviendo algunas cosas para mejorar tu experiencia. Muy pronto
        la plataforma de <strong>HBR Logística</strong> estará disponible con
        nuevas funciones.
      </p>

      <Link to="/" className="btn btn-hbr-secondary btn-lg px-5 shadow">
        Volver al Inicio
      </Link>
    </div>
  );
};
