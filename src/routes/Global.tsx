import { useRoutes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Products } from "../Pages/Products";

function AppRoutes() {
    const routes = useRoutes([
        {path: '/', element: <Home />},
        {path: '/products', element: <Products />},
        {path: '*', element: <Home />}
    ]);

    return routes;
}

export {AppRoutes};