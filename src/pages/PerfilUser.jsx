import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

// import { Container } from './styles';

function PerfilUser() {
  const { id } = useParams();

  console.log(id);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://usuarios.ronierlima.dev/users/${id}`
      );

      const responseLinks = await axios.get(
        `https://usuarios.ronierlima.dev/users/${id}/links`
      );

      console.log(responseLinks.data);

      setUser(response.data);
      
    } catch (error) {
        alert('Deu error')
    } finally {
        setLoading(false);
    }
  }

  return loading ? <>carregando...</> : <Card user={user}></Card>;
}

export default PerfilUser;
