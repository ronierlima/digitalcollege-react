import axios from "axios";
import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function autenticar(evento) {

    evento.preventDefault();

    const dados = { email, password };

    const response = await axios.post(
      "https://usuarios.ronierlima.dev/auth",
      dados
    );


  }

  return (
    <div>

      <h1>Faça o Login</h1>

      <form onSubmit={autenticar} method="POST" action="">
        <label htmlFor="username">Nome de Usuário:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={(evento) => setEmail(evento.target.value)}
        />
        
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(evento) => setPassword(evento.target.value)}
        />

        <input type="submit" value="Entrar" />
      </form>
    </div>
  );
}

export default Login;
