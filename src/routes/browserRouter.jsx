import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import {
  Home,
  Layout,
  NewSales,
  Aboutme,
  ClientSales,
  SalesEngagement,
  NewSalesInfrastructure,
  Meet,
} from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/newSales" element={<NewSales />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/clientSales" element={<ClientSales />} />
        <Route path="/salesEngagement" element={<SalesEngagement />} />
        <Route path="/infrastructure" element={<NewSalesInfrastructure />} />
        <Route path="/meet" element={<Meet />} />
      </Route>
    </>
  )
);

export default router;
