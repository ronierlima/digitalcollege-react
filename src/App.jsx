import { useEffect, useState } from "react";
import Table from "./components/Table";
import "./global.css";

import axios from "axios";

const ESTADO_DEFAULT = "CE";

function App() {
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);

  const [uf, setUf] = useState(ESTADO_DEFAULT);

  useEffect(() => {
    buscarEstados();
  }, []);

  useEffect(() => {
    buscarCidades(uf);
  }, [uf]);

  async function buscarEstados() {
    try {
      const response = await axios.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados`
      );

      setEstados(response.data);
    } catch (error) {
      console.error("Erro ao buscar estados:", error);
      setEstados([]);
    }
  }

  async function buscarCidades(estadoUF = ESTADO_DEFAULT) {
    try {
      const response = await axios.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoUF}/municipios`
      );

      setCidades(response.data);
    } catch (error) {
      console.error(`Erro ao buscar cidades do estado ${estadoUF}:`, error);
      setCidades([]);
    }
  }

  return (
    <div>
      <label htmlFor="estado">Estado:</label>

      <select name="estado" id="estado" value={uf}>
        {estados.map((estado) => (
          <option key={estado.sigla} value={estado.sigla}>
            {`${estado.nome} - ${estado.sigla}`}
          </option>
        ))}
      </select>

      <Table dados={cidades} />
    </div>
  );
}

export default App;
