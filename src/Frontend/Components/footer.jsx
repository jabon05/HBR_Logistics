import React from "react";
import FluxCoding from '../media/FluxCoding.png'; 

const Footer = () => {
  return (
    <footer
      className="text-white py-4 mt-auto" // mt-auto ayuda a empujar al final en layouts flex
      style={{ 
        backgroundColor: "var(--hbr-blue)", 
        borderTop: "2px solid var(--hbr-red)",
        minHeight: "100px", // Altura mínima para asegurar presencia visual
        display: "flex",
        alignItems: "center" // Centrado vertical de la estructura interna
      }}
    >
      <div className="container">
        {/* Eliminamos 'mb-3' para que no haya espacio extra abajo */}
        <div className="row align-items-center">
          
          {/* Lado Izquierdo: Créditos */}
          <div className="col-md-4 text-center text-md-start">
            <p className="mb-0"> {/* Usamos mb-0 para evitar márgenes del navegador */}
              <span className="small opacity-75">Elaborado por:</span>
              <span className="fw-bold ms-2 text-white">Flux Coding</span>
            </p>
          </div>

          {/* Centro: Copyright */}
          <div className="col-md-4 text-center">
            <p className="mb-0 fw-bold" style={{ fontSize: "1.2rem" }}>
              © 2025 <span style={{ color: "var(--hbr-red)" }}>HBR Logística</span>
            </p>
          </div>

          {/* Lado Derecho: Iconos Sociales */}
          <div className="col-md-4 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="https://wa.me/50671448850" className="social-icon whatsapp">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="https://www.facebook.com/HBRMudanzas" className="social-icon facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/hbrfletesymudanzas/" className="social-icon instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;