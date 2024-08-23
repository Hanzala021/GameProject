import { createBrowserRouter  } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import GameDetail from "./pages/GameDetail";
import Error from "./pages/Error";

const router = createBrowserRouter([
   {
    path : '/',
    errorElement: <Error />,
    element : <Layout />,
    children : [{
      index:true,
      element: <Home />
    },
    {
      path: 'games/:slug',
      element: <GameDetail />
    }
   ]
   }
]);

export default router