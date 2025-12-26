import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top"
      style={{ backgroundColor: "var(--hbr-blue)" }}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <span className="text-white">HBR</span>
          <span style={{ color: "var(--hbr-red)" }}>LOGÍSTICA</span>
        </Link>

        <ul className="navbar-nav ms-auto align-items-center">
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/">
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/About">
              Nosotros
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/Services">
              Servicios
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/Contact">
              Contacto
            </NavLink>
          </li>
          <li className="nav-item ms-lg-3">
            <Link
              className="btn btn-sm px-4 fw-bold"
              to="/plataforma"
              style={{
                backgroundColor: "var(--hbr-red)",
                color: "white",
                borderRadius: "20px",
              }}
            >
              Acceder a la plataforma
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
