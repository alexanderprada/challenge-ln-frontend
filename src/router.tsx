import { createBrowserRouter } from "react-router";
import Home from "./pages/home";
import Noticia from "./pages/new";
import MainLayout from "./layouts/main-layout";

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    )
  },
  {
    path: "/noticia",
    element: (
      <MainLayout>
        <Noticia />
      </MainLayout>
    )
  }
]);

export default router;
