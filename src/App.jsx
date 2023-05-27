import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./global.css";
import NotFound from "./pages/NotFound";
import ListCities from "./pages/ListCities";
import Login from "./pages/Login";
import { isLogado } from "./auth";

function App() {
  return (
    <>
      {isLogado && <Header></Header>}

      <Routes>
        {isLogado ? (
          <>
            <Route path="/" element={<ListCities></ListCities>}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </>
        ) : (
          <Route path="*" element={<Login />}></Route>
        )}
      </Routes>
    </>
  );
}

export default App;
