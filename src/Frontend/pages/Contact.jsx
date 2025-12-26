import React, { useState } from "react";

export const Contact = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const openTime = 7;
  const closeTime = 19;
  const now = new Date();
  const costaRicaTime = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Costa_Rica",
    hour: "numeric",
    hour12: false,
  }).format(now);

  const currentHour = parseInt(costaRicaTime);
  const isOpen = currentHour >= openTime && currentHour < closeTime;
  return (
    <div className="container py-5 text-center">
      {/* Encabezado */}
      <h1
        style={{
          fontSize: "40px",
          fontWeight: "400",
          marginBottom: "1px",
          color: "var(--hbr-blue)",
        }}
      >
        ¡Es un gusto atenderle!
      </h1>
      <p className="text-muted mb-4">
        Atenderemos su solicitud de manera personalizada, ¡toda nuestra
        experiencia a su servicio!
      </p>

      {/* Botón de WhatsApp */}
      <div className="mb-5">
        <a
          href="https://wa.me/50671448850"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lg px-4 py-2 d-inline-flex align-items-center whatsapp"
          style={{ backgroundColor: "#435d66", color: "white", border: "none" }}
        >
          <i className="bi bi-whatsapp me-2" style={{ fontSize: "1.5rem" }}></i>
          Cotizaciones
        </a>
      </div>

      {/* Información de Contacto */}
      <div className="mb-5">
        <h3 className="fw-bold" style={{ color: "var(--hbr-blue)" }}>
          HBR Logística
        </h3>

        <p className="mb-1 text-muted">
          <i className="bi bi-geo-alt-fill me-2"></i>
          Mata Redonda, San José, Costa Rica
        </p>

        <p className="mb-4 text-muted">
          <i className="bi bi-telephone-fill me-2"></i>
          7144-8850
        </p>

        <div className="mb-5">
          <h4 className="fw-bold mt-4">Horario</h4>
          <p className="text-muted mb-0">
            <i className="bi bi-clock-fill me-2"></i>
            {isOpen ? (
              <span>
                <span className="text-success fw-bold">Abierto ahora</span> •
                Cierra a las 07:00 p.m.
              </span>
            ) : (
              <span>
                <span className="text-danger fw-bold">Cerrado</span> • Abre hoy
                a las 07:00 a.m.
              </span>
            )}
          </p>
          <small className="text-muted d-block mt-1">
            Lunes a Domingo: 07:00 a.m. – 07:00 p.m.
          </small>
        </div>
      </div>

      <div
        className="position-relative shadow-lg rounded overflow-hidden mx-auto"
        style={{ maxWidth: "1000px" }}
      >
        {!mapLoaded && (
          <div className="map-skeleton">
            <i className="bi bi-geo-alt"></i>
          </div>
        )}
        {/* Mapa */}
        <div
          className="ratio ratio-21x9 shadow-lg rounded"
          style={{
            backgroundColor: "var(--hbr-blue)", // Fondo del mismo color que el borde
            border: "4px solid var(--hbr-blue)", // Grosor aumentado para mayor visibilidad
            padding: "2px", // Este espacio hace que el borde sea visible
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15719.93550146018!2d-84.12097679854044!3d9.935299278007239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fca8bfb73e37%3A0x81473ea6db7a7c40!2sMata%20Redonda%20District%2C%20San%20Jos%C3%A9%20Province%2C%20San%20Jos%C3%A9!5e0!3m2!1sen!2scr!4v1766779076016!5m2!1sen!2scr"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            onLoad={() => setMapLoaded(true)}
            title="Ubicación HBR Logística"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
