import { Routes as Rotas, Route } from "react-router-dom";
import ListCities from "./pages/ListCities";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { isLogado } from "./auth";
import ListUsers from "./pages/ListUsers";
import PerfilUser from "./pages/PerfilUser";

function Routes() {
    return (
        <Rotas>
            <Route path="/users" element={<ListUsers />}></Route>
            <Route path="/users/:id" element={<PerfilUser />}></Route>

            {isLogado ? (
                <>
                    <Route path="/" element={<ListCities />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </>
            ) : (
                <Route path="*" element={<Login />}></Route>
            )}
        </Rotas>
    )
}

export default Routes;