import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./Frontend/pages/Layout";
import { Home } from "./Frontend/pages/Inicio";
import { About } from "./Frontend/pages/Acerca";
import { Services } from "./Frontend/pages/Servicios";
import { Contact } from "./Frontend/pages/Contacto";
import { NotFound } from "./Frontend/Components/NotFound";
import { Mantenimiento } from "./Frontend/Components/Maintenance";
import { RegisterModal } from "./Frontend/Components/registerModal";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<NotFound />}>
      {/* Homepage */}
      <Route index element={<Home />} />

      {/* Other Routes */}
      <Route path="home" element={<Home />} />
      <Route path="acerca" element={<About />} />
      <Route path="servicios" element={<Services />} />
      <Route path="contacto" element={<Contact />} />
      <Route path="mantenimiento" element={<Mantenimiento />} />
      <Route path="plataforma" element={<Mantenimiento />} />
      <Route path="cotizar" element={<Mantenimiento />} />
      <Route path="registerModal" element={<RegisterModal />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
