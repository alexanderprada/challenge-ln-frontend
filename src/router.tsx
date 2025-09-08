import { createBrowserRouter } from "react-router";
import Home from "./pages/home";
import MainLayout from "./layouts/main-layout";
import NewsDetail from "./pages/news-detail";

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
        <NewsDetail />
      </MainLayout>
    )
  }
]);

export default router;
