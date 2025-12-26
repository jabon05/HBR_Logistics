import React from "react";
import { Link } from "react-router-dom";
import imagen404 from "../media/404.png";

export const NotFound = () => {
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
        ¡No lo encontramos!
      </h1>

      {/* Icono animado o Imagen */}
      <img
        src={imagen404}
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
        Disculpa, parece que no podemos encontrar el contenido que estas
        buscando...
      </p>

      <Link to="/" className="btn btn-hbr-secondary btn-lg px-5 shadow">
        Volver al Inicio
      </Link>
    </div>
  );
};
