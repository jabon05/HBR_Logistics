import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./Frontend/pages/Layout";
import { Home } from "./Frontend/pages/Home";
import { About } from "./Frontend/pages/About";
import { Services } from "./Frontend/pages/Services";
import { Contact } from "./Frontend/pages/Contact";
import { NotFound } from "./Frontend/Components/NotFound";
import { Mantenimiento } from "./Frontend/Components/Maintenance";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<NotFound />}>
      {/* Homepage */}
      <Route index element={<Home />} />

      {/* Other Routes */}
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
      <Route path="mantenimiento" element={<Mantenimiento />} />
      <Route path="platform" element={<Mantenimiento />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
