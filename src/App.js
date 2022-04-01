import "./App.css";
import { useState } from "react";

function App() {
  const [login, setlogin] = useState(false);
  return (
    <div className="App">
      {login ? (
        <header className="App-header"></header>
      ) : (
        <section className="Home">
          <section className="entrar">
            <h1>
              <img src="../public/img/Nu_Kenzie.svg" alt="Nu kenzie" />
            </h1>
            <h2>Centralize o controle das finanças</h2>
            <p>de forma rapida e segura</p>
            <button onClick={() => setlogin(true)}>Inicar</button>
          </section>
          <section className="img-Home">
            <img src="../public/img/Group_277.svg" alt="imagem do app" />
          </section>
        </section>
      )}
    </div>
  );
}

export default App;
