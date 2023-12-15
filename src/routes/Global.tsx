import { useRoutes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Products } from "../Pages/Products";
import { ProductOverviews } from "../Components/ProductOverviews";
import { NotFound } from "../Pages/NotFound";

function AppRoutes() {
    const routes = useRoutes([
        {path: '/', element: <Home />},
        {path: '/products', element: <Products />},
        {path: '/products/:slug', element: <ProductOverviews />},
        {path: '*', element: <NotFound />}
    ]);

    return routes;
}

export {AppRoutes};