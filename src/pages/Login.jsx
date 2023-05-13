import axios from "axios";
import { useState } from "react";

function Login() {

  const [usuarioLogado, setUsuarioLogado] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function autenticar(evento) {

    evento.preventDefault();

    const dados = { email, password };

    const response = await axios.post(
      "https://digitalcollege-auth.onrender.com/auth",
      dados
    );

    console.log(response.data);
    setUsuarioLogado(response.data.user)
    
  }

  return (
    <div>

      {usuarioLogado?.name}


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
