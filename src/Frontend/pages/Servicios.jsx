import React from 'react';

export const Services = () => {
  const misServicios = [
    {
      titulo: "Soluciones de Transporte Logístico",
      descripcion: "Llevamos su mercadería de manera rápida y confiable, ya sea punto a punto, a múltiples destinos o a través de rutas de entrega diseñadas a su medida. Su carga viaja siempre protegida, respaldada por nuestras pólizas de seguro.",
      img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800",
      icono: "bi-truck"
    },
    {
      titulo: "Servicios de Inventario y Maquila",
      descripcion: "Ofrecemos servicios especializados de revisión físico-teórica de mercadería, gestión de inventarios, control de merma, etiquetado y re-etiquetado, embalaje, estibado y armado de bandeos promocionales. Operamos en sus instalaciones, en puntos de venta o en nuestras propias sedes, según sus requerimientos.",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
      icono: "bi-house-gear"
    },
    {
      titulo: "Gestión de Personal Operativo",
      descripcion: "Si requiere personal de apoyo para su operación, ya sea temporal o permanente, indíquenos sus necesidades y con gusto le apoyaremos para fortalecer su operación de forma ágil y sin trámites complejos.",
      img: "https://media.istockphoto.com/id/1464340066/photo/industrial-worker-works-with-co-worker-at-overseas-shipping-container-yard-logistics-supply.jpg?s=612x612&w=0&k=20&c=NdTm-aUeQY9XlxVI3MAC1V3m0ZyqjuDIYD1lVyW4EcE=",
      icono: "bi bi-people"
    },
    {
      titulo: "Mudanzas Empresariales y Particulares",
      descripcion: "Realizamos mudanzas residenciales con servicio básico o premium. El servicio básico incluye carga y transporte de sus bienes; el servicio premium incorpora inventario, embalaje, carga y descarga, armado y desarmado de mobiliario, instalación de equipos, limpieza básica y acomodo en destino. Indíquenos sus requerimientos y elaboraremos un presupuesto a su medida.",
      img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800",
      icono: "bi-box-seam"
    }
  ];

  return (
    <div className="bg-light py-5">
      <div className="container">
        {/* Encabezado de la sección */}
        <div className="text-center mb-5">
          <h6 className="text-uppercase fw-bold" style={{ color: 'var(--hbr-red)', letterSpacing: '2px' }}>Soluciones Integrales</h6>
          <h2 className="display-5 fw-bold" style={{ color: 'var(--hbr-blue)' }}>Nuestros Servicios</h2>
          <div className="mx-auto" style={{ width: '60px', height: '4px', backgroundColor: 'var(--hbr-red)' }}></div>
        </div>

        <div className="row g-4">
          {misServicios.map((servicio, index) => (
            <div className="col-12 col-xl-6" key={index}>
              <div className="card h-100 border-0 shadow-sm overflow-hidden service-card">
                <div className="row g-0 h-100">
                  {/* Imagen a un costado */}
                  <div className="col-md-5">
                    <img 
                      src={servicio.img} 
                      className="img-fluid h-100 w-100" 
                      alt={servicio.titulo}
                      style={{ objectFit: 'cover', minHeight: '200px' }}
                    />
                  </div>
                  {/* Contenido al otro costado */}
                  <div className="col-md-7 d-flex align-items-center">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-2">
                        <i className={`bi ${servicio.icono} fs-4 me-2`} style={{ color: 'var(--hbr-red)' }}></i>
                        <h4 className="card-title fw-bold mb-0" style={{ color: 'var(--hbr-blue)' }}>
                          {servicio.titulo}
                        </h4>
                      </div>
                      <p className="card-text text-secondary">
                        {servicio.descripcion}
                      </p>
                      <button className="btn btn-sm p-0 fw-bold border-0" style={{ color: 'var(--hbr-red)' }}>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};