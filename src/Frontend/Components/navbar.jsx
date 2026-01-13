import React, { useState } from "react"; 
import { NavLink, Link, useNavigate } from "react-router-dom";
import { RegisterModal } from "../Components/registerModal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Simulación de estado de sesión
  const isLoggedIn = false; 

  const handleCotizarClick = () => {
    if (isLoggedIn) {
      navigate("/cotizar");
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top"
        style={{ backgroundColor: "var(--hbr-blue)" }}
      >
        <div className="container">
          {/* Logo con subtexto Costa Rica */}
          <Link 
            className="navbar-brand fw-bold d-flex flex-column" 
            to="/" 
            style={{ lineHeight: "1.1" }}
          >
            <div>
              <span className="text-white">HBR</span>
              <span style={{ color: "var(--hbr-red)" }}> LOGÍSTICA</span>
            </div>
            <small 
              className="text-white-50" 
              style={{ 
                fontSize: "0.65em", 
                letterSpacing: "3.5px", 
                fontWeight: "normal",
                marginTop: "2px"
              }}
            >
              COSTA RICA
            </small>
          </Link>

          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/">Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/Acerca">Nosotros</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/Servicios">Servicios</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/Contacto">Contacto</NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <RegisterModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;