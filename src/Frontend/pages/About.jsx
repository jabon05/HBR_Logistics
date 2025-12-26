import React from "react";

export const About = () => {
  return (
    <div className="bg-white">
      {/* Encabezado de página */}
      <section
        className="py-5 text-center text-white"
        style={{ backgroundColor: "var(--hbr-blue)" }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">
            Nuestra <span style={{ color: "var(--hbr-red)" }}>Historia</span>
          </h1>
          <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
            En HBR Logística, transformamos la complejidad de la cadena de
            suministro en soluciones simples y eficientes.
          </p>
        </div>
      </section>

      {/* Sección Quiénes Somos */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop"
                alt="Equipo de trabajo"
                className="img-fluid rounded-4 shadow-lg border-start border-5 border-danger"
                style={{
                  height: "450px",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="col-lg-6 ps-lg-5">
              <h2 className="fw-bold mb-2" style={{ color: "var(--hbr-blue)" }}>
                ¿Quiénes Somos?
              </h2>
              <p className="text-secondary mb-2">
                Somos una empresa apasionada por la innovación y la excelencia
                operativa. Desde nuestra fundación, nos hemos dedicado a
                redefinir los estándares de la logística global.
              </p>
              <div className="d-flex align-items-center mb-3">
                <div
                  className="bg-danger rounded-circle p-2 me-3"
                  style={{ width: "12px", height: "12px" }}
                ></div>
                <p className="mb-0 fw-bold text-dark">
                  Seguridad en el transporte de sus bienes o mercancias.
                </p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div
                  className="bg-danger rounded-circle p-2 me-3"
                  style={{ width: "12px", height: "12px" }}
                ></div>
                <p className="mb-0 fw-bold text-dark">
                  Compromiso total con la puntualidad.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div
                  className="bg-danger rounded-circle p-2 me-3"
                  style={{ width: "12px", height: "12px" }}
                ></div>
                <p className="mb-0 fw-bold text-dark">
                  Experiencia comprobada en el area logística.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Misión y Visión (Tarjetas) */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm p-4 rounded-4">
                <div className="mb-3">
                  <i
                    className="bi bi-rocket-takeoff fs-1"
                    style={{ color: "var(--hbr-red)" }}
                  ></i>
                </div>
                <h3 className="fw-bold" style={{ color: "var(--hbr-blue)" }}>
                  Nuestra Misión
                </h3>
                <p className="text-secondary">
                  Impulsar el crecimiento de nuestros clientes a través de
                  servicios logísticos integrales, utilizando tecnología de
                  vanguardia y un equipo humano altamente capacitado.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm p-4 rounded-4">
                <div className="mb-3">
                  <i
                    className="bi bi-eye fs-1"
                    style={{ color: "var(--hbr-red)" }}
                  ></i>
                </div>
                <h3 className="fw-bold" style={{ color: "var(--hbr-blue)" }}>
                  Nuestra Visión
                </h3>
                <p className="text-secondary">
                  Ser el referente número uno en logística y tecnología en la
                  región, siendo reconocidos por nuestra integridad, innovación
                  y calidad superior.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
