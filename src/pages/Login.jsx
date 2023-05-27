import axios from "axios";
import { useEffect, useState } from "react";

function Login() {

 
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState(null)

 
  async function autenticar(evento) {
    evento.preventDefault();

    const dados = { email, password };

    const response = await axios.post(
      "https://usuarios.ronierlima.dev/auth",
      dados
    );

    setUser(response.data.user)
    
    window.location.href = 'home'
  }

  return (
    <div>
      <h1>Faça o Login</h1>

      {user && <h2>Bem vindo, {user.name}</h2>}

      <form onSubmit={autenticar} method="POST" action="">
        <label htmlFor="username">Nome de Usuário:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <br />
        <label htmlFor="password">Senha:</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          onChange={(evento) => setPassword(evento.target.value)}
        />
        <br />
        <input type="submit" value="Entrar" />
      </form>
    </div>
  );
}

export default Login;
