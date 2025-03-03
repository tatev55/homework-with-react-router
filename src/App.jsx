import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/layout/layout";
import Home from './components/pages/home/home';
import About from "./components/pages/about/about"
import Gallery from "./components/pages/gallery/gallery";
import NotFound from "./components/not-found/not-found";
import ProductDetails from "./components/pages/recipe-details/recipe-details";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
  
      {
        path: "/gallery",
        element: <Gallery />
      },
      {
        path: "*",
        element: <NotFound />
      },
      {
        path: "/recipe/:id",
        element: <ProductDetails />
      },
    ]
  }
])
function App() {

  return(
    <RouterProvider router={router} />
  )
}

export default App


