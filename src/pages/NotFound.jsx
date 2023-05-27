import { Link } from "react-router-dom";

function NotFound() {
    return (
      <div>
        <h1>Não encontrada</h1>
        <Link to="/">Voltar para home</Link>
      </div>
    );
  }
  
  export default NotFound;
  