import Header from "./components/Header";
import "./global.css";

import { isLogado } from "./auth";
import Routes from "./Routes";

function App() {
  return (
    <>
      {isLogado && <Header></Header>}

      <Routes />
    </>
  );
}

export default App;
