import { useRoutes } from "react-router-dom";
import { Home } from "../Pages/Home";

function AppRoutes() {
    const routes = useRoutes([
        {path: '/', element: <Home />},
        {path: '*', element: <Home />}
    ]);

    return routes;
}

export {AppRoutes};