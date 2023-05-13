import { Routes as Rotas, Route } from "react-router-dom";
import ListCities from "./pages/ListCities";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function Routes() {
    return (
        <Rotas>
            <Route path="/" element={<ListCities />} />
            <Route path="/login" element={<Login />} />

            <Route path="*" element={<NotFound />} />
        </Rotas>
    )
}

export default Routes;