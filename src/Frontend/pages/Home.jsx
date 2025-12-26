import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="hero-wrapper">
      {/* 1. Carrusel de Fondo (Solo Imágenes) */}
      <div
        id="bgCarousel"
        className="carousel slide carousel-fade hero-bg-carousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000"
              alt="Logística 1"
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800"
              alt="Logística 2"
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2000"
              alt="Logística 3"
            />
          </div>
        </div>
      </div>

      {/* 2. Contenido Estático (Fuera del Div del Carrusel) */}
      <div className="hero-content-overlay">
        {/* --- AQUÍ ESTÁ EL CAMBIO: NUEVO CONTENEDOR "CARD" --- */}
        <div className="hero-card text-center text-white">
          <h1 className="mb-3">
            HBR <span className="accent-text">Logística</span>
          </h1>
          <h2
            className="h4 fw-light mb-4 text-uppercase italic"
            style={{ letterSpacing: "4px" }}
          >
            Eficiencia en movimiento
          </h2>
          <div
            className="mx-auto mb-5"
            style={{
              width: "60px",
              height: "4px",
              backgroundColor: "var(--hbr-red)",
            }}
          ></div>

          <p className="lead mb-5 px-md-5">
            Somos líderes en la gestión de cadena de suministro. Conectamos tus
            productos con el mercado global mediante soluciones integrales.
          </p>
        </div>
        {/* --- FIN DEL CONTENEDOR CARD --- */}
      </div>
    </div>
  );
};
