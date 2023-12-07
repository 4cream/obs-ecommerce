import { useRoutes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Products } from "../Pages/Products";
import { NotFound } from "../Pages/NotFound";

function AppRoutes() {
    const routes = useRoutes([
        {path: '/', element: <Home />},
        {path: '/products', element: <Products />},
        {path: '*', element: <NotFound />}
    ]);

    return routes;
}

export {AppRoutes};