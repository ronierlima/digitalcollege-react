import { useEffect, useState } from "react";
import Table from "../components/Table";
import { IBGEAPI } from "../services/IBGEApi";


const ESTADO_DEFAULT = "CE";

function ListCities() {
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [loading, setLoading] = useState(false);

  const [uf, setUf] = useState(ESTADO_DEFAULT);

  useEffect(() => {
    buscarEstados();
  }, []);

  useEffect(() => {
    buscarCidades(uf);
  }, [uf]);

  async function buscarEstados() {
    try {
      setLoading(true);
      const response = await IBGEAPI.get(
        `/localidades/estados`
      );

      setEstados(response.data);
    } catch (error) {
      console.error("Erro ao buscar estados:", error);
      setEstados([]);
    }

    setLoading(false);
  }

  async function buscarCidades(estadoUF = ESTADO_DEFAULT) {
    setLoading(true);
    try {
      const response = await IBGEAPI.get(`/localidades/estados/${estadoUF}/municipios`);

      setCidades(response.data);
    } catch (error) {
      console.error(`Erro ao buscar cidades do estado ${estadoUF}:`, error);
      setCidades([]);
    }
    setLoading(false);
  }

  return (
    <div>
      {loading && <h1>Carregando ... </h1>}
      <label htmlFor="estado">Estado:</label>

      <select
        name="estado"
        id="estado"
        value={uf}
        onChange={(evento) => setUf(evento.target.value)}
      >
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

export default ListCities;
